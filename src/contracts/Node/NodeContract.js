import Contract from '../Contract';

import * as Api from '../../ethers/api';
import Address from '../config/address';
import NodeContractAbi from './NodeContractAbi.json';
import { ethers } from 'ethers';

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
         * get fee amount to claim rewards
         * 
         * @param {number} nodeId 
         * @returns claim fee
         */
        this.getClaimFeeById = async (nodeId) => {
            let result = null;
            const contract = await this.contract.getContract();
            result = await contract.getClaimFeeById(nodeId);
            return result;
        }

        /**
         * get all claim fee from the node
         * 
         * @returns claim fee
         */
        this.getClaimFee = async() => {
            let result = null;
            const address = await Api.getWalletAddress();
            const contract = await this.contract.getContract();
            result = await contract.getClaimFee(address);
            return result;
        }


        /**
         * bail out mint with it's reward
         * 
         * @param {number} nodeType     // node type for mint
         * @param {number[]} nodeIds    // node ids to reduce rewards
         * @returns returns node type
         */
        this.bailOutMint = async(nodeType, nodeIds) => {
            let result = null;
            const url = "https://corckscrew";
            const contract = await this.contract.getContract();
            result = await contract.bailOutMint(nodeType, nodeIds, url);
            return result;
        }

        /**
         * claim by node id
         * 
         * @param {wei} payableAmount       payable feee
         * @param {number} nodeId           node id
         * @returns result of the claim
         */
        this.claimById = async (payableAmount, nodeId) => {
            let result = null;
            const contract = await this.contract.getContract();
            result = await contract.claimById(nodeId, {
                value: payableAmount
            });
            return result;
        }

        /**
         * claim all
         * 
         * @param {wei} payableAmount        payable fee
         * @returns result of the claim
         */
        this.claim = async (payableAmount) => {
            let result = null;
            const contract = await this.contract.getContract();
            console.log(payableAmount);
            result = await contract.claim({
                value: payableAmount
            });
            return result;
        }

        /**
         * get rewards from the node id
         * 
         * @param {number} nodeId 
         * @returns rewards amount
         */
        this.getClaimableCorkById = async (nodeId) => {
            let result = null;
            const contract = await this.contract.getContract();
            result = await contract.getClaimableCorkById(nodeId);
            return result;
        }

        /**
         * get owned node id from index
         * 
         * @param {number} nodeIndex 
         */
        this.ownedNodes = async (nodeIndex) => {
            let result = null;
            const address = await Api.getWalletAddress();
            const contract = await this.contract.getContract();
            result = await contract.ownedNodes(address, nodeIndex);
            return result;
        }

        /**
         * get balanceOfBatch nodes
         * 
         * @returns balance array
         */
        this.balanceOfBatch = async () => {
            let result = null;
            const address = await Api.getWalletAddress();
            const contract = await this.contract.getContract();
            let addreses = [], nodeTypes = [];
            for(let nodeType = 0; nodeType < 4; nodeType++) {
                addreses = [...addreses, address];
                nodeTypes = [...nodeTypes, nodeType];
            }
            result = await contract.balanceOfBatch(addreses, nodeTypes);
            return result;
        }

        /**
         * mint slope
         * 
         * @param {uint256} nodeType  0(Blue) | 1(Red) | 2(Black) | 3(Double Black Diamond)
         * @param {string} uri temporary uri
         * @returns 
         */
        this.mint = async (nodeType, uri) => {
            let result = null;
            const contract = await this.contract.getContract();
            result = await contract.mint(nodeType, uri);
            return result;
        }

        /**
         * get cork price
         * 
         * @returns 
         */
        this.getCorkPrice = async () => {
            let result = null;
            const contract = await this.contract.getContract();
            result = await contract.getCorkPrice();
            return result;
        }

        /**
         * get all slope data
         * 
         * @returns slope data from contract
         */
        this.getSlopes = async () => {
            let slopes = [];

            let nodeIndex = 0;
            const nodeCounts = await this.balanceOfBatch();
            for(let nodeType = 0; nodeType < nodeCounts.length; nodeType++) {
                const nodeCount = nodeCounts[nodeType].toNumber();
                for(let index = 0; index < nodeCount; index++) {
                    const id = await this.ownedNodes(nodeIndex++);
                    const rewards = await this.getClaimableCorkById(id.toNumber());
                    slopes.push({ nodeType: nodeType, id: id.toNumber(), rewards: ethers.utils.formatEther(rewards) });
                }
            }
            return slopes;
        }

        /**
         * claim rewards from node
         * 
         * @param {number} nodeId  id of the node
         * @returns rewards result
         */
        this.claimRewardsById = async (nodeId) => {
            let result = null;
            const payableAmount = await this.getClaimFeeById(nodeId);
            result = await this.claimById(payableAmount, nodeId);
            return result;
        }

        /**
         * claim all function
         */
        this.claimAll = async () => {
            let result = null;
            const payableAmount = await this.getClaimFee();
            console.log(payableAmount);
            result = await this.claim(payableAmount);
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