import type { INftCardProps } from "./NFTCard.types";
import * as styles from "./NFTCard.module.pcss";
import classnames from "classnames";

export const NFTCard = ({
  title,
  image,
  altText,
  year,
  yearTitle,
  capacity,
  capacityTitle,
  nftTitle,
  countNft,
  allNft,
  priceTitle,
  price,
  btnSlot,
  className,
}: INftCardProps) => {
  const cardClasses = classnames(styles.nftCard, className);
  return (
    <article className={cardClasses}>
      <div className={styles.nftCardImgContainer}>
        <img
          src={image}
          alt={altText ?? title}
          loading="lazy"
          width={607}
          height={373}
          className={styles.nftCardImg}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.infoContainer}>
          <h3 className={styles.title} title={title}>
            {title}
          </h3>
          <dl className={styles.character}>
            <div className={styles.spec}>
              <dt>{yearTitle}:</dt>
              <dd>{year}</dd>
            </div>
            <div className={styles.spec}>
              <dt>{capacityTitle}:</dt>
              <dd>{capacity}</dd>
            </div>
            <div className={styles.spec}>
              <dt>{nftTitle}:</dt>
              <dd>
                {countNft}/{allNft}
              </dd>
            </div>
            <div className={styles.spec}>
              <dt>{priceTitle}:</dt>
              <dd>{price}</dd>
            </div>
          </dl>
          {btnSlot ? btnSlot : ""}
        </div>
      </div>
    </article>
  );
};

export default NFTCard;
