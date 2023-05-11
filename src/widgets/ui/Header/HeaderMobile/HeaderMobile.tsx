import { FC } from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./HeaderMobile.module.scss";

interface Props {
  className?: string;
}

export const HeaderMobile: FC<Props> = ({ className }) => (
  <div className={cn(styles.headerMobile, className)}>
    <Link className={cn(styles.button)} href={"#"}>
      <div className={(styles.icon, styles.icon_ivi)}></div>
      Мой иви
    </Link>
    <Link className={cn(styles.button)} href={"#"}>
      <div className={(styles.icon, styles.icon_catalog)}></div>
      Каталог
    </Link>
    <Link className={cn(styles.button)} href={"#"}>
      <div className={(styles.icon, styles.icon_search)}></div>
      Поиск
    </Link>
    <Link className={cn(styles.button)} href={"#"}>
      <div className={(styles.icon, styles.icon_tv)}></div>
      TV+
    </Link>
    <button className={cn(styles.button)}>
      <div className={(styles.icon, styles.icon_add)}></div>
      Ещё
    </button>
  </div>
);
