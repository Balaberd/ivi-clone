import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { useAppSelector } from "@/app-fsd/model/hooks/redux";
import styles from "./Header.module.scss";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderDropdown } from "./HeaderDropdown/HeaderDropdown";
import { moviesMock } from "./HeaderDropdown/lib/moviesMock";
import { serialsMock } from "./HeaderDropdown/lib/serialsMock";
import { multsMock } from "./HeaderDropdown/lib/multsMock";

export const Header: FC = () => {
  const isAuthorizedUser = useAppSelector((state) => !!state.user.token);

  return (
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
            <Link className={styles.link} href="/">
              Мой Иви
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="https://www.ivi.ru/new">
              Что нового
            </Link>
          </li>
          <li>
            <Link
              className={cn(styles.link, styles.link_movies)}
              href="/movies"
            >
              Фильмы
            </Link>
            <HeaderDropdown
              data={moviesMock}
              className={cn(styles.dropdown, styles.dropdown_serial)}
            />
          </li>
          <li>
            <Link className={styles.link} href="#">
              Сериалы
            </Link>
            <HeaderDropdown
              data={serialsMock}
              className={cn(styles.dropdown, styles.dropdown_serial)}
            />
          </li>
          <li>
            <Link className={styles.link} href="#">
              Мультфильмы
            </Link>
            <HeaderDropdown
              data={multsMock}
              className={cn(styles.dropdown, styles.dropdown_serial)}
            />
          </li>
          <li>
            <Link className={styles.link} href="https://www.ivi.ru/tvplus">
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
      <Link
        className={cn(styles.link, styles.link_auth, {
          [styles.link_authorized]: isAuthorizedUser,
        })}
        href={isAuthorizedUser ? "/profile" : "/auth"}
      >
        <div
          className={cn(styles.icon, styles.icon_auth, {
            [styles.icon_authorized]: isAuthorizedUser,
          })}
        ></div>
      </Link>
      <HeaderMobile />
    </header>
  );
};
