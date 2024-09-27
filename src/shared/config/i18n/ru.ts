import car1 from "@images/car1.png";
import car2 from "@images/car2.png";
import car3 from "@images/car3.png";

export const ru = {
  translation: {
    spoilerGroup: [
      {
        title: "Вы продаете реальные или виртуальные классические автомобили ?",
        content: `<p>
            Мы продаем NFT, привязанных к классическим автомобилям в реальном мире.
            Владелец NFT, становится владельцем классического автомобиля и имеет
            права на получения прибыли от продажи и управления данным активам.
          </p>`,
      },
      {
        title: "Какая защита и гарантии существуют для инвесторов?",
        content: `          <p>
            Дадим позже ответ ! Как определимся с юристом и юр.моделью !
          </p>`,
      },
      {
        title: "Что такое Heritage Classic Car ?",
        content: `          <p>
            Это платформа по токенизации классических автомобилей, а также
            управляющая компания по покупке инвестиционно привлекательных
            автомобилей их реставрация и продажа с целью извлечения прибыли. Мы
            создали инструмент, который раньше был доступен только избранной группе
            инвесторов.
          </p>`,
      },
      {
        title: "Почему классические автомобили ?",
        content: `
            <ul>
              <li>
                Рыночная цена хороших образцов составляет не менее 150 000 долларов
                США.
              </li>
              <li>
                Инвестиции в классические автомобили ежегодно входят в ТОП-3 самых
                доходных «люксовых» активов.
              </li>
              <li>Инвестиция, которая всегда находится в стабильном положении!</li>
              <li>Рост за 10 лет со 180% до 700%</li>
            </ul>

            <p>Приобретение коллекционного автомобиля не менее надежно, чем вложение
            денег в недвижимость, ценные бумаги или другой антиквариат. Цены на
            отдельные модели старинных автомобилей растут со скоростью 10-30% в год.</p>`,
      },
      {
        title: "Что я получаю владея NFT Heritage Classic Car?",
        content: `            <p>
              Наш контракт дает право на получение прибыли от продажи автомобиля
              после его приобретения, реставрации и продажи с наценкой 30%-100%. А
              также в отдельных случаях получения пассивного дохода от сдачи в
              аренду, участия на международных выставках, шоу-программах и тд.
            </p>
            <p>
              Владение NFT также наделяет своих держателей определенными
              привилегиями и предоставляет доступ в закрытый клуб и на различные
              мероприятия (ивенты, автопробеги, показы)
            </p>
            <p>
              Доступ к закрытой продаже токенов проекта.
            </p>`,
      },
      {
        title: "Что такое RWA ? ",
        content: `          <p>
            Real World Assets (RWA) — термин, который обозначает рынок активов
            «реального мира», выпущенных в форме токенов на блокчейне. В RWA
            включают недвижимость, право собственности, предметы искусства,
            драгоценности и металлы, традиционные финансовые инструменты на рынках
            капитала.
          </p>`,
      },
    ],
    table: {
      thead: ["Авто", "цена за 1 nft", "всего nft", "прогнозируемый доход"],
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
        yearTitle: "Год выпуска",
        capacityTitle: "Объем двигателя",
        capacity: "V8",
        nftTitle: "Всего NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "Цена за 1 NFT:",
        price: "100$",
        btnText: "Купить NFT",
      },
      {
        title: "Rolls-Royce Silver Cloud III",
        image: car2,
        year: "1978",
        yearTitle: "Год выпуска",
        capacityTitle: "Объем двигателя",
        capacity: "V8",
        nftTitle: "Всего NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "Цена за 1 NFT:",
        price: "150$",
        btnText: "Купить NFT",
      },
      {
        title: "Aston Martin DB2/4",
        image: car3,
        year: "выпускался с 1953 по 1957 г",
        yearTitle: "Год выпуска",
        capacityTitle: "Объем двигателя",
        capacity: "2.5-2.9 литра",
        nftTitle: "Всего NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "Цена за 1 NFT:",
        price: "300$",
        btnText: "Купить NFT",
      },
    ],
    sectionTitleTable: "Доход от NFT",
    sectionHowToBuyTable: "Как приобрести NFT?",
    howToBuy: "ru", // "ru arab hindi eng"
    buyCarInvest: {
      title: "ВЫБЕРИ СВОЙ АВТОМОБИЛЬ И ПРИОБРЕТИ ЧАСТЬ ДОЛИ, ВЫПУСКАЯ NFT",
      subTitle: "Инвестируй в премиальные активы !",
      btnText: "Выпустить NFT",
    },
    wallet: {
      metaMaskNotInstalled: "MetaMask не установлен",
      connectMetaMaskError: "Ошибка при подключении MetaMask 😕",
      phantomNotInstalled: "Phantom не установлен",
      connectPhantomError: "Ошибка при подключении Phantom 😕",
      newVersionAvailable: "Новая версия доступна",
      learnHowToInstallMetaMask: "Официальный сайт MetaMask",
      learnHowToInstallPhantom: "Официальный сайт Phantom",
      successConnected: "Успешно подключено 🚘",
      errorConnectedWallet: "Не удалось подключиться к кошельку 😕",
      errorConnect: "Ошибка подключения, попробуйте позже",
      logout: "Вы вышли из аккаунта 👋",
      notInstalledWallets: "МетаМаск или Phantom не установлены",
      needInstallMetamaskForWork: "Необходимо установить MetaMask",
      needInstallPhantomForWork: "Необходимо установить Phantom",
    },
  },
};
