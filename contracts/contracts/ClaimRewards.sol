// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "../@openzeppelin/token/ERC20/utils/SafeERC20.sol";
import "../@openzeppelin/security/ReentrancyGuard.sol";
import "../@openzeppelin/utils/math/SafeMath.sol";
import "../@openzeppelin/access/Ownable.sol";

contract ClaimRewards is ReentrancyGuard, Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */
    IERC20 public immutable rewardsToken;

    mapping(address => uint256) public pendingRewards;

    /* ========== CONSTRUCTOR ========== */

    constructor(address _rewardsToken)Ownable() {
        require( _rewardsToken != address(0), "only non-zero addresses");
        rewardsToken = IERC20(_rewardsToken);
    } 

    /* ========== VIEWS ========== */

    function getRewardTokenAddress() external view returns (address) {
        return address(rewardsToken);
    }

    /* ========== MUTATIVE FUNCTIONS ========== */

    function depositRewardTokens(address _rewardsToken, uint256 _amount) external nonReentrant() onlyOwner() {
        require(_rewardsToken == address(rewardsToken), "incorrect deposit token");

        if(rewardsToken.allowance(msg.sender, address(this)) < _amount) {
            rewardsToken.safeApprove(address(this), type(uint256).max);
        }

        rewardsToken.safeTransferFrom(msg.sender, address(this), _amount);
        emit rewardsDeposited(block.timestamp, _amount);
    }
    
    function uploadRewards(address[] calldata _holders, uint256[] calldata  _rewardAmounts, uint256 _totalRewards) external nonReentrant() onlyOwner() {
        require(_holders.length == _rewardAmounts.length, "payloads must be same length");
        require(_totalRewards <= rewardsToken.balanceOf(address(this)), "contract does not hold enough funds to support rewards");
        
        for (uint256 i; i < _holders.length; i++) {
            pendingRewards[_holders[i]] = _rewardAmounts[i];
        } 

        emit rewardsUploaded(_totalRewards);
    }

    function claimRewards(uint256 _amount) external {
        require(pendingRewards[msg.sender] > 0, "no pending rewards");
        require(pendingRewards[msg.sender] >= _amount, "insufficient pending rewards");

        pendingRewards[msg.sender] = pendingRewards[msg.sender].sub(_amount);
        rewardsToken.safeTransfer(msg.sender, _amount);

        emit claimRedward(msg.sender, _amount); 
    }
     
    /* ========== EVENTS ========== */

    event rewardsDeposited(uint256 time, uint256 amount);
    event claimRedward(address indexed user, uint256 amount);
    event rewardsUploaded(uint256 totalRewards);
}