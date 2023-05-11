import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { BannerSlider, MovieSlider, TopMovieSlider } from "@/widgets";
import Image from "next/image";
import styles from "./MainPage.module.scss";

export const MainPage: FC = () => (
  <div className={styles.mainPage}>
    <div className={styles.container}>
      <BannerSlider />
      <section className={styles.teaserBlock}>
        <Link
          href="https://www.ivi.ru/subscribe?redirect_url=%2F"
          className={cn(styles.link, styles.link_subscription)}
        >
          <Image
            src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg"
            alt="icon"
            width={24}
            height={32}
          />
          30 дней подписки за 1 ₽
        </Link>
        <Link
          href="https://www.ivi.ru/login?action=%2Fuser%2Fcertificate&redirect_url=%2F"
          className={cn(styles.link, styles.link_certificate)}
        >
          <Image
            src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg"
            alt="icon"
            width={56}
            height={32}
          />
          Активировать сертификат
        </Link>
      </section>
      <MovieSlider />
      <TopMovieSlider />
    </div>
  </div>
);
