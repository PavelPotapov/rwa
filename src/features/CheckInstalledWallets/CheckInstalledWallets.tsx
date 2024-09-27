import { useEffect } from "react";
import { isMetaMaskInstalled, isPhantomInstalled } from "@shared/lib";
import { ToastManager } from "@shared/ui/ToastContainer/ToastManager";
import { wait } from "@web3r/flowerkit/fn";
import i18next from "i18next";

export const CheckInstalledWallets = () => {
  useEffect(() => {
    if (!isMetaMaskInstalled() && !isPhantomInstalled()) {
      wait(3000)
        .then(() => {
          ToastManager.getInstance().info(
            i18next.t("wallet.notInstalledWallets")
          );
        })
        .then(() => {
          wait(2000).then(() => {
            ToastManager.getInstance().info(
              <div>
                <div>
                  <div>MetaMask 👇</div>
                  <a
                    style={{ color: "var(--colorEarthYellow)" }}
                    href="https://metamask.io.in/en/install/"
                    target="_blank"
                    rel="noopener noreferrer">
                    {i18next.t("wallet.learnHowToInstallMetaMask")}
                  </a>
                </div>
                <div>
                  <div>Phantom 👇</div>
                  <a
                    style={{ color: "var(--colorEarthYellow)" }}
                    href="https://phantom.app/download"
                    target="_blank"
                    rel="noopener noreferrer">
                    {i18next.t("wallet.learnHowToInstallPhantom")}
                  </a>
                </div>
              </div>,
              {
                autoClose: 8000,
                hideProgressBar: true,
                closeOnClick: true,
              }
            );
          });
        });
    }
  }, []);

  return null;
};
