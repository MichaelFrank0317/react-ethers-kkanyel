import Contract from '../Contract';

import address from '../config/address';
import SwapContractAbi from './SwapContractAbi.json';

/**
 * Swap contract class with ethers
 */
class SwapContract extends Contract {
    // instance for SwapContract
    static instance = null;

    /**
     * get the single instance of swap contract
     * 
     * @returns the singletone instance of swap contract
     */
    static getInstance () {
        if(this.instance !== null)
            return this.instance;
        
        this.instance = new SwapContract(address.swap, SwapContractAbi);
        return this.instance;
    }
}

export default SwapContract;