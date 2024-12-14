import Link from "next/link";

export default function signin() {
    return (
        <div>
            <h1>Sign In Page</h1>
            {
                session ? 
                <button onClick={() => { signout() }}>Sign Out</button> : 
                <button onClick={() => { signin() }}>Sign In</button>

            }
            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/app">
                Application Page
            </Link>

        </div>
    )
}