import React, { useState, useEffect } from "react";
import "./Functionality.css";
import Navbar from "./Navbar";
import InfoBar from "./InfoBar";
import ControlPanel from "./ControlPanel";
import TopBar from "./TopBar";
import Devices from "./Devices";
import Streams from "./Streams";
import {
  LogContract,
  updateDeviceState,
  getCurrentWalletConnected,
  getLogData,
} from "../utils/interact";

function Functionality(props) {
  const [walletAddress, setWallet] = useState({});
  const [currentPage, setPage] = useState(1);
  const [logData, setLogData] = useState();

  useEffect(() => {
    const loadWallet = async () => {
      const { address } = await getCurrentWalletConnected();
      setWallet({ address });
      const loadLogData = await getLogData();

      setLogData(loadLogData);
      faceLogContractListener();
    };
    loadWallet();
  }, []);
  console.log(walletAddress);
  console.log(logData);

  function faceLogContractListener() {
    LogContract.events.NewRecordAdded({}, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        setLogData(data);
        console.log(data);
      }
    });
  }

  const onPageChange = (page) => {
    setPage(page);
    console.log(currentPage);
  };

  const handleStateChange = async (deviceName, state) => {
    console.log(deviceName, state);
    updateDeviceState(
      "0xd0b98db9aa9de860287d9898b81671c136330645", //Change to get walletAddress
      deviceName,
      state
    );
  };

  return (
    <React.Fragment>
      <Navbar handlePageChange={onPageChange} />
      <div className="ml-28">
        <TopBar walletAddress={walletAddress} />
        <div className={`${currentPage !== 1 ? "hidden" : "fade-in"}`}>
          <InfoBar />
          <ControlPanel handleStateChange={handleStateChange} />
        </div>
        <div className={`${currentPage !== 2 ? "hidden" : "fade-in"}`}>
          <Streams />
        </div>
        <div className={`${currentPage !== 3 ? "hidden" : "fade-in"}`}>
          <Devices />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Functionality;
