import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";

interface ISocialLink {
  link: string;
  imageUrl: string;
  classNames: string;
}

const SocialLink: FC<ISocialLink> = ({ link, imageUrl, classNames }) => (
  <a href={link} className={cn(classNames)}>
    <Image
      src={imageUrl}
      alt={"Иконка социальной сети"}
      width={16}
      height={16}
    />
  </a>
);

export default SocialLink;
