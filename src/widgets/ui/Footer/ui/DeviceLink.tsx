import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";

import styles from "./DeviceLink.module.scss";

interface IDeviceLink {
  link: string;
  deviceText?: string;
  deviceType: string;
  imageUrl?: string;
  classNames?: string;
  typeOfIcon?: string;
}

const DeviceLink: FC<IDeviceLink> = ({
  link,
  deviceText,
  deviceType,
  imageUrl,
  classNames,
  typeOfIcon,
}) => (
  <a href={link} className={cn(styles.devices, classNames)}>
    {imageUrl && (
      <Image src={imageUrl} alt="Иконка устройства" width={20} height={20} />
    )}
    {!imageUrl && <span className={cn(typeOfIcon)}></span>}
    <div>
      <p className={styles.deviceText}>{deviceText}</p>
      <span className={styles.deviceType}>{deviceType}</span>
    </div>
  </a>
);

export default DeviceLink;
