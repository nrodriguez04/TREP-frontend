import React, { useState } from 'react';
import { getProvider, getSigner } from '../utils/web3';

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      await provider.send('eth_requestAccounts', []);
      const signer = getSigner(provider);
      const address = await signer.getAddress();
      setWalletAddress(address);
    }
  };

  return (
    <div>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
