import { FC } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";

interface Props {
  checked: boolean;
  onChange: () => void;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const Checkbox: FC<Props> = ({
  label,
  checked,
  onChange,
  className,
  disabled = false,
}) => (
  <label
    className={cn(styles.custonCheckbox, className, {
      [styles.custonCheckbox_disabled]: disabled,
      [styles.custonCheckbox_checked]: checked,
    })}
  >
    {label}
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    {!disabled && <span className={styles.icon}></span>}
  </label>
);
