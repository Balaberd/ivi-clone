import React, { FC } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Person.module.scss";

interface IPerson {
  photoUrl: string;
  name: string;
  role: string;
  classNames?: string;
}

export const Person: FC<IPerson> = ({ photoUrl, name, role, classNames }) => (
  <div className={cn(styles.container, classNames)}>
    <Image
      loader={() => photoUrl}
      src={photoUrl}
      alt="Фото актёра"
      width={110}
      height={110}
      className={styles.photo}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.role}>{role}</p>
  </div>
);
