import { FC } from "react";
import cn from "classnames";
import styles from "./GenreCard.module.scss";
import { FILTER_COLLECTION, TGenreId } from "../../const/filteres";

type IGenreStylesMap = {
  // eslint-disable-next-line no-unused-vars
  [key in TGenreId]: string;
};

const GENRE_STYLES_MAP: IGenreStylesMap = {
  1: styles.drama,
  2: styles.crime,
  3: styles.mult,
  4: styles.fantastic,
  5: styles.action,
  6: styles.comedy,
  7: styles.fantasy,
  8: styles.detective,
  9: styles.triller,
  10: styles.biography,
  11: styles.melodramas,
  12: styles.western,
  13: styles.music,
  14: styles.history,
  15: styles.adventures,
  16: styles.mult,
  17: styles.horror,
  18: styles.music,
  19: styles.military,
  20: styles.sport,
  21: styles.family,
};

interface Props {
  genreId: TGenreId;
  isDropdown?: boolean;
  isActive: boolean;
  onClick: () => void;
}

const { genres } = FILTER_COLLECTION;

export const GenreCard: FC<Props> = ({
  genreId,
  isDropdown = false,
  isActive = false,
  onClick,
}) => (
  <button
    className={cn(styles.genreCard, {
      [styles.genreCard_dropdown]: isDropdown,
      [styles.genreCard_active]: isActive,
    })}
    onClick={onClick}
  >
    <div
      className={cn(styles.imageWrapper, GENRE_STYLES_MAP[genreId], {
        [styles.imageWrapper_dropdown]: isDropdown,
      })}
    ></div>
    <span className={cn(styles.title, { [styles.title_dropdown]: isDropdown })}>
      {genres[genreId].title}
    </span>
  </button>
);
