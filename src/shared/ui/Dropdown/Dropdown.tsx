import React, { FC, ReactElement, useRef, useState, cloneElement } from "react";
import mixHandlers from "./helpers/mixHandlers";
import { useClickOutside } from "./helpers/useClickOutside";

interface Props {
  trigger: ReactElement;
  children: ReactElement;
  dropdownWrapperClassName?: string;
}

export const Dropdown: FC<Props> = ({
  trigger,
  children,
  dropdownWrapperClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const triggerElement = cloneElement(trigger, {
    onClick: mixHandlers(toggleDropdown, trigger.props.onClick),
  });

  return (
    <div ref={dropdownRef}>
      {triggerElement}
      {isOpen && <div className={dropdownWrapperClassName}>{children}</div>}
    </div>
  );
};
