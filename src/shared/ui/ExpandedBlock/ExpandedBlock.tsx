import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./ExpandedBlock.module.scss";

interface ExpandedBlockProps {
  title: string;
  content: string;
}

export const ExpandedBlock: FC<ExpandedBlockProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBlock = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.expandedBlock} data-testid="expandedBlock">
      <h2 className={styles.title}>{title}</h2>
      <div
        className={cn(styles.content, !isExpanded && styles.hidden)}
        data-testid="content"
      >
        {content.split("\n").map((paragraph, i) => (
          <p key={i} className={styles.paragraph} data-testid="paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <button className={styles.button} onClick={toggleBlock}>
        {!isExpanded ? "Развернуть" : "Свернуть"}
      </button>
    </div>
  );
};
