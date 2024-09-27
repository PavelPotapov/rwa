import React, { useState, useEffect } from "react";
import { IWalletConnector } from "@shared/types/WalletConnector.types";
import { IToastManager } from "@shared/types/ToastManager.types";
import i18next from "i18next";

interface ConnectWalletButtonProps<T extends IWalletConnector> {
  connector: T;
  toastManager?: IToastManager;
}

export const ConnectWalletButton = <T extends IWalletConnector>({
  connector,
  toastManager,
}: ConnectWalletButtonProps<T>) => {
  const [account, setAccount] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<"ethereum" | "phantom" | null>(
    null
  );

  useEffect(() => {
    const loadStoredData = () => {
      const storedAccount = localStorage.getItem("account");
      const storedWalletType = localStorage.getItem("walletType");

      if (storedAccount && storedWalletType) {
        const walletType = storedWalletType as "ethereum" | "phantom" | null;
        setAccount(storedAccount);
        setWalletType(walletType);
      } else {
        checkConnection();
      }
    };

    const checkConnection = async () => {
      const ethereumAccount = connector.getEthereumAccount();
      if (ethereumAccount) {
        setAccount(ethereumAccount);
        setWalletType("ethereum");
      } else {
        const solanaAccount = connector.getSolanaAccount();
        if (solanaAccount) {
          setAccount(solanaAccount);
          setWalletType("phantom");
        }
      }
    };

    loadStoredData();
  }, [connector]);

  const handleConnect = async (type: "ethereum" | "phantom") => {
    let connectedAccount: string | null = null;

    try {
      if (type === "ethereum") {
        connectedAccount = await connector.connectEthereum();
      } else if (type === "phantom") {
        connectedAccount = await connector.connectPhantom();
      }

      if (connectedAccount) {
        setAccount(connectedAccount);
        setWalletType(type);
        toastManager?.success(
          i18next.t("wallet.successConnected") + `${connectedAccount}`
        );
      } else {
        toastManager?.error(i18next.t("wallet.errorConnectedWallet"));
      }
    } catch (error) {
      toastManager?.error(i18next.t("wallet.errorConnect"));
    }
  };

  const handleLogout = () => {
    connector.logout();
    setAccount(null);
    setWalletType(null);
    toastManager?.info(i18next.t("wallet.logout"));
  };

  return (
    <div>
      {account ? (
        <>
          <p>
            Подключенный аккаунт ({walletType}): {account}
          </p>
          <button onClick={handleLogout}>Выйти</button>
        </>
      ) : (
        <>
          <button onClick={() => handleConnect("ethereum")}>
            Подключить MetaMask
          </button>
          <button onClick={() => handleConnect("phantom")}>
            Подключить Phantom
          </button>
        </>
      )}
    </div>
  );
};
