// SPDX-License-Identifier: MIT

pragma solidity ^0.8;

import "../@openzeppelin/token/ERC20/ERC20.sol";

contract RewardsToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Rewards Token", "RT") {
        _mint(msg.sender, initialSupply);
    }

}