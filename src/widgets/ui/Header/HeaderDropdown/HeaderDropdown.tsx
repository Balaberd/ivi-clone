import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { useAppDispatch } from "@/app-fsd/model/hooks/redux";
import {
  resetFilter,
  toggleCountryFilter,
  toggleGenreFilter,
  toggleYearFilter,
} from "@/entities/filter/model/filterSlice";
import { TCountryId, TGenreId } from "@/entities";
import styles from "./HeaderDropdown.module.scss";

interface IMockItemCounty {
  title: string;
  path: string;
  id: TCountryId;
}

interface IMockItemGenre {
  title: string;
  path: string;
  id: TGenreId;
}

interface IMockItemYear {
  title: string;
  path: string;
  id: number;
}

interface IMockItemCollection {
  title: string;
  path: string;
}

interface IMock {
  genres: IMockItemGenre[];
  years: IMockItemYear[];
  country: IMockItemCounty[];
  collection: IMockItemCollection[];
}

interface Props {
  className: string;
  data: IMock;
}

export const HeaderDropdown: FC<Props> = ({ className, data }) => {
  const dispatch = useAppDispatch();

  const onToggleGenre = (id: TGenreId) => {
    dispatch(resetFilter());
    dispatch(toggleGenreFilter(id));
  };

  const onToggleCountry = (id: TCountryId) => {
    dispatch(resetFilter());
    dispatch(toggleCountryFilter(id));
  };

  const onToggleYear = (id: number) => {
    dispatch(resetFilter());
    dispatch(toggleYearFilter(id));
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.headerDropdown}>
        <div className={styles.block}>
          <div className={styles.column}>
            <h5 className={styles.title}>Жанры</h5>
            <ul className={cn(styles.list, styles.list_country)}>
              {data.genres.map(({ path, title, id }, index) => (
                <li key={path + index}>
                  <Link
                    onClick={() => onToggleGenre(id)}
                    href={path}
                    className={styles.link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h5 className={styles.title}>Страны</h5>
            <ul className={styles.list}>
              {data.country.map(({ path, title, id }, index) => (
                <li key={path + index}>
                  <Link
                    onClick={() => onToggleCountry(id)}
                    href={path}
                    className={styles.link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className={styles.title}>Годы</h5>
            <ul className={styles.list}>
              {data.years.map(({ path, title, id }, index) => (
                <li key={path + index}>
                  <Link
                    onClick={() => onToggleYear(id)}
                    href={path}
                    className={styles.link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.collection}>
            {data.collection.map(({ path, title }) => (
              <Link key={title} href={path} className={styles.link}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.promo}></div>
        </div>
      </div>
    </div>
  );
};
