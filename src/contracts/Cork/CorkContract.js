import { ethers } from 'ethers';
import Contract from '../Contract';

import Address from '../config/address';
import CorkContractAbi from './CorkContractAbi.json';

export const ApproveType = {
    Node: 0,
    Swap: 1
}

/**
 * Cork singleton object with ethers
 */
const CorkContract = (function () {
    let instance = null;

    // class CorkContract
    function CorkContract() {
        this.contract = new Contract(Address.cork, CorkContractAbi);

        /**
         * approve for node and swap
         * 
         * @param {ApproveType} approveType     ApproveType.Node | ApproveType.Swap
         * @param {uint256} amount               the amount to approve
         * @returns the result of the function
         */
        this.approve = async (approveType) => {
            let result = null;
            const contract = await this.contract.getContract();
            const amount = ethers.utils.parseEther("2000");
            console.log(amount);
            if(approveType === ApproveType.Node)
                result = await contract.approve(Address.node, amount);
            if(approveType === ApproveType.Swap)
                result = await contract.approve(Address.swap, amount);
            return result;
        }
    }
    

    return {
        getInstance : () => {
            if(instance !== null)
                return instance;
            instance = new CorkContract();
            instance.constructor = null;
            return instance;
        }
    }
})();

export default CorkContract;