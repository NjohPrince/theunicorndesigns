import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheUnicornDesigns</title>
        <meta
          name="description"
          content="Showcase your designs, achievements to the world!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
