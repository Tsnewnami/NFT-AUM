const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("claim Contract", function () {
  let Claim;
  let claim;
  let RewardsToken;
  let rewardsToken;
  let totalSupply = (10 ** 9).toString();
  let owner;
  let claimer1;
  let claimer2;
  let claimer3;
  let claimer4;

  const claimAmounts = [25, 25, 25, 25];
  const totalClaim = 100;
  const nftIds = [1, 2, 3];
  const nftRewardValues = [10, 20, 30];
  const upperBound = nftIds.length;
  beforeEach(async function () {
    [owner, claimer1, claimer2, claimer3, claimer4] = await ethers.getSigners();

    Claim = await ethers.getContractFactory("ClaimRewards", owner.address);
    RewardsToken = await ethers.getContractFactory(
      "RewardsToken",
      owner.address
    );

    rewardsToken = await RewardsToken.deploy(
      ethers.utils.parseEther(totalSupply)
    );

    await rewardsToken.deployed();

    claim = await Claim.deploy(rewardsToken.address);

    await rewardsToken.approve(claim.address, ethers.constants.MaxUint256);

    await claim.setNftRewardValues(nftRewardValues, upperBound);
  });

  describe("Deployment", function () {
    it("Should assign msg.sender as owner", async function () {
      expect(await claim.owner()).to.equal(owner.address);
    });

    it("Should assign the correct ", async function () {
      expect(await claim.getRewardTokenAddress()).to.equal(
        rewardsToken.address
      );
    });
  });

  describe("Depositing tokens", function () {
    it("Should allow a the owner to deposit reward tokens and emit an event", async function () {
      await expect(
        claim.depositRewardTokens(rewardsToken.address, 100)
      ).to.emit(claim, "rewardsDeposited");

      expect(await rewardsToken.balanceOf(claim.address)).to.equal(100);
    });
  });

  describe("NFT reward values", function () {
    it("Should upload individual NFT reward values", async function () {
      expect(await claim.nftRewardValue(3)).to.equal(30);
      expect(await claim.nftRewardValue(2)).to.equal(20);
      expect(await claim.nftRewardValue(1)).to.equal(10);
    });
  });

  // describe("Claiming rewards", function () {
  //   it("Should allow the owner to upload the payload", async function () {
  //     await claim.depositRewardTokens(rewardsToken.address, 100);

  //     await expect(
  //       claim.uploadRewards(
  //         [
  //           claimer1.address,
  //           claimer2.address,
  //           claimer3.address,
  //           claimer4.address,
  //         ],
  //         claimAmounts,
  //         totalClaim
  //       )
  //     ).to.emit(claim, "rewardsUploaded");

  //     expect(await claim.pendingRewards(claimer1.address)).to.equal(25);
  //     expect(await claim.pendingRewards(claimer2.address)).to.equal(25);
  //     expect(await claim.pendingRewards(claimer3.address)).to.equal(25);
  //     expect(await claim.pendingRewards(claimer4.address)).to.equal(25);
  //   });

  //   it("Should upload the payload and allow users to claim", async function () {
  //     await claim.depositRewardTokens(rewardsToken.address, 100);

  //     await claim.uploadRewards(
  //       [
  //         claimer1.address,
  //         claimer2.address,
  //         claimer3.address,
  //         claimer4.address,
  //       ],
  //       claimAmounts,
  //       totalClaim
  //     );

  //     await claim.connect(claimer1).claimRewards(claimAmounts[0]);
  //     await claim.connect(claimer2).claimRewards(claimAmounts[0]);
  //     await claim.connect(claimer3).claimRewards(claimAmounts[0]);
  //     await claim.connect(claimer4).claimRewards(claimAmounts[0]);

  //     expect(await claim.pendingRewards(claimer1.address)).to.equal(0);
  //     expect(await claim.pendingRewards(claimer2.address)).to.equal(0);
  //     expect(await claim.pendingRewards(claimer3.address)).to.equal(0);
  //     expect(await claim.pendingRewards(claimer4.address)).to.equal(0);
  //   });

  //   it("Should upload the payload and allow users to claim, emitting an event", async function () {
  //     await claim.depositRewardTokens(rewardsToken.address, 100);

  //     await claim.uploadRewards(
  //       [
  //         claimer1.address,
  //         claimer2.address,
  //         claimer3.address,
  //         claimer4.address,
  //       ],
  //       claimAmounts,
  //       totalClaim
  //     );

  //     await expect(
  //       claim.connect(claimer1).claimRewards(claimAmounts[0])
  //     ).to.emit(claim, "claimReward");
  //   });
  // });
});
