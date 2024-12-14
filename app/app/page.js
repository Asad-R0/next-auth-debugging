import Link from "next/link";

export default function app() {
    return (
        <div>
            <h1>Application page</h1>
            <h3>Hello, {session.user.name}</h3>
            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/signin">
                Sign In Page
            </Link>
        </div>
    )
}