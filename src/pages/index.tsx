import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview App</title>
        <meta
          name="description"
          content="Interview application built with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to your <code className={styles.code}>Interview App</code>
          </p>
        </div>

        <div className={styles.center}>
          <h1 className={styles.title}>Interview App</h1>
          <p className={styles.description}>
            Built with Next.js 14, TypeScript, and Jest
          </p>
        </div>
      </main>
    </>
  );
}
