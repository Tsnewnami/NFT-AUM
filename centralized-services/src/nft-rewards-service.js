const axios = require("axios");
const ethers = require("ethers");
require("dotenv").config();
const contractAddressNFT = "0xb8D081EEf9cE45d176a46BAc2aBA33E4131c547E";
const contractAddressClaim = require("../../front-end/src/contracts-ClaimRewards/contract-address.json");
const contractClaim = require("../../front-end/src/contracts-ClaimRewards/contract-abi.json");
const chain = "rinkeby";

const defaultProver = new ethers.getDefaultProvider(chain, {
  alchemy: "x6pxCSFlvfeyGkPZZVojQ5O_mzaMpgMz",
});

const signer = new ethers.Wallet(process.env.WALLET_KEY, defaultProver);

const claimContract = new ethers.Contract(
  contractAddressClaim.address,
  contractClaim.abi,
  signer
);

const isInteger = (num) => /^-?[0-9]+$/.test(num + "");

/**
 * This method queries the Moralis API for all NFT holders of a given walletAddress
 * @returns  JSON K,V mapping of walletAddress => [tokens] (each token is the tokenId and ticketCount)
 */
const getNftHolders = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `https://deep-index.moralis.io/api/v2/nft/${contractAddressNFT}/owners?chain=${chain}&format=decimal`,
      headers: {
        "X-API-Key": process.env.API_KEY_NFT,
        "Content-Type": "application/json",
      },
    });

    var owners = [];
    res.data.result.forEach((item) => {
      if (owners.indexOf(item.owner_of) < 0) {
        owners.push(item.owner_of);
      }
    });

    const ownersLength = owners.length;
    let ownerTicketValues = new Array(ownersLength);
    for (let i = 0; i < ownersLength; ++i) ownerTicketValues[i] = 0;

    res.data.result.map((result, index) => {
      const addressIndex = owners.findIndex(
        (ownerEntry) => ownerEntry === result.owner_of
      );

      const ticketIndex = result.metadata.indexOf("Lottery Value");
      for (let i = ticketIndex + 23; i <= result.metadata.length; i++) {
        if (!isInteger(result.metadata[i])) {
          ownerTicketValues[addressIndex] += Number(
            result.metadata.substring(ticketIndex + 23, i)
          );
          break;
        }
      }
    });

    var retObj = {};

    for (var i = 0; i < owners.length; i++) {
      retObj[owners[i].toLowerCase()] = ownerTicketValues[i];
    }

    return retObj;
  } catch (e) {
    console.error(e);
  }
};

async function waitForTransaction(provider, tx) {
  let finished = false;
  const result = await Promise.race([
    tx.wait(),
    (async () => {
      while (!finished) {
        new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        const mempoolTx = await provider.getTransaction(tx.hash);
        if (!mempoolTx) {
          return null;
        }
      }
    })(),
  ]);
  finished = true;
  if (!result) {
    console.log("Transaction failed.");
    throw `Transaction ${tx.hash} failed`;
  }

  console.log("Transaction successful.");
}

const uploadHolderReward = async (data) => {
  // const holders = Object.keys(data);
  // const rewards = Object.values(data);

  const holders = Array(500).fill("0x0C0A4Fd4313471EB0f8Ca786c33C2D7146Ce3bB5");
  const rewards = Array(1000).fill(Math.ceil(Math.random() * 100));
  const totalRewards = rewards.length;

  // console.log("Uploading payload");
  // const tx = await claimContract.uploadRewards(holders, rewards, totalRewards);
  // await waitForTransaction(defaultProver, tx);

  console.log("Uploading payload");
  const tx = await claimContract.setNftRewardValues(rewards, totalRewards);
  await waitForTransaction(defaultProver, tx);
};

const main = async () => {
  // const holders = await getNftHolders();
  uploadHolderReward(1);
};

main();
