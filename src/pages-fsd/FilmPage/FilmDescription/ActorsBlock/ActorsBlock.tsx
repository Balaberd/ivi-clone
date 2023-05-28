import { FC } from "react";
import { Medalion, RatingIcon } from "@/shared";
import Image from "next/image";
import styles from "./ActorsBlock.module.scss";

interface IActorItem {
  id: number;
  avatar: string;
  full_name: string;
  full_name_EN: string;
  description: string;
  description_EN: string;
  DOB: string;
}

interface Props {
  rating: number;
  directorName: string;
  directorImageUrl: string;
  actors: Array<IActorItem>;
}

export const ActorsBlock: FC<Props> = ({
  rating,
  directorName,
  directorImageUrl,
  actors,
}) => (
  <div className={styles.actorsBlock}>
    <Medalion
      content={<RatingIcon className={styles.ratingIcon} rating={rating} />}
      title="Рейтинг Иви"
    />
    <Medalion
      content={<Image fill src={directorImageUrl} />}
      title={directorName}
    />
    {actors.map((actor, index) => {
      if (index >= 3) {
        return null;
      }
      return (
        <Medalion
          key={actor.id}
          content={<Image fill src={actor.avatar} />}
          title={actor.full_name}
        />
      );
    })}
  </div>
);
