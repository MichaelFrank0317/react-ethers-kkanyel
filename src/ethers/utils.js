export const getReadableAddress = (address) => {
    const result = address.slice(0, 6) + "..." + address.slice(address.length - 4);
    return result;
}