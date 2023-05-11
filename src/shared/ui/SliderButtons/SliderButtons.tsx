import { FC, LegacyRef, MutableRefObject } from "react";
import cn from "classnames";
import { Swiper } from "swiper";
import styles from "./SliderButtons.module.scss";

interface Props {
  prev: LegacyRef<HTMLButtonElement> | undefined;
  next: LegacyRef<HTMLButtonElement> | undefined;
  swiperRef: MutableRefObject<Swiper | undefined>;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
}

export const SliderButtons: FC<Props> = ({
  prev,
  next,
  swiperRef,
  prevButtonClassName,
  nextButtonClassName,
}) => (
  <>
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      ref={prev}
      className={cn(styles.button, styles.button_prev, prevButtonClassName)}
    ></button>
    <button
      onClick={() => swiperRef.current?.slideNext()}
      ref={next}
      className={cn(styles.button, styles.button_next, nextButtonClassName)}
    ></button>
  </>
);
