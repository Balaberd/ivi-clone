import { FC, ReactElement, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import cn from "classnames";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { SliderButtons } from "../SliderButtons/SliderButtons";

interface Props {
  children?: ReactElement[];
  slidesPerView?: number | "auto";
  slidesPerGroup?: number;
  breakpoints?: any;
  spaceBetween?: number;
  wrapperClass?: string;
  title?: ReactElement | string;
  disabled?: boolean;
  buttonsClassName?: string;
  slideClassName?: string;
}

export const Slider: FC<Props> = ({
  children,
  title,
  wrapperClass,
  slideClassName,
  disabled = false,
  buttonsClassName,
  ...props
}) => {
  const swiperRef = useRef<SwiperType>();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className={styles.slider}>
      <div className={styles.title}>{title}</div>
      {!disabled && (
        <SliderButtons
          swiperRef={swiperRef}
          prev={prevButtonRef}
          next={nextButtonRef}
          nextButtonClassName={buttonsClassName}
          prevButtonClassName={buttonsClassName}
        />
      )}
      <Swiper
        modules={[Navigation]}
        speed={1000}
        allowSlideNext={!disabled}
        allowSlidePrev={!disabled}
        spaceBetween={24}
        wrapperClass={cn(styles.sliderWrapper, wrapperClass)}
        {...props}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
          enabled: true,
          disabledClass: styles.unvisible,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children &&
          children.map((item, index) => (
            <SwiperSlide className={slideClassName} key={index}>
              {item}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
