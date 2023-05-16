import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { GenreCard } from "@/entities/filter/ui/GenreCard";
import styles from "./GenreFilter.module.scss";
import { breakpoints } from "./lib/breakpoints";

export const GenreFilter: FC = () => (
  <Slider breakpoints={breakpoints}>
    <GenreCard title={"Драмы"} iconClassName={styles.drama} />
    <GenreCard title={"Комедии"} iconClassName={styles.comedy} />
    <GenreCard title={"Боевики"} iconClassName={styles.action} />
    <GenreCard title={"Триллеры"} iconClassName={styles.triller} />
    <GenreCard title={"Приключения"} iconClassName={styles.adventures} />
    <GenreCard title={"Зарубежные"} iconClassName={styles.foreign} />
    <GenreCard title={"Мелодрамы"} iconClassName={styles.melodramas} />
    <GenreCard title={"Фантастика"} iconClassName={styles.fantastic} />
    <GenreCard title={"Фэнтези"} iconClassName={styles.fantasy} />
    <GenreCard title={"Семейные"} iconClassName={styles.family} />
    <GenreCard title={"Детективы"} iconClassName={styles.detective} />
    <GenreCard title={"Ужасы"} iconClassName={styles.horror} />
    <GenreCard title={"Военные"} iconClassName={styles.military} />
    <GenreCard title={"Криминал"} iconClassName={styles.crime} />
    <GenreCard title={"Вестерны"} iconClassName={styles.western} />
    <GenreCard title={"Биорграфия"} iconClassName={styles.biography} />
    <GenreCard title={"Спорт"} iconClassName={styles.sport} />
  </Slider>
);
