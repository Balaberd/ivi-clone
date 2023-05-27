import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Crumb.module.scss";

interface Props {
  title: string;
  path: string;
  disabled?: boolean;
}

export const Crumb: FC<Props> = ({ title, path, disabled = false }) => {
  if (disabled) {
    return (
      <span className={cn(styles.link, styles.link_disabled)}>{title}</span>
    );
  }
  return (
    <Link href={path} className={styles.link}>
      {title}
    </Link>
  );
};
