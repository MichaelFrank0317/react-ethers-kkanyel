import { ethers } from "ethers";

/**
 * @dev returns current provider and signer 
 * 
 * @returns [provider, signer] current provider and signer
 */
const getProvider = async () => {
    if(!window.ethereum) {
        console.error("Please install Metamask");
        return [null, null];
    }

    if(!window.provider || !window.signer) {
        window.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await window.provider.send("eth_requestAccounts", []);
        window.signer = window.provider.getSigner();
    }

    return [window.provider, window.signer];
}

export default getProvider;