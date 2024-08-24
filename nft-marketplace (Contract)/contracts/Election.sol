// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
//import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Election {
    address public owner;
    // candidates
    uint256 public cId = 0;
    uint256 vId = 0;
    uint256 maxCandidate = 5;
    uint256 maxVoters = 20;
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    //voters
    struct Voter {
        uint256 voterId;
        string name;
        address voterAddress;
        bool voted;
    }
    mapping(uint256 => Candidate) public idToCandidates;
    //mapping(uint => Voter) public idToVoters;
    mapping(address => Voter) public addressToVoters;

    constructor() {
        owner = msg.sender;
    }

    function CreateCandidates(string memory _name) public returns (uint256) {
        require(owner == msg.sender, "You can not create any candidate");
        cId++;
        uint256 vote = idToCandidates[cId].voteCount + 1;
        idToCandidates[cId] = Candidate(cId, _name, vote);
        return cId;
    }

    function vote(uint256 _candidatesNo) public returns (bool) {
        bool isVoted = addressToVoters[msg.sender].voted;
        require(isVoted == false, "user already voted");
        idToCandidates[_candidatesNo].voteCount += 1;
        addressToVoters[msg.sender].voted = true;
        return isVoted;
    }

    function checkVote(uint256 voterID) public view {
        //uint checkId = addressToVoters[msg.sender].voterId;
        //bool voteDise=addressToVoters[msg.sender].voted;
        //console.log(checkId);
    }

    function createVoter(string memory _name) public returns (uint256) {
        uint256 checkId = addressToVoters[msg.sender].voterId;
        require(checkId == 0, "user Already created an account");
        vId++;
        addressToVoters[msg.sender] = Voter(vId, _name, msg.sender, false);
        return vId;
    }

    function totalVoters() public view returns (uint256) {
        return vId;
    }

    function winner() public view returns (string memory) {
        uint256[] memory newArray;
        for (uint256 i = 1; i <= cId; i++) {
            uint256 data = idToCandidates[i].voteCount;
            //newArray.push(data);
        }
    }
}

// function getPickWinner() public {

//     var test = numbers;
//     var largest = 0;
//     var i;

//     for (i = 0; i < test.length; i++) {
//         if (test[i] > largest) {
//             largest = test[i];
//     }
// }
