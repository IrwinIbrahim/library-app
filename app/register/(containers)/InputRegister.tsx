"use client";

import { SubmitEvent, SubmitEventHandler, useState } from "react";
import { useRegister } from "../hooks";

export default function InputRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isPending, isError, mutate } = useRegister();

  const handleName = (value: string) => {
    setName(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePhone = (value: string) => {
    setPhone(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => handleName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          placeholder="Nomor Handphone"
          type="tel"
          onChange={(e) => handlePhone(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => handlePassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => handleConfirmPassword(e.target.value)}
        />
        <input disabled={isPending} type="submit" />
      </form>
    </div>
  );
}
