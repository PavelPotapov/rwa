import { NFTCard } from "@entities/NFTCard";
import { INftCardsSliderProps } from "./NFTCardsSlider.type";
import { ReactSwiper } from "@shared/ui/reactSwiper/ReactSwiper";
import { useEffect, useRef, useState } from "react";
import { CustomNavigationButtons } from "@entities/CustomNavigationButtons/CustomNavigationButtons";
import { useStateContext } from "@shared/store/store";

export const NftCardsSlider = ({ cards }: INftCardsSliderProps) => {
  const swiperRef = useRef<any>(null);
  const { state } = useStateContext();
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      setResetKey((prev) => prev + 1);
    }
  }, [state.language]);

  const res = cards.map((item, index) => ({
    html: (
      <NFTCard
        key={item.title + index}
        title={item.title}
        image={item.image}
        year={item.year}
        yearTitle={item.yearTitle}
        capacityTitle={item.capacityTitle}
        capacity={item.capacity}
        nftTitle={item.nftTitle}
        countNft={item.countNft}
        allNft={item.allNft}
        priceTitle={item.priceTitle}
        price={item.price}
        btnSlot={item.btnSlot}
        className={item.className ? item.className : ""}
      />
    ),
  }));

  return (
    <ReactSwiper
      key={resetKey}
      slidesProps={res}
      renderFn={(item) => (item.html ? item.html : "")}
      ref={swiperRef}
      navigationSlot={<CustomNavigationButtons swiperRef={swiperRef} />}
      swiperCfg={{
        effect: "cube",
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 120,
          shadowScale: 0.94,
        },
      }}
    />
  );
};
