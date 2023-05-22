import React, { FC } from "react";
import { ExpandedBlock, Player } from "@/shared";
import cn from "classnames";
import { MovieSlider, PersonSlider } from "@/widgets";
import Image from "next/image";
import styles from "./MoviePage.module.scss";
import { Rating } from "./ui/Rating/Rating";
import { Actor } from "./ui/Actor/Actor";
import Review from "./ui/Review/Review";

interface IMoviePage {
  trailerUrl?: string;
  posterUrl: string;
  title: string;
  year: string | number;
  length: number;
  ageRating: string | number;
  country: string;
  genres: string;
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
  posterUrl,
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
                <span className={styles.dots}>{genres}</span>
              </span>
            </div>

            <div className={styles.actorsBlock}>
              <Rating rating={rating} />
              {actors.map((actor: any, index: number) => (
                <Actor
                  photoUrl={actor.photoUrl}
                  name={actor.name}
                  key={index}
                />
              ))}
            </div>

            <div className={styles.details}>
              <ExpandedBlock>{description}</ExpandedBlock>
            </div>
          </div>
        </div>

        <div className={styles.movieSlider}>
          <MovieSlider
            sliderTitle={`С фильмом «${title}» смотрят`}
            params={{ genre: `${genres}` }}
          />
        </div>

        <div className={styles.personSlider}>
          <PersonSlider />
        </div>

        <div className={styles.reviewBlock}>
          {reviews?.map((review, index: number) => (
            <Review
              name={review.name}
              body={review.body}
              date={review.date}
              likesNum={review.likesAmount}
              key={index}
            />
          ))}
        </div>

        <div className={styles.watchOnEveryDevice}>
          <div className={styles.watchDeviceInfo}>
            <h4>Cмотреть «{title}» на всех устройствах</h4>
            <p>
              Приложение доступно для скачивания на iOS, Android, SmartTV и
              приставках
            </p>
            <a href="https://www.ivi.ru/devices">Подключить устройства</a>
          </div>
          <Image
            src={posterUrl}
            alt="Постер фильма"
            width={700}
            height={400}
            className={styles.poster}
          />
        </div>
      </div>
    </div>
  </>
);
