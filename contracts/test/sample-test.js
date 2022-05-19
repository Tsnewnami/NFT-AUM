// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("claim Contract", function () {
//   let Claim;
//   let claim;
//   let RewardsToken;
//   let rewardsToken;
//   let totalSupply = (10 ** 9).toString();
//   let owner;
//   let claimer1;
//   let claimer2;
//   let claimer3;
//   let claimer4;

//   const nftIds = [1, 2, 3];
//   const nftRewardValues = [50, 150, 100];
//   const upperBound = nftIds.length;
//   const nftIdsC2 = [4, 5, 6];
//   const nftRewardValuesC2 = [100, 100, 100];
//   const upperBoundC2 = nftIdsC2.length;
//   const nftIdsC3 = [7, 8, 9];
//   const nftRewardValuesC3 = [100, 100, 190];
//   const upperBoundC3 = nftIdsC3.length;
//   const nftIdsC4 = [5];
//   const nftRewardValuesC4 = [5];
//   const upperBoundC4 = nftIdsC4.length;

//   beforeEach(async function () {
//     [owner, claimer1, claimer2, claimer3, claimer4] = await ethers.getSigners();

//     Claim = await ethers.getContractFactory("ClaimRewards", owner.address);
//     RewardsToken = await ethers.getContractFactory(
//       "RewardsToken",
//       owner.address
//     );

//     rewardsToken = await RewardsToken.deploy(
//       ethers.utils.parseEther(totalSupply)
//     );

//     await rewardsToken.deployed();

//     claim = await Claim.deploy(rewardsToken.address);

//     await rewardsToken.approve(claim.address, ethers.constants.MaxUint256);

//     await claim.setNftRewardValues(
//       nftRewardValues.concat(
//         // nftRewardValuesC2,
//         // nftRewardValuesC3,
//         nftRewardValuesC4
//       ),
//       upperBound + upperBoundC4
//     );

//     for (let i = 0; i < upperBound; i++) {
//       await claim.depositRewardTokens(rewardsToken.address, 100);
//     }
//   });

//   describe("Deployment", function () {
//     it("Should assign msg.sender as owner", async function () {
//       expect(await claim.owner()).to.equal(owner.address);
//     });

//     it("Should assign the correct ", async function () {
//       expect(await claim.getRewardTokenAddress()).to.equal(
//         rewardsToken.address
//       );
//     });
//   });

//   describe("Depositing tokens", function () {
//     it("Should allow a the owner to deposit reward tokens and emit an event", async function () {
//       await expect(
//         claim.depositRewardTokens(rewardsToken.address, 100)
//       ).to.emit(claim, "rewardsDeposited");

//       expect(await rewardsToken.balanceOf(claim.address)).to.equal(400); // Accounting for the 300 tokens deposited prior
//     });

//     it("Should support multiple payout objects", async function () {
//       expect(await claim.getPayoutCount()).to.equal(3); // Accounting for the 300 tokens deposited prior
//     });
//   });

//   describe("NFT reward values", function () {
//     it("Should upload individual NFT reward values", async function () {
//       expect(await claim.nftRewardValue(3)).to.equal(nftRewardValues[2]);
//       expect(await claim.nftRewardValue(2)).to.equal(nftRewardValues[1]);
//       expect(await claim.nftRewardValue(1)).to.equal(nftRewardValues[0]);
//     });

//     it("Should correctly calculate reward values", async function () {
//       await claim.testUpdateReward(claimer1.address, nftIds);
//       await claim.testUpdateReward(claimer2.address, nftIdsC2);
//       await claim.testUpdateReward(claimer3.address, nftIdsC3);
//       await claim.testUpdateReward(claimer4.address, nftIdsC4);

//       expect(await claim.pendingRewards(claimer1.address)).to.equal(90);
//       expect(await claim.pendingRewards(claimer2.address)).to.equal(90);
//       expect(await claim.pendingRewards(claimer3.address)).to.equal(117);
//       expect(await claim.pendingRewards(claimer4.address)).to.equal(117);
//     });

//     //   it("Should not update rewards more than once for a single payout", async function () {
//     //     await claim.testUpdateReward(claimer1.address, nftIds);
//     //     await claim.testUpdateReward(claimer1.address, nftIds);
//     //     expect(await claim.pendingRewards(claimer1.address)).to.equal(90);
//     //   });
//     // });

//     // describe("Users claiming rewards", function () {
//     //   it("Should correctly payout the users and update the pending rewards", async function () {
//     //     await claim.testUpdateReward(claimer1.address, nftIds);
//     //     await claim.connect(claimer1).claimRewards(90, nftIds);
//     //     await claim.testUpdateReward(claimer2.address, nftIdsC2);
//     //     await claim.connect(claimer2).claimRewards(90, nftIdsC2);
//     //     await claim.testUpdateReward(claimer3.address, nftIdsC3);
//     //     await claim.connect(claimer3).claimRewards(120, nftIdsC3);

//     //     expect(await rewardsToken.balanceOf(claimer1.address)).to.equal(90); // Accounting for the 300 tokens deposited prior
//     //     expect(await rewardsToken.balanceOf(claimer2.address)).to.equal(90); // Accounting for the 300 tokens deposited prior
//     //     expect(await rewardsToken.balanceOf(claimer3.address)).to.equal(120); // Accounting for the 300 tokens deposited prior
//     //     expect(await claim.pendingRewards(claimer1.address)).to.equal(0);
//     //     expect(await claim.pendingRewards(claimer2.address)).to.equal(0);
//     //     expect(await claim.pendingRewards(claimer3.address)).to.equal(0);
//     //   });
//   });
// });
