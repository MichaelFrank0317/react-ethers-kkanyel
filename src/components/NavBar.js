import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import GeneralButton from "./general/GeneralButton";
import { imageSrc } from "../config/images";
import { getWalletAddress } from "../ethers/api";

const NavBar = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  
  const [walletAddress, setWalletAddres] = useState(null);
  const [hamburgerStatus, setHamburgerShow] = useState(false);

  const toggleVisible = () => {
    setHamburgerShow(!hamburgerStatus);
    sidebarRef.current.style.transform = `scaleX(${hamburgerStatus ? 0 : 1}`;
  };

  const handleAddToken = () => {
    
  };

  const handleConnectWallet = async () => {
    const address = await getWalletAddress();
    
    setWalletAddres(address);
  };

  const handleBuyCork = () => {
    
  };

  return (
    <div className="navbar">
      <div className="navigation">
        <div className="logo">
          <img src={imageSrc.logo} alt="logo" />
          <div className={"nav-logo-text " + (location.pathname === "/" ? "" : "text-white")}>
            {"Corkscrew Financial"}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="social-icons">
            <a href="#"><img src={ location.pathname === "/" ? imageSrc.icons.discord : imageSrc.icons.discordLight} alt="discord"/></a>
            <a href="#"><img src={ location.pathname === "/" ? imageSrc.icons.twitter : imageSrc.icons.twitterLight } alt="twitter"/></a>
          </div>

          {location.pathname === "/" ? (
            <div className="buttons">
              <GeneralButton onClick={handleAddToken} rounded shadow>{"Add Token"}</GeneralButton>
              <GeneralButton onClick={handleConnectWallet} rounded dark>
                {walletAddress ? walletAddress : 'Connect Wallet'}
              </GeneralButton>
            </div>
          ) : (
            <div className="buttons">
              <GeneralButton onClick={handleBuyCork} dark shadow>{"Buy CORK"}</GeneralButton>
              <GeneralButton onClick={handleConnectWallet}>
                {walletAddress ? walletAddress : 'Connect Wallet'}
              </GeneralButton>
            </div>
          )}
        </div>
        <div onClick={toggleVisible} className={"hamburger " + (hamburgerStatus ? "active" : "")}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
      <div className="sidebar" ref={sidebarRef} onClick={() => toggleVisible()}>
        {location.pathname === "/" ? (
          <GeneralButton onClick={handleAddToken} rounded shadow>{"Add Token"}</GeneralButton>
        ) : (
          <GeneralButton onClick={handleBuyCork} dark shadow>{"Buy CORK"}</GeneralButton>
        )}

        <GeneralButton onClick={handleConnectWallet} rounded>
          {walletAddress ? walletAddress : 'Connect Wallet'}
        </GeneralButton>
      </div>
    </div>
  );
};

export default NavBar;
