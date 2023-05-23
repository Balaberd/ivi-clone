import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./HeaderDropdown.module.scss";

interface IDataItem {
  title: string;
  path: string;
}

interface Data {
  genres: IDataItem[];
  years: IDataItem[];
  country: IDataItem[];
  collection: IDataItem[];
}

interface Props {
  className: string;
  data: Data;
}

export const HeaderDropdown: FC<Props> = ({ className, data }) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.headerDropdown}>
      <div className={styles.block}>
        <div className={styles.column}>
          <h5 className={styles.title}>Жанры</h5>
          <ul className={cn(styles.list, styles.list_country)}>
            {data.genres.map(({ path, title }) => (
              <li key={path}>
                <Link href={path} className={styles.link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h5 className={styles.title}>Страны</h5>
          <ul className={styles.list}>
            {data.country.map(({ path, title }) => (
              <li key={path}>
                <Link href={path} className={styles.link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className={styles.title}>Годы</h5>
          <ul className={styles.list}>
            {data.years.map(({ path, title }) => (
              <li key={path}>
                <Link href={path} className={styles.link}>
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
