import { FC } from "react";
import { Checkbox } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import { FILTER_COLLECTION, TGenreId } from "@/entities/filter/const/filteres";
import { toggleGenreFilter } from "@/entities/filter/model/filterSlice";
import { GenreFilter } from "@/features";
import styles from "./GenreDropdown.module.scss";

export const GenreDropdown: FC = () => {
  const genreList = FILTER_COLLECTION.genres;
  const filterGenres = useAppSelector((state) => state.filter.genre);

  const dispatch = useAppDispatch();

  const createGenreFilterTogglerHandler = (id: TGenreId) => () => {
    dispatch(toggleGenreFilter(id));
  };

  return (
    <div className={styles.genreDropdown}>
      <div className={styles.sliderWrapper}>
        <GenreFilter isDropdown />
      </div>
      <ul className={styles.list}>
        {Object.entries(genreList).map(([id, value]) => (
          <li className={styles.item} key={id}>
            <Checkbox
              onChange={createGenreFilterTogglerHandler(value.id)}
              checked={filterGenres.includes(value.id)}
              label={value.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
