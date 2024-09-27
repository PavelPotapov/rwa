import { ethers } from "ethers";

export interface IWalletConnector {
  connectEthereum(): Promise<string | null>;
  connectPhantom(): Promise<string | null>;
  getEthereumAccount(): string | null;
  getSolanaAccount(): string | null;
  logout(): void;
  getEthereumSigner(): ethers.JsonRpcSigner | null;
}
