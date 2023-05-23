import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import styles from "./TagFilter.module.scss";
import { Tag } from "./Tag/Tag";
import { FILTER_COLLECTION, TCountryId, TGenreId } from "../../const/filteres";

interface Props {
  activeCountries?: Array<TCountryId>;
  countriesList?: Array<TCountryId>;
  activeGenres?: Array<TGenreId>;
  genresList?: Array<TGenreId>;
  years?: Array<number>;
  isDropdown?: boolean;
  // eslint-disable-next-line no-unused-vars
  onToggleGenre?: (id: TGenreId) => void;
  // eslint-disable-next-line no-unused-vars
  onToggleCountry?: (id: TCountryId) => void;
}

export const TagFilter: FC<Props> = ({
  activeCountries = [],
  activeGenres = [],
  countriesList = [],
  genresList = [],
  isDropdown = false,
  onToggleGenre = () => {},
  onToggleCountry = () => {},
}) => (
  <Slider
    slidesPerGroup={3}
    spaceBetween={10}
    slidesPerView="auto"
    slideClassName={styles.slide}
    buttonsClassName={styles.sliderButtons}
    wrapperClass={styles.slider}
  >
    {countriesList
      .map((id) => (
        <Tag
          key={`countries${id}`}
          hasBorder={isDropdown}
          onClick={() => onToggleCountry(id)}
          isActive={activeCountries.includes(id)}
          text={FILTER_COLLECTION.countries[id].title}
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
      )}
  </Slider>
);
