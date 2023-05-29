import { FC } from "react";
import cn from "classnames";
import { ExpandedBlock } from "@/shared";
import Image from "next/image";
import { ICountry, IGenre, TPerson } from "@/entities/movie/model/movie.types";
import styles from "./FilmDescription.module.scss";
import { RatingBlock } from "./RatingBlock/RatingBlock";
import { ActorsBlock } from "./ActorsBlock/ActorsBlock";

interface Props {
  className?: string;
  name: string;
  years: string;
  ageLimit: number;
  durations: string;
  country: ICountry;
  genre: IGenre;
  director: TPerson;
  actors: Array<TPerson>;
  rating: number;
  description: string;
  countRating: number;
}

export const FilmDescription: FC<Props> = ({
  className,
  name,
  years,
  ageLimit,
  durations,
  country,
  genre,
  director,
  actors,
  rating,
  description,
  countRating,
}) => (
  <div className={cn(styles.filmDescription, className)}>
    <h2 className={styles.title}>{name}</h2>

    <div className={styles.filmInfo}>
      <span>{`${years} ${durations} ${ageLimit}+`}</span>
      <span>
        {`${country.value}`} &#xB7; {`${genre.value}`}
      </span>
    </div>

    <ActorsBlock
      rating={rating}
      directorId={director.id}
      directorName={director.full_name}
      directorImageUrl={director.avatar}
      actors={actors}
    />

    <div className={styles.recommendationsBlock}>
      <Image
        className={styles.decorationImage}
        src={
          "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/laurelBranchLeft.svg"
        }
        width={16}
        height={40}
        alt={"decoration image"}
      />
      <span>Рекомендую посмотреть</span>
      <Image
        className={styles.decorationImage}
        src={
          "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/laurelBranchRight.svg"
        }
        width={16}
        height={40}
        alt={"decoration image"}
      />
    </div>

    <div>
      <ExpandedBlock>{description}</ExpandedBlock>
    </div>
    <RatingBlock rating={rating} ratingCount={countRating} />
  </div>
);
