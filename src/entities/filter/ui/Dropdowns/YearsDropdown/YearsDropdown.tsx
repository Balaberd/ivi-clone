import { FC } from "react";
import { Radio } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import { toggleYearFilter } from "@/entities/filter/model/filterSlice";
import styles from "./YearsDropdown.module.scss";

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

export const YearsDropdown: FC = () => {
  const { year: activeFilterYear } = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const createChangeFilterYearHandler = (year: number | null) => () => {
    dispatch(toggleYearFilter(year));
  };

  return (
    <div className={styles.yarsDropdown}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Radio
            label="Все годы"
            onChange={createChangeFilterYearHandler(null)}
            checked={activeFilterYear === null}
          />
        </li>
        {years.map((year) => (
          <li className={styles.item} key={year}>
            <Radio
              onChange={createChangeFilterYearHandler(year)}
              checked={activeFilterYear === year}
              label={`${year} год`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
