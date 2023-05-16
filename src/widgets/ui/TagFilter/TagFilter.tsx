import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import styles from "./TagFilter.module.scss";
import { Tag } from "./Tag/Tag";

export const TagFilter: FC = () => (
  <Slider
    slidesPerGroup={3}
    spaceBetween={10}
    slidesPerView="auto"
    slideClassName={styles.slide}
    buttonsClassName={styles.sliderButtons}
  >
    {new Array(20).fill(<Tag text={"2022 год"} />)}
  </Slider>
);
