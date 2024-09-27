import car1 from "@images/car1.png";
import car2 from "@images/car2.png";
import car3 from "@images/car3.png";

export const hi = {
  translation: {
    spoilerGroup: [
      {
        title: "क्या आप असली या आभासी क्लासिक कारें बेचते हैं?",
        content: `<p>
            हम वास्तविक दुनिया में क्लासिक कारों से जुड़े NFT बेचते हैं। NFT का मालिक वास्तविक क्लासिक कार का मालिक बन जाता है और उसके पास संपत्ति की बिक्री और प्रबंधन से लाभ का अधिकार होता है।
          </p>`,
      },
      {
        title: "निवेशकों के लिए क्या सुरक्षा और गारंटी हैं?",
        content: `          <p>
            हम आपको बाद में उत्तर देंगे, जब हमारे वकील कानूनी मॉडल पर निर्णय ले लेंगे!
          </p>`,
      },
      {
        title: "क्लाससिक कार क्यों?",
        content: `          <p>
            यह क्लासिक कारों के टोकनीकरण के लिए एक प्लेटफॉर्म है, साथ ही निवेश-आकर्षक कारों की खरीद, उनकी बहाली और लाभ के लिए बिक्री का एक प्रबंधन कंपनी है। हमने इस प्लेटफ़ॉर्म को एक टूल के रूप में बनाया है जो पहले केवल निवेशकों के चुनिंदा समूह के लिए ही उपलब्ध था।
          </p>`,
      },
      {
        title: "'हेरिटेज क्लासिक कार' क्या है?",
        content: `
            <ul>
              <li>
                अच्छे मॉडल की बाजार कीमत कम से कम 1,50,000 अमेरिकी डॉलर होती है।
              </li>
              <li>
               क्लासिक कारों में निवेश सालाना शीर्ष 3 सबसे लाभदायक "लक्जरी" संपत्तियों में शामिल होता है।
              </li>
              <li>एक निवेश जो हमेशा स्थिर पज़िशन में रहता है!</li>
              <li>10 वर्षों में 180%-700% की वृद्धि</li>
            </ul>
            <p>-विश्वसनीयते के मामले में कलेक्शन कार ख़रीदना किसी रियल एस्टेट, प्रतिभूति या प्राचीन वस्तुओं में निवेश करने की बराबर है। कुछ क्लासिक कार मॉडल की कीमतें प्रति वर्ष 10-30% तक बढ़ रही हैं।</p>`,
      },
      {
        title: "हेरिटेज क्लासिक कार NFT का मालिक होने से मुझे क्या मिलेगा?",
        content: `            <p>
              हमारे साथ कॉन्ट्रेक्ट बनाने से आपको कार बेचने से लाभ प्राप्त करने का अधिकार मिलता है जब एक ऑटोमोबाइल खरीदा और बहाल किया जाता है। एक ऑटोमोबाइल के कीमत के 30%-100% मार्कअप हो सकता है। कुछ NFT कार के लीज़िंग से मिली निष्क्रिय आय का अधिकार भी प्रदान करते हैं। आपको अंतर्राष्ट्रीय प्रदर्शनियों, शो-कार्यक्रमों आदि में भाग लेने का भी अधिकार मिलेगा।</p>
            <p>NFT के धारकों को कई विशेषाधिकार भी मिलते हैं। इसके अलावा उन्हें एक प्राइवेट क्लब और विभिन्न आयोजनों (कार रैलियां, शो, आदि) तक पहुंच मिलती है।</p>
            <p>प्रोजेक्ट टोकनों  की क्लोज्ड प्राइवेट बिक्री तक पहुंच।</p>`,
      },
      {
        title: "RWA क्या है?",
        content: `          <p>
            रियल वर्ल्ड एसेट्स (RWA) का मतलब होता है "वास्तविक दुनिया" संपत्तियों के लिए एक बाजार जिनके ब्लॉकचेन पर टोकन के रूप में जारी की गई। RWA में रियल एस्टेट, स्वामित्व अधिकार, कला, जेवलरी और कीमती धातु, और पूंजी बाजार में पारंपरिक फाइनैन्शल उपकरण शामिल हैं।</p>`,
      },
    ],
    table: {
      thead: ["ऑटमोबील", "कीमत", "कुल NFT", "अनुमानित आय"],
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
        yearTitle: "उत्पादन बर्ष",
        capacityTitle: "इंजन की क्षमता",
        capacity: "V8",
        nftTitle: "कुल NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "एक NFT का प्राइस",
        price: "100$",
        btnText: "NFT से आय",
      },
      {
        title: "Rolls-Royce Silver Cloud III",
        image: car2,
        year: "1978",
        yearTitle: "उत्पादन बर्ष",
        capacityTitle: "इंजन की क्षमता",
        capacity: "V8",
        nftTitle: "कुल NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "एक NFT का प्राइस",
        price: "150$",
        btnText: "NFT से आय",
      },
      {
        title: "Aston Martin DB2/4",
        image: car3,
        year: "выпускался с 1953 по 1957 г",
        yearTitle: "उत्पादन बर्ष",
        capacityTitle: "इंजन की क्षमता",
        capacity: "2.5-2.9 литра",
        nftTitle: "कुल NFT",
        countNft: 0,
        allNft: 300,
        priceTitle: "एक NFT का प्राइस",
        price: "300$",
        btnText: "NFT से आय",
      },
    ],
    sectionTitleTable: "एनएफटी से लाभप्रदता",
    sectionHowToBuyTable: "NFT कैसे खरीदें?",
    howToBuy: "hindi", // "ru arab hindi eng"
    buyCarInvest: {
      title: "अपना ऑटोमोबाइल चुनें और NFT जारी करके हिस्सेदारी खरीदें",
      subTitle: "प्रीमियम संपत्तियों मै निवेश करें!",
      btnText: "NFT जारी करें",
    },
  },
};
