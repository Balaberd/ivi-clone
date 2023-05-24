import { FC } from "react";
import { Radio } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import { toggleRatingFilter } from "@/entities/filter/model/filterSlice";
import styles from "./RatingDropdown.module.scss";

const ratings = [9, 8, 7, 6];

export const RatingDropdown: FC = () => {
  const { rating: activeRatingFilter } = useAppSelector(
    (state) => state.filter
  );

  const dispatch = useAppDispatch();
  const createChangeFilterRatingHandler = (year: number | null) => () => {
    dispatch(toggleRatingFilter(year));
  };

  return (
    <div className={styles.ratingDropdown}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Radio
            label="Любой рейтинг"
            onChange={createChangeFilterRatingHandler(null)}
            checked={activeRatingFilter === null}
          />
        </li>
        {ratings.map((rating) => (
          <li className={styles.item} key={rating}>
            <Radio
              onChange={createChangeFilterRatingHandler(rating)}
              checked={activeRatingFilter === rating}
              label={`Больше ${rating}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
