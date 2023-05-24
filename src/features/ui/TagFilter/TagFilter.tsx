import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import styles from "./TagFilter.module.scss";
import { Tag } from "./Tag/Tag";
import {
  FILTER_COLLECTION,
  TCountryId,
  TGenreId,
} from "../../../entities/filter/const/filteres";
import {
  toggleCountryFilter,
  toggleGenreFilter,
  toggleYearFilter,
} from "../../../entities/filter/model/filterSlice";

interface Props {
  countriesList?: Array<TCountryId>;
  genresList?: Array<TGenreId>;
  yearsList?: Array<number>;
  isDropdown?: boolean;
}

export const TagFilter: FC<Props> = ({
  countriesList = [],
  genresList = [],
  yearsList = [],
  isDropdown = false,
}) => {
  const dispatch = useAppDispatch();

  const onToggleCountry = (id: TCountryId) => {
    dispatch(toggleCountryFilter(id));
  };

  const onToggleGenre = (id: TGenreId) => {
    dispatch(toggleGenreFilter(id));
  };

  const onToggleYear = (year: number) => {
    dispatch(toggleYearFilter(year));
  };

  const {
    genre: activeGenres,
    country: activeCountries,
    year: activeYear,
  } = useAppSelector((state) => state.filter);

  return (
    <Slider
      slidesPerGroup={3}
      spaceBetween={10}
      slidesPerView="auto"
      slideClassName={styles.slide}
      buttonsClassName={styles.sliderButtons}
      wrapperClass={styles.slider}
    >
      {yearsList
        .map((year: number) => (
          <Tag
            key={`genres${year}`}
            hasBorder={isDropdown}
            onClick={() => onToggleYear(year)}
            isActive={activeYear === year}
            text={`${year} год`}
          />
        ))
        .concat(
          genresList.map((id) => (
            <Tag
              key={`genres${id}`}
              hasBorder={isDropdown}
              onClick={() => onToggleGenre(id)}
              isActive={activeGenres.includes(id)}
              text={FILTER_COLLECTION.genres[id].title}
            />
          ))
        )
        .concat(
          countriesList.map((id) => (
            <Tag
              key={`countries${id}`}
              hasBorder={isDropdown}
              onClick={() => onToggleCountry(id)}
              isActive={activeCountries.includes(id)}
              text={FILTER_COLLECTION.countries[id].title}
            />
          ))
        )}
    </Slider>
  );
};
