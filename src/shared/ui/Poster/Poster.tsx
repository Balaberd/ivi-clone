import { FC, ReactElement, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Poster.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  children?: ReactElement;
  classNames?: string;
}

export const Poster: FC<Props> = ({
  imageUrl,
  title,
  children,
  classNames,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const isValidAndLoaded = isImageLoaded && !!imageUrl.trim();
  const validUrl = imageUrl.startsWith("https")
    ? imageUrl
    : `https://${imageUrl}`;

  return (
    <div className={cn(styles.poster, classNames)} data-testid="custom-element">
      <Image
        className={cn(styles.image, {
          [styles.unvisible]: !isValidAndLoaded,
        })}
        src={validUrl}
        alt={`постер фильма/актера ${title}`}
        fill
        onLoadingComplete={() => setIsImageLoaded(true)}
      />
      <div
        className={cn(styles.image, styles.image_isLoading, {
          [styles.unvisible]: isValidAndLoaded,
        })}
      ></div>
      {children}
    </div>
  );
};
