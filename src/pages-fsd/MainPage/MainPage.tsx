import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { BannerSlider, MovieSlider, TopMovieSlider } from "@/widgets";
import Image from "next/image";
import { ExpandedBlock } from "@/shared/ui/ExpandedBlock/ExpandedBlock";
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
      <MovieSlider sliderTitle="Комедии" params={{ genre: "комедия" }} />
      <ExpandedBlock
        className={styles.aboutBlock}
        title="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
      >
        <p>
          Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет
          усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви –
          это именно тот ресурс, который вам нужен. От лучших кинолент в
          HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем
          от необходимости идти в кинотеатр или изучать программу телепередач –
          у посетителей нашего ресурса гораздо больше возможностей.
        </p>
        <p>
          Видеотека Иви – это постоянно пополняющаяся коллекция в рунете,
          которая насчитывает более 60 тысяч отечественного и зарубежного
          контента, доступного для просмотра онлайн. Мы первыми в России
          подписали контракты с крупнейшими голливудскими студиями (Walt Disney,
          Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и
          другими) и на постоянной основе сотрудничаем с крупнейшими российскими
          компаниями и телеканалами.
        </p>
        <ol>
          <p>Онлайн-кинотеатр ivi.ru – это:</p>
          <li>
            уникальная рекомендательная система, учитывающая ваши предпочтения и
            предлагающая посмотреть именно то, что точно придется вам по душе;
          </li>
          <li>
            просмотр в одно касание на любом из устройств, подключенном квашему
            Иви-аккаунту – от смартфонов до телевизоров с технологиейSmart TV;
          </li>
          <li>
            {" "}
            возможность скачивать в память мобильного устройства лицензионный
            контент и смотреть его без доступа к Интернету;
          </li>
          <li>
            уникальные условия и преимущества для обладателей подписки Иви,
            делающей кинопросмотр комфортным и приятным;
          </li>
          <li>
            {" "}
            удобная и продвинутая система уведомлений, вы не пропустите выход
            крутого обсуждаемого блокбастера – мы известим о появлении
            подходящим для вас способом;
          </li>
          <li>
            возможность добавлять фильмы в «смотреть позже», чтобы вернуться к
            ним в свободное время;
          </li>
          <li>
            {" "}
            контент, для просмотра которого не требуется устанавливать
            видеоплееры или искать кодеки;{" "}
          </li>
          <li>
            просмотр онлайн контента хорошего разрешения без регистрации и смс.
          </li>
        </ol>
        <p>
          Откройте для себя возможность смотреть фильмы онлайн бесплатно в
          отличном качестве с кинотеатром Иви!
        </p>
      </ExpandedBlock>
      <MovieSlider sliderTitle="спорт" params={{ genre: "спорт" }} />
      <TopMovieSlider />
      <MovieSlider sliderTitle="биография" params={{ genre: "биография" }} />
      <MovieSlider sliderTitle="вестерн" params={{ genre: "вестерн" }} />
      <MovieSlider sliderTitle="криминал" params={{ genre: "криминал" }} />
      <MovieSlider sliderTitle="военный" params={{ genre: "военный" }} />
      <MovieSlider sliderTitle="ужасы" params={{ genre: "ужасы" }} />
      <MovieSlider sliderTitle="детектив" params={{ genre: "детектив" }} />
      <MovieSlider sliderTitle="семейный" params={{ genre: "семейный" }} />
      <MovieSlider sliderTitle="фэнтези" params={{ genre: "фэнтези" }} />
      <MovieSlider sliderTitle="фантастика" params={{ genre: "фантастика" }} />
      <MovieSlider sliderTitle="мелодрама" params={{ genre: "мелодрама" }} />
      <MovieSlider
        sliderTitle="приключения"
        params={{ genre: "приключения" }}
      />
      <MovieSlider sliderTitle="триллер" params={{ genre: "триллер" }} />
      <MovieSlider sliderTitle="драма" params={{ genre: "драма" }} />

      <div className={styles.watchTV}>
        <p>Смотри телеканалы* круглосуточно, непрерывно и бесплатно.</p>
        <p>
          *Первый канал, Телеканал &#34;Россия&#34; (Россия-1), Телеканал &#34;
          ТВ&#34;,Телекомпания НТВ, Петербург - 5 канал, Телеканал &#34;Россия -
          Культура&#34;,Российский информационный канал &#34;Россия-24&#34;,
          Телеканал &#34;Общественноетелевидение России&#34;, ТВ ЦЕНТР
        </p>
      </div>
    </div>
  </div>
);
