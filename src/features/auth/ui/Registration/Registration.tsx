import React, { FC, useState } from "react";
import { Input } from "@/shared";
import cn from "classnames";

import styles from "./Registration.module.scss";
import { useRegistrationMutation } from "../../model/auth.api";

interface Props {
  isActive: boolean;
  onIsActiveToggle: () => void;
}

export const Registration: FC<Props> = ({ isActive, onIsActiveToggle }) => {
  const [email, setEmail] = useState<string>("test-01@mail.ru");
  const [password, setPassword] = useState<string>("12345678");
  const [firstName, setFirstName] = useState<string>("Name");
  const [lastName, setLastName] = useState<string>("LastName");
  const [age, setAge] = useState<number | undefined>(18);
  const [phoneNumber, setPhoneNumber] = useState<string>("89871475100");

  let isSubmitButtonDisabled = false;

  const [registration] = useRegistrationMutation();

  console.log(onIsActiveToggle);

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    isSubmitButtonDisabled = true;
    try {
      await registration({
        email,
        password,
        firstName,
        lastName,
        age,
        phoneNumber: `${phoneNumber}`,
      }).unwrap();
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setAge(undefined);
      setPhoneNumber("");
      isSubmitButtonDisabled = false;
      onIsActiveToggle();
    } catch (err) {
      const message = err?.data?.message;
      alert(message);
      isSubmitButtonDisabled = false;
    }
  };

  return (
    <div
      className={cn(styles.registration, {
        [styles.registration_active]: isActive,
      })}
    >
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
      <Input
        value={firstName}
        onChange={({ target: { value } }) => setFirstName(value)}
        type="text"
        placeholder="имя"
      />
      <Input
        value={lastName}
        onChange={({ target: { value } }) => setLastName(value)}
        type="text"
        placeholder="фамилия"
      />
      <Input
        value={`${age}`}
        onChange={({ target: { value } }) => setAge(+value)}
        type="number"
        placeholder="возраст"
      />
      <Input
        value={phoneNumber}
        onChange={({ target: { value } }) => setPhoneNumber(value)}
        type="number"
        placeholder="телефон"
      />
      <button
        disabled={isSubmitButtonDisabled}
        onClick={onSubmit}
        className={styles.button}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};
