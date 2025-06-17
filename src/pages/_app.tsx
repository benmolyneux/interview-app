import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
