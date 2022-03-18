import Contract from '../Contract';

import Address from '../config/address';
import NodeContractAbi from './NodeContractAbi.json';

export const ApproveType = {
    Node: 0,
    Swap: 1
}

/**
 * Node singleton object with ethers
 */
const NodeContract = (function () {
    let instance = null;

    // class NodeContract
    function NodeContract() {
        this.contract = new Contract(Address.node, NodeContractAbi);

        /**
         * 
         * @param {uint256} nodeType  0(Blue) | 1(Red) | 2(Black) | 3(Double Black Diamond)
         * @param {string} uri temporary uri
         * @returns 
         */
        this.mint = async (nodeType, uri) => {
            let result = null;
            const contract = await this.contract.getContract();
            console.log(contract);
            result = await contract.mint(nodeType, uri);
            return result;
        }
    }
    

    return {
        getInstance : () => {
            if(instance !== null)
                return instance;
            instance = new NodeContract();
            instance.constructor = null;
            return instance;
        }
    }
})();

export default NodeContract;