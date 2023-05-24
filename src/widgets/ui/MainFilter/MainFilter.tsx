import { FC } from "react";
import { ResetFilterButton } from "@/features/ui/ResetFilterButton/ResetFilterButton";
import styles from "./MainFilter.module.scss";
import { FilterDropdownLayout } from "./Dropdowns/FilterDropdownLayout/FilterDropdownLayout";
import { GenreDropdown } from "./Dropdowns/GenreDropdown/GenreDropdown";
import { CountryDropdown } from "./Dropdowns/CountryDropdown/CountryDropdown";
import { YearsDropdown } from "./Dropdowns/YearsDropdown/YearsDropdown";
import { RatingDropdown } from "./Dropdowns/RatingDropdown/RatingDropdown";

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
    <ResetFilterButton />
  </div>
);
