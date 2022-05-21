const { RestClient } = require("ftx-api");
const hmacSHA256 = require("crypto-js/hmac-sha256");
const sha256 = require("crypto-js/sha256");
const Hex = require("crypto-js/enc-hex");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
require("dotenv").config();

const serviceAccount = require("../nft-aum-firebase-adminsdk-6gz36-1e036731da.json");
initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

const client = new RestClient(process.env.API_KEY, process.env.API_SECRET);

const pushTradingStatsDb = async (data) => {
  const ref = db.collection("tradingStats").doc("current");

  const res = await ref.update({ capital: true });
};

client
  .getAccount()
  .then((result) => {
    console.log("getAccount result: ", result);
  })
  .catch((err) => {
    console.error("getMarkets error: ", err);
  });

// test code
// const market = 'BTC-0327'
// const now = new Date().getTime() / 1000;
// const price = 100;
// const size = 0.1;
// const side = 'buy';
// const orderType = 'limit'
// const type = 'stop'
//

// pushTradingStatsDb();
