import React, { FC } from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import SocialLink from "./ui/SocialLink";
import DeviceLink from "./ui/DeviceLink";

export const Footer: FC = () => (
  <footer className={styles.container}>
    <div className={cn(styles.line, styles.line_first)}>
      <div className={cn(styles.column, styles.aboutUs)}>
        <span className={styles.title}>О нас</span>
        <ul>
          <li>
            <a
              className={styles.link}
              href="https://corp.ivi.ru/?_gl=1%2A9ld3wl%2A_ga%2AOTE5MTg2MTQ3LjE2ODE1NTMxMTk.%2A_ga_GETQ4387MJ%2AMTY4MzYxNzQxMi4xNi4wLjE2ODM2MTc0MTIuNjAuMC4w"
            >
              О компании
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://corp.ivi.ru/career/?_gl=1*jlt6u7*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4wLjE2ODM2MTc0MTIuNjAuMC4w#career-vacancy-block"
            >
              Вакансии
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/pages/beta/">
              Программа бета-тестирования
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/info/partners">
              Информация для партнёров
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://corp.ivi.ru/advertisers/?_gl=1*22we9j*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4xLjE2ODM2MTk0MzkuNDMuMC4w"
            >
              Размещение рекламы
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/info/agreement">
              Пользовательское соглашение
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.ivi.ru/info/confidential"
            >
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.ivi.ru/info/goryachaya-liniya-komplaens"
            >
              Комплаенс
            </a>
          </li>
        </ul>
      </div>
      <div className={cn(styles.column, styles.sections)}>
        <span className={styles.title}>Разделы</span>
        <ul>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/">
              Мой Иви
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/new">
              Что нового
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/movies">
              Фильмы
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/series">
              Сериалы
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/animation">
              Мультфильмы
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/tvplus">
              TV+
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.ivi.ru/goodmovies">
              Что посмотреть
            </a>
          </li>
          <li>
            <a
              className={cn(styles.link, styles.activate)}
              href="https://www.ivi.ru/cert"
            >
              Активация сертификата
            </a>
          </li>
        </ul>
      </div>
      <div className={cn(styles.column, styles.supportColumn)}>
        <span className={styles.title}>Служба поддержки</span>
        <div>
          <p>
            Мы всегда готовы вам помочь.
            <br />
            Наши операторы онлайн 24/7
          </p>
        </div>
        <div>
          <a
            href="https://www.ivi.ru/profile"
            className={cn(styles.button, styles.button_textInChat)}
          >
            Написать в чате
          </a>
          <div className={styles.supportContactsBlock}>
            <a href="mailto:support@ivi.ru" className={styles.mailCall}>
              <span className={styles.mail}></span>
            </a>
            <a href="mailto:support@ivi.ru" className={styles.mailCall}>
              <span className={styles.phone}></span>
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://ask.ivi.ru/?_gl=1*swf04a*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4xLjE2ODM2MTk3NjIuNTguMC4w"
            className={styles.ask}
          >
            ask.ivi.ru
          </a>
          <p>Ответы на вопросы</p>
        </div>
      </div>
      <div className={cn(styles.column, styles.watch)}>
        <div>
          <span className={styles.megaphone}></span>
          <p>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
        </div>
      </div>
    </div>

    <div className={cn(styles.line, styles.line_second)}>
      <div className={styles.devicesBlock}>
        <DeviceLink
          link="https://apps.apple.com/RU/app/id455705533?mt=8"
          deviceText="Загрузить в"
          deviceType="App Store"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg"
        />
        <DeviceLink
          link="https://go.onelink.me/app/devicesAndroid"
          deviceText="Доступно в"
          deviceType="Google Play"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg"
        />
        <DeviceLink
          link="https://www.ivi.ru/pages/tvsmart"
          deviceText="Смотрите на"
          deviceType="Smart TV"
          typeOfIcon={styles.smartTV}
        />
        <DeviceLink
          link="https://www.ivi.ru/devices"
          deviceType="Все устройства"
          typeOfIcon={styles.allDevices}
        />
      </div>
      <div className={styles.socialsBlock}>
        <SocialLink
          link="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg"
          classNames={styles.socials}
        />
        <SocialLink
          link="https://ok.ru/ivi.ru"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg"
          classNames={styles.socials}
        />
        <SocialLink
          link="https://twitter.com/ivi_ru"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg"
          classNames={styles.socials}
        />
        <SocialLink
          link="https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=en"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg"
          classNames={styles.socials}
        />
        <SocialLink
          link="https://www.linkedin.com/company/2543415/"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg"
          classNames={styles.socials}
        />
        <SocialLink
          link="https://t.me/official_iviru"
          imageUrl="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg"
          classNames={styles.socials}
        />
      </div>
    </div>

    <div className={styles.copyright}>
      <p>© 2023 ООО «Иви.ру»</p>
      <p>
        HBO ® and related service marks are the property of Home Box Office, Inc
      </p>
    </div>
  </footer>
);
