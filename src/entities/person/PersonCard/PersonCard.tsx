import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./PersonCard.module.scss";
import howMuchMovies from "./helpers/howMuchMovies";

interface Props {
  avatar: string;
  id: number;
  title: string;
  subtitle: string | number;
}

export const PersonCard: FC<Props> = ({ avatar, title, subtitle }) => {
  const isListElement = typeof subtitle === "number";
  const subtitleValue = isListElement ? howMuchMovies(subtitle) : `${subtitle}`;
  return (
    <Link href={"{/person/id}"} className={styles.personCard}>
      <Card
        title={title}
        subtitle={subtitleValue}
        titleClassName={cn(styles.title, {
          [styles.title_listStyle]: !isListElement,
        })}
      >
        <div className={styles.posterWrapper}>
          <Poster classNames={styles.poster} imageUrl={avatar} title={title} />
          {isListElement && <div className={styles.label}>{subtitle}</div>}
        </div>
      </Card>
    </Link>
  );
};
