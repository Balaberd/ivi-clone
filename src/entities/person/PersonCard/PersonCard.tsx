import { FC, ReactElement } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./PersonCard.module.scss";

interface Props {
  className: string;
  imageUrl: string;

  id: number;
  name: string;
}

export const PersonCard: FC<Props> = ({ className }) => (
  <Link href={"{/person/id}"}>
    <Card>
      <Image />
    </Card>
  </Link>
);
