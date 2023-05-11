import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.scss";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header: FC = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.logoBlock}>
      <Image
        src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
        alt="logo"
        width={66}
        height={48}
      />
    </Link>
    <nav className={styles.navigate}>
      <ul className={styles.navigateList}>
        <li>
          <Link className={styles.link} href="#">
            Мой Иви
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            Что нового
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            Фильмы
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            Сериалы
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            Мультфильмы
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            TV+
          </Link>
        </li>
      </ul>
    </nav>
    <div className={styles.wideBlock}>
      <Link className={styles.subscriptionButton} href="#">
        Оплатить подписку
      </Link>

      <Link className={cn(styles.link, styles.link_search)} href="#">
        <div className={cn(styles.icon, styles.icon_search)}></div> Поиск
      </Link>
    </div>
    <Link className={cn(styles.link, styles.link_bell)} href="#">
      <div className={cn(styles.icon, styles.icon_bell)}></div>
    </Link>
    <Link className={cn(styles.link, styles.link_auth)} href="#">
      <div className={cn(styles.icon, styles.icon_auth)}></div>
    </Link>
    <HeaderMobile />
  </header>
);
