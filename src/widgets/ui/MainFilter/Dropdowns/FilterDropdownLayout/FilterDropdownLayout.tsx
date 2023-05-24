import { FC, ReactElement } from "react";
import { Dropdown } from "@/shared";
import styles from "./FilterDropdownLayout.module.scss";

interface Props {
  children: ReactElement;
  title: string;
}

export const FilterDropdownLayout: FC<Props> = ({ children, title }) => {
  const triggerElement = (
    <button>
      <span>{title}</span>
      <div className={styles.icon}></div>
    </button>
  );

  return (
    <Dropdown
      trigger={triggerElement}
      dropdownWrapperClassName={styles.wrapper}
      triggerClassName={styles.trigger}
      triggerActiveClassName={styles.trigger_active}
    >
      {children}
    </Dropdown>
  );
};
