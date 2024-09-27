import car1 from "@images/car1.png";
import car2 from "@images/car2.png";
import car3 from "@images/car3.png";

export const en = {
  translation: {
    spoilerGroup: [
      {
        title: "Do you sell real or virtual classic cars?",
        content: `<p>
            We sell NFTs tied to classic cars in the real world. The owner of the NFT becomes the owner of the real classic car and has the rights to profit from the sale and management of the asset.
          </p>`,
      },
      {
        title: "What protection and guarantees are there for investors?",
        content: `          <p>
            We'll give you the answer later, once our lawyers decide on the legal model!
          </p>`,
      },
      {
        title: "What is “Heritage Classic Car”?",
        content: `          <p>
            This is a platform for tokenization of classic cars, as well as a management company for the purchase of investment-attractive cars, their restoration and sale for profit. We have created this platform as a tool that was previously only available to a selected group of investors.
          </p>`,
      },
      {
        title: "Why classic cars?",
        content: `
            <ul>
              <li>
                The market price of good models is at least 150,000 US dollars.
              </li>
              <li>
                Investments in classic cars are annually included in the TOP 3 most profitable “luxury” assets.
              </li>
              <li>An investment that is always in a stable position!</li>
              <li>Growth over 10 years from 180% to 700%</li>
            </ul>

            <p>Purchasing a collectible car is no less reliable than investing in real estate, securities or other antiques. Prices for some models of vintage cars are growing at the rate of 10-30% per year</p>`,
      },
      {
        title: "What do I get from owning a Heritage Classic Car NFT?",
        content: `            <p>
              Our contract you the right to receive profits from the sale of the car after its acquisition, restoration and sale with a markup of 30%-100%. And also in some cases, it gives you an opportunity to receive passive income from liesing. You will also get a right to participate in international exhibitions, show-programs, etc.
            </p>
            <p>
              Owning an NFT also gives its holders certain privileges and provides access to a private club and various events (car rallies, shows, etc.)
            </p>
            <p>
              Access to the closed private sale of project tokens.
            </p>`,
      },
      {
        title: "What is RWA?",
        content: `          <p>
            Real World Assets (RWA) is a term that refers to a market for “real world” assets issued in the form of tokens on a blockchain. RWAs include real estate, ownership rights, art, jewelry and metals, and traditional financial instruments in the capital markets.
          </p>`,
      },
    ],
    table: {
      thead: ["Automobile", "Price per NFT", "Total NFTs", "Projected income"],
      tbody: [
        {
          name: "MERCEDES-BENZ 450 SL",
          price: "100$",
          allCount: "300",
          income: "40%",
        },
        {
          name: "Rolls-Royce Silver Cloud III",
          price: "150$",
          allCount: "300",
          income: "40%",
        },
        {
          name: "Aston Martin DB2/4",
          price: "300$",
          allCount: "300",
          income: "40%",
        },
        {
          name: "MERCEDES-BENZ 450 SL",
          price: "100$",
          allCount: "300",
          income: "40%",
        },
        {
          name: "Rolls-Royce Silver Cloud III",
          price: "150$",
          allCount: "300",
          income: "40%",
        },
        {
          name: "Aston Martin DB2/4",
          price: "300$",
          allCount: "300",
          income: "40%",
        },
      ],
    },
    nftCardsData: [
      {
        title: "MERCEDES-BENZ 450 SL",
        image: car1,
        year: "1978",
        yearTitle: "Year of manufacture",
        capacityTitle: "Engine capacity",
        capacity: "V8",
        nftTitle: "Total number of NFTs",
        countNft: 0,
        allNft: 300,
        priceTitle: "Price per NFT",
        price: "100$",
        btnText: "Buy NFT",
      },
      {
        title: "Rolls-Royce Silver Cloud III",
        image: car2,
        year: "1978",
        yearTitle: "Year of manufacture",
        capacityTitle: "Engine capacity",
        capacity: "V8",
        nftTitle: "Total number of NFTs",
        countNft: 0,
        allNft: 300,
        priceTitle: "Price per NFT",
        price: "150$",
        btnText: "Buy NFT",
      },
      {
        title: "Aston Martin DB2/4",
        image: car3,
        year: "выпускался с 1953 по 1957 г",
        yearTitle: "Year of manufacture",
        capacityTitle: "Engine capacity",
        capacity: "2.5-2.9 литра",
        nftTitle: "Total number of NFTs",
        countNft: 0,
        allNft: 300,
        priceTitle: "Price per NFT",
        price: "300$",
        btnText: "Buy NFT",
      },
    ],
    sectionTitleTable: "Profitability FROM NFT",
    sectionHowToBuyTable: "HOW TO PURCHASE NFT?",
    howToBuy: "eng", // "ru arab hindi eng"
    buyCarInvest: {
      title: "CHOOSE YOUR AUTOMOBILE AND PURCHASE A STAKE BY ISSUING NFT",
      subTitle: "Invest in premium assets",
      btnText: "Issue NFT",
    },
    wallet: {
      metaMaskNotInstalled: "MetaMask is not installed",
      connectMetaMaskError: "Error connecting MetaMask 😕",
      phantomNotInstalled: "Phantom is not installed",
      connectPhantomError: "Error connecting Phantom 😕",
      learnHowToInstallMetaMask: "Official MetaMask website",
      learnHowToInstallPhantom: "Official Phantom Website",
      successConnected: "Successfully connected 🚘",
      errorConnectedWallet: "Failed to connect to the wallet 😕",
      errorConnect: "Connection error, try again later",
      logout: "You have logged out of your account 👋",
      notInstalledWallets: "MetaMask or Phantom are not installed",
      needInstallMetamaskForWork: "You need to install MetaMask",
      needInstallPhantomForWork: "You need to install Phantom",
    },
  },
};
