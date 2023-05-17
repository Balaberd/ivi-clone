import React, { FC } from "react";
import { Player } from "@/shared";
import cn from "classnames";
import styles from "./MoviePage.module.scss";
import { Rating } from "./ui/Rating/Rating";
import { Medallion } from "./ui/Medallion/Medallion";

interface IMoviePage {
  trailerUrl?: string;
  title: string;
  year: string | number;
  length: number;
  ageRating: string | number;
  country: string;
  genres: string[];
  rating: number;
  actors: object[];
  description?: string;
  reviews?: object[];
}

function lengthConverter(length: number) {
  if (length < 60) return `${length} мин.`;

  let minutes = length;
  let hours = 0;

  while (minutes > 60) {
    minutes -= 60;
    hours += 1;
  }

  return `${hours} ч. ${minutes} мин.`;
}

export const MoviePage: FC<IMoviePage> = ({
  trailerUrl,
  title,
  year,
  length,
  ageRating,
  country,
  genres,
  rating,
  actors,
  description,
  reviews,
}) => (
  <>
    <div className={styles.container}>
      <span className={styles.breadCrumbs}>тут будет path crumbles</span>
      <div>
        <div className={styles.movie}>
          {trailerUrl && <Player src={trailerUrl} classNames={styles.player} />}
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.details}>
              <span>{year}</span>
              <span> {lengthConverter(length)}</span>
              <span> {ageRating}+</span>
            </div>

            <div className={cn(styles.details)}>
              <span>{country}</span>
              <span>
                {genres.map((data: string, index: number) => (
                  <span className={styles.dots} key={index}>
                    {data}
                  </span>
                ))}
              </span>
            </div>

            <div className={styles.actorsBlock}>
              <Rating rating={rating} />
              {actors.map((actor: any, index: number) => (
                <Medallion
                  photoUrl={actor.photoUrl}
                  name={actor.name}
                  key={index}
                />
              ))}
            </div>

            <div className={styles.details}>{description}</div>
          </div>
        </div>

        <div>С фильмом смотрят</div>

        <div>Актеры и создатели - список персон в кружках</div>
        <div>Трейлеры и доп. материалы</div>
        <div>{reviews && "Отзывы. Тут сделать компонент."}</div>
      </div>
    </div>
  </>
);
