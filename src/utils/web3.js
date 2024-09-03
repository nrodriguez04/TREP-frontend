import { ethers } from 'ethers';

const getProvider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    console.error('No Ethereum wallet found. Please install MetaMask.');
    return null;
  }
};

const getSigner = (provider) => {
  return provider.getSigner();
};

export { getProvider, getSigner };
