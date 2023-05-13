import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { PersonCard } from "@/entities/person/PersonCard/PersonCard";
import styles from "./PersonSlider.module.scss";

const MOCK = {
  id: 123,
  imageUrl:
    "https://thumbs.dfs.ivi.ru/storage33/contents/f/b/722ce30ba1a228f9d1aa5650db3aea.jpg/153x183/?q=85",
  title: "Скарлadsaетт Йоханsadссон",
  subtitle: "Assd",
};

const SliderBreakpoints = {
  1280: { slidesPerView: 7, slidesPerGroup: 6 },
  1096: { slidesPerView: 6, slidesPerGroup: 5 },
  930: { slidesPerView: 5, slidesPerGroup: 4 },
  745: { slidesPerView: 4, slidesPerGroup: 3 },
  0: { slidesPerView: 3, slidesPerGroup: 2 },
};

const listBreakpoints = {
  1260: { slidesPerView: 11 },
  1160: { slidesPerView: 10 },
  1060: { slidesPerView: 9 },
  950: { slidesPerView: 8 },
  840: { slidesPerView: 7 },
  725: { slidesPerView: 6 },
  615: { slidesPerView: 5 },
  415: { slidesPerView: 4 },
  0: { slidesPerView: 3 },
};

const arr = new Array(13).fill(MOCK);

interface Props {
  isSlider?: boolean;
}

export const PersonSlider: FC<Props> = ({ isSlider = true }) => (
  <div>
    <Slider
      buttonsClassName={styles.button}
      disabled={!isSlider}
      breakpoints={isSlider ? SliderBreakpoints : listBreakpoints}
      title={isSlider ? "Персоны" : "Актёры и создатели"}
    >
      {arr.map((el) => (
        <PersonCard key={el.id} {...el} />
      ))}
    </Slider>
  </div>
);
