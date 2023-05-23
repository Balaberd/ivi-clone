import React, { FC, ReactElement, useRef, useState, cloneElement } from "react";
import cn from "classnames";
import mixHandlers from "./helpers/mixHandlers";
import { useClickOutside } from "./helpers/useClickOutside";
import styles from "./Dropdown.module.scss";

interface Props {
  trigger: ReactElement;
  children: ReactElement;
  dropdownWrapperClassName?: string;
  isActive?: boolean;
  triggerClassName?: string;
  triggerActiveClassName?: string;
}

export const Dropdown: FC<Props> = ({
  trigger,
  children,
  dropdownWrapperClassName,
  isActive = false,
  triggerClassName = "",
  triggerActiveClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const triggerElement = cloneElement(trigger, {
    onClick: mixHandlers(toggleDropdown, trigger.props.onClick),
    className: cn(triggerClassName, {
      [triggerActiveClassName]: isOpen,
    }),
  });

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      {triggerElement}
      {isOpen && <div className={dropdownWrapperClassName}>{children}</div>}
    </div>
  );
};
