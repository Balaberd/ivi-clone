import { FC } from "react";

import styles from "./Player.module.scss";

export const Player: FC = () => (
  <div className={styles.player}>
    <iframe
      className={styles.frame}
      src="https://vk.com/video_ext.php?oid=-22781583&id=456253346&hash=1fcb1526e8235752"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  </div>
);
