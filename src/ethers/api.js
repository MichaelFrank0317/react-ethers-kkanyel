import getProvider from './ethers';

export const getWalletAddress = async () => {
    const [, signer] = await getProvider();
    const addsress = await signer.getAddress();
    return address;
}