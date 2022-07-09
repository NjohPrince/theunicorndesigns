import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          TheUnicornDesigns | My Experience, designs, roadmap and improvements.
        </title>
        <meta
          name="description"
          content="Showcase your designs, achievements to the world!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}></div>
    </div>
  );
}
