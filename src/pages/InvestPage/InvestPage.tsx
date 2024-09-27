import { Section } from "@shared/ui/Section";
import { SpoilerGroup } from "@widgets/SpoilerGroup";
import car from "@images/car-bottom.png";
import { PageLayout } from "@widgets";
import * as styles from "./InvestPage.module.pcss";
import { useTranslation } from "react-i18next";
import { ITable } from "@shared/ui/Table/Table.types";
import Table from "@shared/ui/Table/Table";
import { Button } from "@shared/ui/Button";
import { NftCardsSlider } from "@widgets/NFTCardsSlider/NFTCardsSlider";
import { Container } from "@shared/ui/Container";
import type { LanguageKey } from "@widgets/HowToBuy";
import { BuyCarInvest, IBuyCarInvest } from "@widgets/BuyCarInvest";
import {
  INftCardProps,
  INftCardPropsWithoutExtras,
} from "@entities/NFTCard/NFTCard.types";
import { HowToBuy } from "@widgets/HowToBuy";
import { useEffect, useRef } from "react";
import { useAdaptiveState, useSmoothScroll } from "@shared/lib/hooks";
import { Header } from "@widgets/Header";
import {
  fadeInOnScroll,
  slideInFromLeft,
} from "@shared/animations/scrollAnimations";
import { isRTL } from "@shared/lib";
import { useStateContext } from "@shared/store/store";

export const InvestPage = () => {
  const { state } = useStateContext();
  const howToBuyRef = useRef<HTMLElement>(null);
  const nftCardsRef = useRef<HTMLDivElement>(null);
  const slideInFromLeftRef = useRef<HTMLDivElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useTranslation();
  const { isMobile, isTablet } = useAdaptiveState();
  const smoothScrollToHowToBuy = useSmoothScroll(
    false,
    {},
    null,
    howToBuyRef,
    isMobile || isTablet ? 350 : 50
  );

  //BuyCarInvest
  const BuyCarInvestData: IBuyCarInvest = t("buyCarInvest", {
    returnObjects: true,
  });
  BuyCarInvestData.btnSlot = (
    <Button
      text={BuyCarInvestData.btnText}
      color="black"
      variant="filled"
      className={styles.isBuyNftButton}
    />
  );
  BuyCarInvestData.onButtonClick = smoothScrollToHowToBuy;

  //How to buy
  const sectionTitleHowToBuyData: string = t("sectionHowToBuyTable");
  const sectionTitleHowToBuy: string = sectionTitleHowToBuyData;
  const HowToBuyKey: string = t("howToBuy");
  // Проверка и приведение строки к типу LanguageKey
  const languageKey: LanguageKey | null = (
    ["ru", "eng", "arab", "hindi"] as const
  ).includes(HowToBuyKey as LanguageKey)
    ? (HowToBuyKey as LanguageKey)
    : null;

  //Данные по карточкам (машины)
  const nftData: Array<INftCardPropsWithoutExtras> = t("nftCardsData", {
    returnObjects: true,
  });
  const enhancedNftData: Array<INftCardProps> = nftData.map((item, index) => {
    let className = "";
    switch (index) {
      case 1:
        className = styles.isOrangeCard;
        break;
      case 2:
        className = styles.isGreenCard;
        break;
      default:
        className = "";
        break;
    }
    return {
      ...item,
      btnSlot: <Button variant="outline" text={item.btnText} />,
      className,
    };
  });

  //Таблица
  const tableData: ITable = t("table", { returnObjects: true });
  const sectionTitleTableData: string = t("sectionTitleTable");
  const sectionTitleTable: string = sectionTitleTableData;

  //Спойлер
  const spoilerData = t("spoilerGroup", { returnObjects: true }) as {
    title: string;
    content: string;
  }[];
  const spoilerGroup = spoilerData.map((spoilerItem) => {
    return {
      title: spoilerItem.title,
      content: spoilerItem.content,
    };
  });

  //Анимации
  useEffect(() => {
    fadeInOnScroll(nftCardsRef.current);
    fadeInOnScroll(howToBuyRef.current, {
      start: isMobile || isTablet ? "top 120%" : "top 70%",
    });
    if (!isRTL()) {
      slideInFromLeft(slideInFromLeftRef.current, {
        start: "top 70%",
        end: "top 25%",
        duration: 2,
      });
    }
  }, [state.language]);

  return (
    <PageLayout headerSlot={<Header />}>
      <>
        <Section className={styles.isSectionBuyCarInvest}>
          <Container>
            <BuyCarInvest {...BuyCarInvestData} />
          </Container>
        </Section>
        <Section className={styles.isSectionHowToBuy} ref={howToBuyRef}>
          <Container>
            <h2>{sectionTitleHowToBuy}</h2>
            {languageKey ? <HowToBuy language={languageKey} /> : <></>}
          </Container>
        </Section>
        <Section ref={nftCardsRef}>
          <Container className={styles.isSliderContainer}>
            <NftCardsSlider cards={[...enhancedNftData]} />
          </Container>
        </Section>
        <Section
          ref={slideInFromLeftRef}
          className={styles.isSectionForIncomeNft}>
          <Container>
            <h2 className="isNoRtl">{sectionTitleTable}</h2>
            <Table thead={tableData.thead} tbody={tableData.tbody} />
          </Container>
        </Section>
        <Section className={styles.isSectionForSpoilerGroup}>
          <Container>
            <SpoilerGroup
              spoilers={spoilerGroup}
              renderContent={(_, content) => {
                return <div dangerouslySetInnerHTML={{ __html: content }} />;
              }}
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="isFlex isJustifyCenter" style={{ height: "340px" }}>
              <div
                className="isRelative"
                style={{
                  aspectRatio: 1 / 1,
                  height: "100%",
                  pointerEvents: "none",
                }}>
                <img
                  src={car}
                  alt="car"
                  loading="lazy"
                  width={"100%"}
                  height={"100%"}
                  style={{ position: "absolute", top: "-100px" }}
                />
              </div>
            </div>
          </Container>
        </Section>
      </>
    </PageLayout>
  );
};
