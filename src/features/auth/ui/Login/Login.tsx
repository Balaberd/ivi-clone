import { FC, useState } from "react";
import { Input } from "@/shared";
import { useAppDispatch } from "@/app-fsd/model/hooks/redux";
import { useRouter } from "next/router";
import cn from "classnames";
import Link from "next/link";
import styles from "./Login.module.scss";
import { setCredentials } from "../../../user/model/userSlice";
import { useLoginMutation } from "../../model/auth.api";

interface Props {
  isActive: boolean;
}

export const Login: FC<Props> = ({ isActive }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let isSubmitButtonDisabled = false;

  const router = useRouter();

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    isSubmitButtonDisabled = true;
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...response }));
      setEmail("");
      setPassword("");
      router.push("/");
      isSubmitButtonDisabled = false;
    } catch (err) {
      const message = err?.data?.message;
      alert(message);
      isSubmitButtonDisabled = false;
    }
  };

  return (
    <div className={cn(styles.login, { [styles.login_active]: isActive })}>
      <Input
        prefix={<div className={styles.icon_user}></div>}
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="email"
        placeholder="e-mail"
      />
      <Input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="пароль"
      />
      <button
        disabled={isSubmitButtonDisabled}
        onClick={onSubmit}
        className={styles.button}
      >
        Войти
      </button>
      <Link
        target="blank"
        href={"http://localhost:4000/auth/google/login"}
        className={styles.button}
      >
        Войти через Googgle
      </Link>
    </div>
  );
};
