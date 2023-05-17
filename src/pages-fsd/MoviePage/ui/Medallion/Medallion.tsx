import React, { FC } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Medallion.module.scss";

interface IMedallion {
  photoUrl: string;
  name: string;
  classNames?: string;
}

export const Medallion: FC<IMedallion> = ({ photoUrl, name, classNames }) => (
  <div className={cn(styles.container, classNames)}>
    <div>
      <div className={styles.medallion}>
        <Image
          data-testid="photoOfActor"
          loader={() => photoUrl}
          src={photoUrl}
          alt="Фото актёра"
          width={40}
          height={40}
          className={styles.photo}
        />
      </div>
      <p className={styles.title}>{name}</p>
    </div>
  </div>
);
