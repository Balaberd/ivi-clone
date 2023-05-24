import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import cn from "classnames";
import { resetFilter } from "@/entities/filter/model/filterSlice";
import styles from "./ResetFilterButton.module.scss";

export const ResetFilterButton: FC = () => {
  const { genre, country, year, rating } = useAppSelector(
    (state) => state.filter
  );

  const isFilterActive =
    !!genre.length || !!country.length || !!year || !!rating;

  const dispatch = useAppDispatch();

  const onResetFilteres = () => {
    dispatch(resetFilter());
  };

  return (
    <button
      onClick={onResetFilteres}
      className={cn(styles.resetFilterButton, {
        [styles.resetFilterButton_active]: isFilterActive,
      })}
    >
      <div className={styles.icon}></div>
      <span>Сбросить фильтры</span>
    </button>
  );
};
