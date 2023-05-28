import { FC } from "react";
import cn from "classnames";
import styles from "./ActionBlock.module.scss";

export const ActionBlock: FC = () => (
  <div className={styles.actionsBlock}>
    <button className={styles.actionButton}>
      <span className={cn(styles.icon, styles.icon_play)}></span>
      Трейлер
    </button>
    <button className={styles.actionButton}>
      <span className={cn(styles.icon, styles.icon_bookmark)}></span>
    </button>
    <button className={styles.actionButton}>
      <span className={cn(styles.icon, styles.icon_download)}></span>
    </button>
  </div>
);
