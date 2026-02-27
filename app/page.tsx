import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/register"}>register</Link>
      <Link href={"/login"}>login</Link>
    </div>
  );
}
