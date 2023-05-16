import { FC } from "react";
import Link from "next/link";
import styles from "./Tag.module.scss";

interface Props {
  text: string;
}

export const Tag: FC<Props> = ({ text }) => (
  <Link href="#" className={styles.tag}>
    {text}
  </Link>
);
