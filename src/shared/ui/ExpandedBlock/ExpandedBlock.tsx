import React, { FC, ReactElement, useState } from "react";
import cn from "classnames";
import styles from "./ExpandedBlock.module.scss";

interface Props {
  title: string;
  children: ReactElement | ReactElement[];
  className?: string;
}

export const ExpandedBlock: FC<Props> = ({ title, children, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBlock = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(styles.expandedBlock, className)}
      data-testid="expandedBlock"
    >
      <h2 className={styles.title}>{title}</h2>
      <div
        className={cn(styles.content, !isExpanded && styles.hidden)}
        data-testid="content"
      >
        {children}
      </div>
      <button className={styles.button} onClick={toggleBlock}>
        {!isExpanded ? "Развернуть" : "Свернуть"}
      </button>
    </div>
  );
};
