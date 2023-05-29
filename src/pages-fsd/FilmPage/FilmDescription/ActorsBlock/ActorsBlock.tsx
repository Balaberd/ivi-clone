import { FC } from "react";
import { Medalion, RatingIcon } from "@/shared";
import Image from "next/image";
import Link from "next/link";
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
  directorId: number;
  directorName: string;
  directorImageUrl: string;
  actors: Array<IActorItem>;
}

export const ActorsBlock: FC<Props> = ({
  rating,
  directorName,
  directorImageUrl,
  actors,
  directorId,
}) => (
  <div className={styles.actorsBlock}>
    <Medalion
      content={<RatingIcon className={styles.ratingIcon} rating={rating} />}
      title="Рейтинг Иви"
    />
    <Link href={`/person/${directorId}`}>
      <Medalion
        content={<Image fill src={directorImageUrl} />}
        title={directorName}
      />
    </Link>

    {actors.map((actor, index) => {
      if (index >= 3) {
        return null;
      }
      return (
        <Link href={`/person/${actor.id}`} key={actor.id}>
          <Medalion
            content={<Image fill src={actor.avatar} />}
            title={actor.full_name}
          />
        </Link>
      );
    })}
  </div>
);
