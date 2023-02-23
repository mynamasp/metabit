import React, { useState, useEffect } from "react";
import "./Functionality.css";
import Date_Time from "./Date_Time";
import Switches from "./Switches";
import Weather from "./Weather";
import Navbar from "./Navbar";
import InfoBar from "./InfoBar";
import ControlPanel from "./ControlPanel";
import TopBar from "./TopBar";

function Functionality(props) {
  const [walletAddress, setWallet] = useState("");

  useEffect(() => {
    const loadWallet = async () => {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
      console.log(walletAddress);
    };
    loadWallet();
  }, []);

  const getCurrentWalletConnected = async () => {
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

  return (
    <React.Fragment>
      <Navbar />
      <div className="ml-28">
        <TopBar walletAddress={"0xd0b98db9aa9de860287d9898b81671c136330645"} />
        <InfoBar />
        <ControlPanel />
      </div>
    </React.Fragment>
  );
}

export default Functionality;
