import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link href="/signin">
            Sign In Page
        </Link>
        <br />
        <Link href="/app">
            Application
        </Link>
    </div>
  );
}
