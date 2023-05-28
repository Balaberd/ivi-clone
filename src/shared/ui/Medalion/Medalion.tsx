import { FC, ReactElement } from "react";
import styles from "./Medalion.module.scss";

interface Props {
  content: ReactElement;
  title?: string;
}

export const Medalion: FC<Props> = ({ content, title }) => (
  <div className={styles.medalion}>
    <div className={styles.content}>{content}</div>
    <div className={styles.title}>{title}</div>
  </div>
);
