import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { PersonCard } from "@/entities/person/PersonCard/PersonCard";
import { TPerson } from "@/entities/movie/model/movie.types";
import styles from "./PersonSlider.module.scss";
import { listBreakpoints, sliderBreakpoints } from "./helpers/breakpoints";

interface Props {
  persons: TPerson[];
  title?: string;
  isSlider?: boolean;
}

export const PersonSlider: FC<Props> = ({
  persons,
  title,
  isSlider = true,
}) => (
  <div>
    <Slider
      buttonsClassName={styles.button}
      disabled={!isSlider}
      breakpoints={isSlider ? sliderBreakpoints : listBreakpoints}
      title={title}
    >
      {persons.map(({ id, avatar, full_name: name }, index) => (
        <PersonCard
          key={id}
          id={id}
          avatar={avatar}
          title={name}
          subtitle={index === 0 ? "Режисер" : "Актер"}
        />
      ))}
    </Slider>
  </div>
);
