const alchemyKey =
  "wss://polygon-mumbai.g.alchemy.com/v2/ySqff11qp0JsorbeVz4Veeezn8YVy7q_";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("./contract-abi.json");
const contractAddress = "0x57B085719659a4718A8bfA14706F83c4928024b1";

export const endNodeContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

const LogContractABI = require("./log-contract-abi.json");
const LogContractAddress = "0x6393F0d56d86a2c3177e1466f848312be026801f";

export const LogContract = new web3.eth.Contract(
  LogContractABI,
  LogContractAddress
);

export const getLogData = async () => {
  const message = LogContract.methods.getRecords().call();
  return message;
};

export const updateDeviceState = async (address, deviceName, state) => {
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: endNodeContract.methods.changeState(deviceName, state).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    console.log(txHash);
    return {
      status: "Success",
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  }
};
