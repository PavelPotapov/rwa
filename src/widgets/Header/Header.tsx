import { useStateContext } from "@shared/store/store";
import { CustomSelect } from "@shared/ui/CustomSelect";
import { Container } from "@shared/ui/Container";
import * as styles from "./Header.module.pcss";
import logo from "@assets/images/logoClassicCar.png";
import { WalletConnector } from "@features/WalletConnector/WalletConnector";
import { ConnectWalletButton } from "@features/ConntectWalletButton/ConntectWalletButton";
import { ToastManager } from "@shared/ui/ToastContainer/ToastManager";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

// Определяем типы состояния аккаунта
interface AccountInfoProps {
  address?: string;
  chainId?: number;
  isConnected: boolean;
  isConnecting: boolean;
  isReconnecting: boolean;
  isDisconnected: boolean;
}

function useAccountInfo(): AccountInfoProps {
  // Используем хук useAccount для получения информации о подключенном аккаунте
  const {
    address,
    chain,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
  } = useAccount();

  return {
    address,
    chainId: chain?.id,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
  };
}

const AccountInfo: React.FC = () => {
  // Получаем информацию о аккаунте через хук useAccountInfo
  const accountInfo = useAccountInfo();
  console.debug(accountInfo, "!!!!!!");

  if (accountInfo.isDisconnected) {
    return <div>No account connected</div>;
  }

  if (accountInfo.isConnecting) {
    return <div>Connecting...</div>;
  }

  if (accountInfo.isReconnecting) {
    return <div>Reconnecting...</div>;
  }

  if (accountInfo.isConnected) {
    return (
      <div>
        <div>Connected account: {accountInfo.address}</div>
        <div>Chain ID: {accountInfo.chainId}</div>
      </div>
    );
  }

  return null;
};

export const Header = () => {
  const { state, changeLanguageHandler } = useStateContext();
  const { open } = useWeb3Modal(); //этот метод можно вызывать

  const languageMap: { [key: string]: string } = {
    en: "Eng",
    ru: "Rus",
    ar: "Arabic",
    hi: "Hindi",
  };

  const options = Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const getSelectedLanguage = (code: string) => languageMap[code] || "";

  const walletConnector = WalletConnector.getInstance();
  const toastManager = ToastManager.getInstance();

  return (
    <div className="isNoRtl">
      <div className={styles.header}>
        <Container>
          <div className={styles.container}>
            <a href="/">
              <img src={logo} alt="cars" />
            </a>
            <div className={styles.rightPart}>
              <CustomSelect
                options={options}
                onSelect={(selected) => {
                  changeLanguageHandler(selected);
                }}
                selected={getSelectedLanguage(state.language)}
              />
              <ConnectWalletButton
                connector={walletConnector}
                toastManager={toastManager}
              />
              <w3m-button />
            </div>
          </div>
          <AccountInfo />
        </Container>
      </div>
    </div>
  );
};
