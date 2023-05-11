import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import styles from "./PersonSlider.module.scss";

const MOCK = {
  id: 123,
  imageUrl:
    "https://thumbs.dfs.ivi.ru/storage33/contents/f/b/722ce30ba1a228f9d1aa5650db3aea.jpg/153x183/?q=85",
  firstName: "Скарлетт",
  secondName: "Йоханссон",
};

export const PersonSlider: FC = () => <Slider title="Персоны"></Slider>;
