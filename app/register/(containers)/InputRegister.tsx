"use client";

export default function InputRegister() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input placeholder="name" />
        <input placeholder="email" type="email" />
        <input placeholder="phone" type="tel" />
        <input placeholder="password" type="password" />
      </form>
    </div>
  );
}
