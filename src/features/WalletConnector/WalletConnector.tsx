import { ethers } from "ethers";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { IWalletConnector } from "@shared/types/WalletConnector.types";
import { ToastManager } from "@shared/ui/ToastContainer/ToastManager";
import { wait } from "@web3r/flowerkit/fn";
import i18next from "i18next";

export class WalletConnector implements IWalletConnector {
  private ethereumProvider: ethers.BrowserProvider | null = null;
  private ethereumSigner: ethers.JsonRpcSigner | null = null;
  private ethereumAccount: string | null = null;
  private solanaConnection: Connection | null = null;
  private solanaAccount: string | null = null;

  private static instance: WalletConnector | null = null;

  public static getInstance(): WalletConnector {
    if (!WalletConnector.instance) {
      WalletConnector.instance = new WalletConnector();
    }
    return WalletConnector.instance;
  }

  async connectEthereum(): Promise<string | null> {
    if (typeof window.ethereum !== "undefined") {
      try {
        this.ethereumProvider = new ethers.BrowserProvider(window.ethereum);
        await this.ethereumProvider.send("eth_requestAccounts", []);
        if (this.ethereumProvider) {
          this.ethereumSigner = await this.ethereumProvider.getSigner();
          this.ethereumAccount = await this.ethereumSigner.getAddress();
          this.saveToLocalStorage(this.ethereumAccount, "ethereum");
          return this.ethereumAccount;
        } else {
          throw new Error("Provider not initialized");
        }
      } catch (error) {
        ToastManager.getInstance().error(
          i18next.t("wallet.connectMetaMaskError")
        );
        return null;
      }
    } else {
      ToastManager.getInstance().error(
        i18next.t("wallet.metaMaskNotInstalled")
      );
      wait(3000).then(() => {
        ToastManager.getInstance().info(
          <div>
            <div>{i18next.t("wallet.needInstallMetamaskForWork")}</div>
            <a
              style={{ color: "var(--colorEarthYellow)" }}
              href="https://metamask.io.in/en/install/"
              target="_blank"
              rel="noopener noreferrer">
              {i18next.t("wallet.learnHowToInstallMetaMask")}
            </a>
          </div>,
          {
            autoClose: 8000,
            hideProgressBar: true,
            closeOnClick: true,
          }
        );
      });
      return null;
    }
  }

  async connectPhantom(): Promise<string | null> {
    if (window.solana && window.solana.isPhantom) {
      try {
        await window.solana.connect();
        this.solanaAccount = window.solana.publicKey.toString();
        this.solanaConnection = new Connection(
          clusterApiUrl("mainnet-beta"),
          "confirmed"
        );
        this.saveToLocalStorage(this.solanaAccount, "phantom");
        return this.solanaAccount;
      } catch (error) {
        console.error("Ошибка при подключении Phantom:", error);
        ToastManager.getInstance().error(
          i18next.t("wallet.connectPhantomError")
        );
        return null;
      }
    } else {
      console.error("Phantom не установлен!");
      ToastManager.getInstance().error(i18next.t("wallet.phantomNotInstalled"));
      wait(3000).then(() => {
        ToastManager.getInstance().info(
          <div>
            <div>{i18next.t("wallet.needInstallPhantomForWork")}</div>
            <a
              style={{ color: "var(--colorEarthYellow)" }}
              href="https://phantom.app/download/"
              target="_blank"
              rel="noopener noreferrer">
              {i18next.t("wallet.learnHowToInstallPhantom")}
            </a>
          </div>,
          {
            autoClose: 8000,
            hideProgressBar: true,
            closeOnClick: true,
          }
        );
      });
      return null;
    }
  }

  logout(): void {
    // Очистка данных Ethereum
    this.ethereumProvider = null;
    this.ethereumSigner = null;
    this.ethereumAccount = null;

    // Очистка данных Solana
    this.solanaConnection = null;
    this.solanaAccount = null;

    // Очистка localStorage
    this.clearLocalStorage();
  }

  private saveToLocalStorage(
    account: string | null,
    type: "ethereum" | "phantom"
  ): void {
    if (account) {
      localStorage.setItem("account", account);
      localStorage.setItem("walletType", type);
    }
  }

  private clearLocalStorage(): void {
    localStorage.removeItem("account");
    localStorage.removeItem("walletType");
  }

  getEthereumProvider(): ethers.BrowserProvider | null {
    return this.ethereumProvider;
  }

  getEthereumSigner(): ethers.JsonRpcSigner | null {
    return this.ethereumSigner;
  }

  getEthereumAccount(): string | null {
    return this.ethereumAccount;
  }

  getSolanaConnection(): Connection | null {
    return this.solanaConnection;
  }

  getSolanaAccount(): string | null {
    return this.solanaAccount;
  }
}
