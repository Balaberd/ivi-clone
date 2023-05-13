import React from "react";
import cn from "classnames";
import styles from "./MyFooter.module.scss";

export const MyFooter = () => (
  <footer className={styles.container}>
    {/* Разделитель */}
    <hr className={cn(styles.separator, styles.topSeparator)} />
    <div className={styles.wrapper}>
      {/* о нас */}
      <div className={cn(styles.block, styles.about)}>
        <h1>О нас</h1>
        <a href="https://corp.ivi.ru/?_gl=1%2A9ld3wl%2A_ga%2AOTE5MTg2MTQ3LjE2ODE1NTMxMTk.%2A_ga_GETQ4387MJ%2AMTY4MzYxNzQxMi4xNi4wLjE2ODM2MTc0MTIuNjAuMC4w">
          О компании
        </a>
        <a href="https://corp.ivi.ru/career/?_gl=1*jlt6u7*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4wLjE2ODM2MTc0MTIuNjAuMC4w#career-vacancy-block">
          Вакансии
        </a>
        <a href="https://www.ivi.ru/pages/beta/">Программа бета-тестирования</a>
        <a href="https://www.ivi.ru/info/partners">Информация для партнёров</a>
        <a href="https://corp.ivi.ru/advertisers/?_gl=1*22we9j*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4xLjE2ODM2MTk0MzkuNDMuMC4w">
          Размещение рекламы
        </a>
        <a href="https://www.ivi.ru/info/agreement">
          Пользовательское соглашение
        </a>
        <a href="https://www.ivi.ru/info/confidential">
          Политика конфиденциальности
        </a>
        <a href="https://www.ivi.ru/info/goryachaya-liniya-komplaens">
          Комплаенс
        </a>
      </div>
      {/* разделы */}
      <div className={cn(styles.block, styles.sections)}>
        <h1>Разделы</h1>
        <a href="https://www.ivi.ru/">Мой Иви</a>
        <a href="https://www.ivi.ru/new">Что нового</a>
        <a href="https://www.ivi.ru/movies">Фильмы</a>
        <a href="https://www.ivi.ru/series">Сериалы</a>
        <a href="https://www.ivi.ru/animation">Мультфильмы</a>
        <a href="https://www.ivi.ru/tvplus">TV+</a>
        <a href="https://www.ivi.ru/goodmovies">Что посмотреть</a>
        <a href="https://www.ivi.ru/cert" className={styles.activate}>
          Активация сертификата
        </a>
      </div>
      {/* служба поддержки */}
      <div className={styles.supportBlock}>
        <h1>Служба поддержки</h1>
        <p>
          Мы всегда готовы вам помочь. <br />
          Наши операторы онлайн 24/7
        </p>
        <a href="https://www.ivi.ru/profile" className={styles.textInChat}>
          Написать в чате
        </a>
        <div className={styles.supportIcons}>
          <a href="mailto:support@ivi.ru" className={styles.mailCall}>
            <span className={styles.mail}></span>
          </a>
          <a href="mailto:support@ivi.ru" className={styles.mailCall}>
            <span className={styles.phone}></span>
          </a>
        </div>
        <a
          href="https://ask.ivi.ru/?_gl=1*swf04a*_ga*OTE5MTg2MTQ3LjE2ODE1NTMxMTk.*_ga_GETQ4387MJ*MTY4MzYxNzQxMi4xNi4xLjE2ODM2MTk3NjIuNTguMC4w"
          className={styles.ask}
        >
          ask.ivi.ru
        </a>
        <p>Ответы на вопросы</p>
      </div>
      {/* подписка */}
      <div className={cn(styles.block, styles.watch)}>
        <span className={styles.megaphone}></span>
        <p>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
      </div>
    </div>
    {/* <div className={styles.separator}></div> */}
    <hr className={cn(styles.separator, styles.bottomSeparator)} />
    {/* блок с ссылками на разные устройства + на социалки */}
    <div className={styles.devicesNSocials}>
      {/* устройства */}
      <div className={styles.devicesBlock}>
        {/* apple */}
        <a
          href="https://apps.apple.com/RU/app/id455705533?mt=8"
          className={styles.devices}
        >
          <div className={styles.deviceText}>
            <p>Загрузить в</p>
            <h1>App Store</h1>
          </div>
        </a>
        {/* Google Play */}
        <a
          href="https://go.onelink.me/app/devicesAndroid"
          className={styles.devices}
        >
          <div className={styles.deviceText}>
            <p>Доступно в</p>
            <h1>Google Play</h1>
          </div>
        </a>
        {/* Smart TV */}
        <a
          href="https://go.onelink.me/app/devicesAndroid"
          className={styles.devices}
        >
          <div className={styles.deviceText}>
            <p>Смотрите на</p>
            <h1>Smart TV</h1>
          </div>
        </a>
        {/* Все устройства */}
        <a
          href="https://go.onelink.me/app/devicesAndroid"
          className={styles.devices}
        >
          <div className={styles.deviceText}>
            <h1>Все устройства</h1>
          </div>
        </a>
      </div>
      {/* социалки */}
      <div className={styles.socialsBlock}>
        <a
          href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
          className={styles.socials}
        >
          VK
        </a>
        <a href="https://ok.ru/ivi.ru" className={styles.socials}>
          OK
        </a>
        <a href="https://twitter.com/ivi_ru" className={styles.socials}>
          TW
        </a>
        <a
          href="https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=en"
          className={styles.socials}
        >
          VB
        </a>
        <a
          href="https://www.linkedin.com/company/2543415/"
          className={styles.socials}
        >
          IN
        </a>
        <a href="https://t.me/official_iviru" className={styles.socials}>
          TG
        </a>
      </div>
    </div>
    {/* копирайт блок */}
    <div className={styles.copyright}>
      <p>© 2023 ООО «Иви.ру»</p>
      <p>
        HBO ® and related service marks are the property of Home Box Office, Inc
      </p>
    </div>
  </footer>
);
