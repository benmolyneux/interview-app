import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Interview App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
