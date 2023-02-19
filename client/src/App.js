import "./App.css";
import metamask from "./images/metamask.png";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Functionality from "./components/Functionality";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Metamask Not Found ! Get MetaMask and Try Again.");
        return;
      }

      let chainId = await ethereum.request({ method: "eth_chainId" });

      const polygonmumbaiChainId = "0x13881";
      console.log(chainId);
      if (chainId !== polygonmumbaiChainId) {
        alert("Please Connect to Polygon Mumbai");
        return;
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log("Connected", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      {currentAccount === "" ? (
        <div
          className="loading"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="Metabit">Metabit</div>
            <div className="SubMetabit">Empowering IoT With Blockchain</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div className="connectWalletButton" onClick={connectWallet}>
              Login With <img src={metamask} alt="metamask" /> MetaMask
            </div>
            <div className="SubConnectWallet">Register</div>
          </div>
        </div>
      ) : correctNetwork ? (
        <div className="App">Add Next Page Here</div>
      ) : (
        <div className="flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3">
          <div>-----------------------------------------</div>
          <div>Please connect to the Polygon Mumbai Testnet</div>
          <div>and reload the page</div>
          <div>-----------------------------------------</div>
        </div>
      )}

      <Functionality />
    </div>
  );
}

export default App;
