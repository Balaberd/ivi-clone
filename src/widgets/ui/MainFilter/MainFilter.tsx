import { FC } from "react";
import { YearsDropdown } from "@/entities/filter/ui/Dropdowns/YearsDropdown/YearsDropdown";
import { RatingDropdown } from "@/entities/filter/ui/Dropdowns/RatingDropdown/RatingDropdown";
import { FilterDropdownLayout } from "@/entities/filter/ui/Dropdowns/FilterDropdownLayout/FilterDropdownLayout";
// eslint-disable-next-line import/no-cycle
import { GenreDropdown } from "@/entities/filter/ui/Dropdowns/GenreDropdown/GenreDropdown";
import { CountryDropdown } from "@/entities/filter/ui/Dropdowns/CountryDropdown/CountryDropdown";
import styles from "./MainFilter.module.scss";

export const MainFilter: FC = () => (
  <div className={styles.mainFilter}>
    <div className={styles.firstRow}>
      <FilterDropdownLayout title="Жанры">
        <GenreDropdown />
      </FilterDropdownLayout>
      <FilterDropdownLayout title="Страны">
        <CountryDropdown />
      </FilterDropdownLayout>
      <FilterDropdownLayout title="Годы">
        <YearsDropdown />
      </FilterDropdownLayout>
      <FilterDropdownLayout title="Рейтинг">
        <RatingDropdown />
      </FilterDropdownLayout>
    </div>
  </div>
);
