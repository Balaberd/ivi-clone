import { FC } from "react";
import { useRouter } from "next/router";
import styles from "./Breadcrumbs.module.scss";
import { Crumb } from "./Crumb/Crumb";

const PATH_NAME_MAP = {
  movies: "Фильмы",
};

export const Breadcrumbs: FC = () => {
  const path = useRouter()
    .asPath.split("/")
    .filter((pathName) => !!pathName);

  return (
    <div className={styles.breadcrumbs}>
      <Crumb title="Мой иви" path="/" />
      {path.map((item, index) => (
        <>
          <span>/</span>
          <Crumb
            key={item}
            title={PATH_NAME_MAP[item]}
            path={`${item}`}
            disabled={index === path.length - 1}
          />
        </>
      ))}
    </div>
  );
};
