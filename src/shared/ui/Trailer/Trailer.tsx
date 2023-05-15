import React, { FC } from "react";
import cn from "classnames";

interface ITrailer {
  src: string;
  classNames?: string;
}

export const Trailer: FC<ITrailer> = ({ src, classNames }) => (
  <video controls width="100%" className={cn(classNames)}>
    <source src={src} type="video/mp4" />
  </video>
);
