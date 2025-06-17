import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TodoList />
    </>
  );
}
