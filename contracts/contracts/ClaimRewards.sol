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

    struct Payout { 
        uint256 id;
        uint256 amount;
    }

    IERC20 public immutable rewardsToken;

    mapping(address => uint256) public pendingRewards;
    mapping(uint256 => uint256) public nftRewardValue;
    mapping(address => mapping(uint256 => bool)) public hasRewardCalculated;

    Payout[] public payouts;

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

    function calculateRewards(address _account, uint256[] calldata _nftIds, uint256 payoutAmount) internal {
        for(uint256 i; i < _nftIds.length; i++) {
            pendingRewards[_account] = pendingRewards[_account].add(payoutAmount.div(100).mul(nftRewardValue[_nftIds[i]]));
        }
    }

    function setNftRewardValues(uint256[] calldata _rewardValues, uint256 _upperBound) external onlyOwner() {
        for (uint256 i; i < _upperBound; i++) {
            nftRewardValue[i+1] = _rewardValues[i];
        }
    }

    function depositRewardTokens(address _rewardsToken, uint256 _amount) external nonReentrant() onlyOwner() {
        require(_rewardsToken == address(rewardsToken), "incorrect deposit token");

        payouts.push(Payout({
            id: payouts.length,
            amount: _amount
        }));

        rewardsToken.safeTransferFrom(msg.sender, address(this), _amount);
        
        emit rewardsDeposited(payouts.length, _amount);
    }
    
    function uploadRewards(address[] calldata _holders, uint256[] calldata  _rewardAmounts, uint256 _totalRewards) external nonReentrant() onlyOwner() {
        require(_holders.length == _rewardAmounts.length, "payloads must be same length");
        require(_totalRewards <= rewardsToken.balanceOf(address(this)), "contract does not hold enough funds to support rewards");
        
        for (uint256 i; i < _holders.length; i++) {
            pendingRewards[_holders[i]] = _rewardAmounts[i];
        } 

        emit rewardsUploaded(_totalRewards);
    }

    function claimRewards(uint256 _amount, uint256[] calldata _nftIds) external updateReward(msg.sender, _nftIds) {
        require(pendingRewards[msg.sender] > 0, "no pending rewards");
        require(pendingRewards[msg.sender] >= _amount, "insufficient pending rewards");
        require(_nftIds.length > 0, "must provide NFT ids");

        pendingRewards[msg.sender] = pendingRewards[msg.sender].sub(_amount);
        rewardsToken.safeTransfer(msg.sender, _amount);

        emit claimReward(msg.sender, _amount); 
    }

    /* ========== MODIFIERS ========== */

    modifier updateReward(address _account, uint256[] calldata _nftIds) {
        if (_account != address(0)) {
            for(uint256 i; i < payouts.length; i++) {
                if (!hasRewardCalculated[msg.sender][i]) {
                    calculateRewards(_account, _nftIds, payouts[i].amount);
                    hasRewardCalculated[msg.sender][i] = true;
                }
            }
        }
        _;
    }
     
    /* ========== EVENTS ========== */

    event rewardsDeposited(uint256 payoutId, uint256 amount);
    event claimReward(address indexed user, uint256 amount);
    event rewardsUploaded(uint256 totalRewards);
}