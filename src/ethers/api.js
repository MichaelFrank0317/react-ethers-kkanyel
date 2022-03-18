import getProvider from './ethers';

export const getWalletAddress = async () => {
    const [provider, signer] = await getProvider();
    const address = await signer.getAddress();
    return address;
}