import { FC } from "react";
import { Slider } from "@/shared";
import { FILTER_COLLECTION, GenreCard, TGenreId } from "@/entities";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import { toggleGenreFilter } from "@/entities/filter/model/filterSlice";
import styles from "./GenreFilter.module.scss";
import { breakpoints, dropdownBreakpoints } from "./lib/breakpoints";

interface Props {
  isDropdown?: boolean;
}

const { genres } = FILTER_COLLECTION;

export const GenreFilter: FC<Props> = ({ isDropdown = false }) => {
  const filter = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();

  const createGenreFilterTogglerHandler = (id: TGenreId) => () => {
    dispatch(toggleGenreFilter(id));
  };

  return (
    <Slider
      title={isDropdown ? "" : "Жанры"}
      breakpoints={isDropdown ? dropdownBreakpoints : breakpoints}
      spaceBetween={10}
      wrapperClass={cn({ [styles.dropdownSlider]: isDropdown })}
      buttonsClassName={cn({ [styles.dropdownButton]: isDropdown })}
    >
      {Object.values(genres).map(({ id }) => (
        <GenreCard
          onClick={createGenreFilterTogglerHandler(id)}
          isDropdown={isDropdown}
          key={id}
          genreId={id}
          isActive={filter.genre.includes(id)}
        />
      ))}
    </Slider>
  );
};
