import { FC } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

interface Props {
  text: string;
  hasBorder?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

export const Tag: FC<Props> = ({
  text,
  onClick,
  hasBorder = false,
  isActive = false,
}) => (
  <button
    onClick={onClick}
    className={cn(styles.tag, {
      [styles.tag_hasBorder]: hasBorder,
      [styles.tag_active]: isActive,
    })}
  >
    {text}
  </button>
);
