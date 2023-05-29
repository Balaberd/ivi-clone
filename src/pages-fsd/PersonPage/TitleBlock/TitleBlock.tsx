import { FC } from "react";
import Image from "next/image";
import { ExpandedBlock } from "@/shared";
import styles from "./TitleBlock.module.scss";

interface Props {
  avatar: string;
  name: string;
  nameEng: string;
  description: string;
}

export const TitleBlock: FC<Props> = ({
  avatar,
  name,
  nameEng,
  description,
}) => (
  <div className={styles.titleBlock}>
    <Image
      className={styles.avatar}
      src={avatar}
      width={120}
      height={144}
      alt="фото актера"
    />
    <div className={styles.title}>{name}</div>
    <div className={styles.subtitle}>{nameEng}</div>
    <ExpandedBlock className={styles.description}>{description}</ExpandedBlock>
  </div>
);
