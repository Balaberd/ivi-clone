import React, { FC } from "react";
import cn from "classnames";

interface IPlayer {
  src: string;
  classNames?: string;
}

export const Player: FC<IPlayer> = ({ src, classNames }) => (
  <video controls width="100%" className={cn(classNames)}>
    <source src={src} type="video/mp4" />
  </video>
);
