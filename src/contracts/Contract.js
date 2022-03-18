import { ethers } from "ethers";
import getProvider from "../ethers/ethers"

/**
 * Base contract class with ethers
 */
function Contract (address, abi) {
    this.address = address;
    this.abi = abi;
    this.contract = null;

    this.getContract = async () => {
        const [, signer] = await getProvider();
        if(!this.contract)
            this.contract = new ethers.Contract(this.address, this.abi, signer);
        return this.contract;
    }
};

export default Contract;