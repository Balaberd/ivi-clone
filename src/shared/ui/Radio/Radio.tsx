import { FC } from "react";
import cn from "classnames";
import styles from "./Radio.module.scss";

interface Props {
  checked: boolean;
  onChange?: () => void;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const Radio: FC<Props> = ({
  label,
  checked = false,
  onChange = () => {},
  className,
  disabled = false,
}) => (
  <label
    className={cn(styles.radio, className, {
      [styles.radio_disabled]: disabled,
      [styles.radio_checked]: checked,
    })}
  >
    {label}
    <input
      className={cn(styles.checkbox)}
      type="radio"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <div className={styles.icon}></div>
  </label>
);
