import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import styles from "./FilterByTag.module.scss";
import { FilterTag } from "./FilterTag/FilterTag";

export const FilterByTag: FC = () => (
  <Slider
    slidesPerGroup={3}
    spaceBetween={10}
    slidesPerView="auto"
    slideClassName={styles.slide}
    buttonsClassName={styles.sliderButtons}
  >
    {new Array(20).fill(<FilterTag text={"2022 год"} />)}
  </Slider>
);
