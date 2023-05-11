import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./Card.module.scss";

interface Props {
  children: ReactElement;
  className?: string;
  titleClassName?: string;
  title?: ReactElement | string;
  subtitle?: ReactElement | string;
  subtitleClassName?: string;
}

export const Card: FC<Props> = ({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
}) => (
  <div className={cn(styles.card, className)}>
    {children}
    <div className={styles.titleBlock}>
      <div className={cn(styles.title, titleClassName)}>{title}</div>
      <div className={cn(styles.subtitle, subtitleClassName)}>{subtitle}</div>
    </div>
  </div>
);
