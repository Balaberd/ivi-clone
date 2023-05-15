import { FC } from "react";
import Link from "next/link";
import styles from "./FilterTag.module.scss";

interface Props {
  text: string;
}

export const FilterTag: FC<Props> = ({ text }) => (
  <Link href="#" className={styles.filterTag}>
    {text}
  </Link>
);
