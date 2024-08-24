// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;   //for increment
    Counters.Counter private _tokenIds;   //for increment
    address contractAddress;  // for contract address

    constructor(address marketplaceAdress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAdress;         //marketplace address is the address of the contract
    }
    
    function createToken(string memory tokenURI) public returns (uint){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender,newItemId);
        _setTokenURI(newItemId,tokenURI);
        setApprovalForAll(contractAddress ,true);
        return newItemId;
    }

}
