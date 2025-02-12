// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor(){
        owner = payable(msg.sender);
    }
    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    mapping(uint256 => MarketItem) private idToMarketItem;
    event MarketItemCreated (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address payable seller,
        address payable owner,
        uint256 price,
        bool sold
    );

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
            require(price>0,"Price must be greater than 0");
            require(msg.value == listingPrice,"Price must be equal to the listing price");
            _itemIds.increment();
            uint256 itemId = _itemIds.current();

            idToMarketItem[itemId] = MarketItem(
                itemId,
                nftContract,
                tokenId,
                payable(msg.sender),
                payable(address(0)),
                price,
                false
            );
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        emit MarketItemCreated(itemId, nftContract, tokenId, payable(msg.sender), payable(address(0)), price, false);

            
    }

    function createMarketSale(
        address nftContract,
        uint256 itemId
    ) public payable nonReentrant{
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;
        require(msg.value == price,"Price must be equal to the listing price");

        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC721(nftContract).transferFrom(address(this),msg.sender,  tokenId);
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemSold.increment();
        payable(owner).transfer(listingPrice);
    }

    function fetchMarketItem() public view returns (MarketItem[] memory){
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for(uint256 i = 0; i < itemCount; i++){
            if(idToMarketItem[i+1].owner ==address(0)){
                uint currentId =idToMarketItem[i+1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
            return items;
    }

    function fetchMyNfts() public view returns (MarketItem[] memory){
        uint totalItemCount = _itemIds.current();
        uint itemCount =0;
        uint currentIndex = 0;
        for (uint i =0; i<totalItemCount; i++){
            if(idToMarketItem[i+1].owner == msg.sender){
                itemCount++;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0;i < totalItemCount; i++){
            if(idToMarketItem[i+1].owner ==msg.sender){
                uint currentId = idToMarketItem[i+1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

    function fetchItemsCreated() public view returns (MarketItem[] memory){
        uint totalItemCount = _itemIds.current();
        uint itemCount =0;
        uint currentIndex = 0;

        for(uint i =0; i<totalItemCount;i++){
            if(idToMarketItem[i+1].seller == msg.sender){
                itemCount++;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint i =0;i< totalItemCount; i++){
            if(idToMarketItem[i+1].seller == msg.sender){
                uint currentId = idToMarketItem[i+1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

}