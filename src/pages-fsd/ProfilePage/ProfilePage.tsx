import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app-fsd/model/hooks/redux";
import { useRouter } from "next/router";
import { logOut } from "@/features/user/model/userSlice";
import Link from "next/link";
import styles from "./ProfilePage.module.scss";

export const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthorizedUser = useAppSelector((state) => !!state.user.token);

  const onLogout = () => {
    dispatch(logOut());
    router.push("/auth");
  };

  return (
    <div className={styles.profilePage}>
      <h2 className={styles.title}>Profile Page</h2>
      {isAuthorizedUser ? (
        <button onClick={onLogout} className={styles.button}>
          Выйти из профиля
        </button>
      ) : (
        <Link href={"/auth"} className={styles.button}>
          Авторизоваться
        </Link>
      )}
    </div>
  );
};
