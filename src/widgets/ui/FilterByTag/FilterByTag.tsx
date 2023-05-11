import { FC } from "react";
import styles from "./FilterByTag.module.scss";

const element = (ee: any) => <div className={styles.test}>{ee}</div>;

// eslint-disable-next-line no-plusplus, no-undef
const arr: JSX.Element[] = [];
// eslint-disable-next-line no-plusplus
for (let i = 1; i < 32; i++) {
  arr.push(element(2000 + i));
}

export const FilterByTag: FC = () => (
  <div>12</div>
  // <Carusel
  //   slidesPerGroup={3}
  //   spaceBetween={10}
  //   slideClass={styles.testSLide}
  //   slidesPerView="auto"
  // >
  //   {arr}
  // </Carusel>
);
