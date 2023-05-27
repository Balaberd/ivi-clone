import { FC, useEffect, useState } from "react";
import cn from "classnames";
import { useAppSelector } from "@/app-fsd/model/hooks/redux";
import { useRouter } from "next/router";
import styles from "./Auth.module.scss";
import { Login, Registration } from "../../../features";

export const Auth: FC = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const router = useRouter();

  const isAuthorizedUser = useAppSelector((state) => !!state.user.token);

  useEffect(() => {
    if (isAuthorizedUser) {
      router.push("/profile");
    }
  }, [isAuthorizedUser]);

  if (isAuthorizedUser) {
    return null;
  }

  return (
    <div className={styles.auth}>
      <div className={styles.titleBlock}>
        <button
          onClick={() => setIsLoginActive(true)}
          className={cn(styles.button, {
            [styles.button_active]: isLoginActive,
          })}
        >
          Вход
        </button>
        <button
          onClick={() => setIsLoginActive(false)}
          className={cn(styles.button, {
            [styles.button_active]: !isLoginActive,
          })}
        >
          Регистрация
        </button>
      </div>
      <div className={styles.formsWrapper}>
        <Login isActive={isLoginActive} />
        <Registration
          onIsActiveToggle={() => setIsLoginActive(true)}
          isActive={!isLoginActive}
        />
      </div>
    </div>
  );
};
