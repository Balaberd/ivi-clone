import { FC } from "react";
import { FilterByTag, MainFilter } from "@/widgets";
import styles from "./MoviesPage.module.scss";

export const MoviesPage: FC = () => (
  <div className={styles.moviesPage}>
    Movies Page
    <FilterByTag />
    <MainFilter />
  </div>
);
