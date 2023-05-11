import { FC, ReactElement, useState } from "react";
import cn from "classnames";

import Image from "next/image";
import styles from "./Poster.module.scss";

interface Props {
  imageUrl: string;
  classNames?: string;
  children?: ReactElement;
  title: string;
}

export const Poster: FC<Props> = ({
  classNames,
  imageUrl,
  children,
  title,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <div className={cn(styles.poster, classNames)} data-testid="custom-element">
      {!isImageLoaded && (
        <div className={cn(styles.image, styles.image_isLoading)}></div>
      )}
      <Image
        className={styles.image}
        src={imageUrl}
        alt={`постер к фильму/актеру ${title}`}
        fill
        onLoad={() => setIsImageLoaded(true)}
      />
      {children}
    </div>
  );
};
