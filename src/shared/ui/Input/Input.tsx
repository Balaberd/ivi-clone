import React, { FC, ReactElement, useRef } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

interface Props {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "login" | "password" | "number";
  prefix?: ReactElement;
  postfix?: ReactElement;
  placeholder?: string;
  className?: string;
}

export const Input: FC<Props> = ({
  value,
  onChange,
  type,
  prefix,
  postfix,
  placeholder,
  className,
}) => {
  const inputRef = useRef(null);
  const onFocusInput = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={styles.customInput} onClick={onFocusInput}>
      <div>{prefix}</div>

      <div className={cn(styles.inputWrapper, className)}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChange}
          className={cn(styles.input, { [styles.input_active]: !!value })}
          type={type}
        />
        <div className={styles.placeholder}>{placeholder}</div>
      </div>

      <div>{postfix}</div>
    </div>
  );
};
