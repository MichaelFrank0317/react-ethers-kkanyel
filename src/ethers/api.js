import getProvider from './ethers';

export const getWalletAddress = async () => {
    const [, signer] = await getProvider();
    const address = await signer.getAddress();
    return address;
}