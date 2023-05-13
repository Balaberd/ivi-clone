import React, { FC } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Medallion.module.scss";

interface IMedallion {
  rating?: string | number;
  photoUrl: string;
  name?: string;
  classNames?: string;
}

export const Medallion: FC<IMedallion> = ({
  rating,
  photoUrl,
  name,
  classNames,
}) => (
  <div className={cn(classNames)}>
    {/* если есть рейтинг (значит нет имени и фото), то отображается медальон рейтинга */}
    {rating && (
      <div style={{ margin: "1rem 1rem" }}>
        <div className={styles.medallion}>
          <p className={styles.rating}>{rating}</p>
        </div>
        <p className={styles.title}>Рейтинг Иви</p>
      </div>
    )}
    {/* если есть имя и фото (значит нет рейтинга), то отображается медальон актера */}
    {name && (
      <div>
        <div className={styles.medallion}>
          {/* <img src={photoUrl} alt="Фото актёра" className={styles.photo} /> */}
          <Image
            data-testid="photoOfActor"
            loader={() => photoUrl}
            src={photoUrl}
            alt="Фото актёра"
            width={56}
            height={56}
            className={styles.photo}
          />
        </div>
        <p className={styles.title}>{name}</p>
      </div>
    )}
  </div>
);
