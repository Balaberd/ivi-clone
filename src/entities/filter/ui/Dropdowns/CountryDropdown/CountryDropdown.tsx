import { FC } from "react";
import { Checkbox } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import {
  FILTER_COLLECTION,
  TCountryId,
} from "@/entities/filter/const/filteres";
import { toggleCountryFilter } from "@/entities/filter/model/filterSlice";
import styles from "./CountryDropdown.module.scss";
import { TagFilter } from "../../TagFilter/TagFilter";

export const CountryDropdown: FC = () => {
  const countriesIds: Array<TCountryId> = Object.values(
    FILTER_COLLECTION.countries
  ).map((value) => value.id);

  const { country: activeFilterCountries } = useAppSelector(
    (state) => state.filter
  );

  const dispatch = useAppDispatch();
  const toggleCountryFilterHandler = (id: TCountryId) => {
    dispatch(toggleCountryFilter(id));
  };

  return (
    <div className={styles.countryDropdown}>
      <div className={styles.sliderWrapper}>
        <TagFilter
          isDropdown={true}
          activeCountries={activeFilterCountries}
          countriesList={countriesIds}
          onToggleCountry={toggleCountryFilterHandler}
        />
      </div>
      <ul className={styles.list}>
        {countriesIds.map((id) => (
          <li className={styles.item} key={id}>
            <Checkbox
              onChange={() => toggleCountryFilterHandler(id)}
              checked={activeFilterCountries.includes(id)}
              label={FILTER_COLLECTION.countries[id].title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
