import Head from "next/head";

// configs
import { APIConfig } from "../configs/apiConfig";

// queries
import { queryDesigns } from "../queries/Queries";

// home styles
import styles from "../styles/Home.module.css";

// components
import Navbar from "../components/navbar/Navbar.component";
import Footer from "../components/footer/Footer.component";
import Carousel from "../components/carousel/Carousel.component";
import DesignComponent from "../components/design-card/Design.component";

export default function Home(designs) {
  // logging our designs unto the console
  console.log(designs.designs);

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

      <Navbar />
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>My Designs and Creations</h2>
        </div>
        <div className={styles.categories}>
          <Carousel />
        </div>
        <div className={styles.grid__layout}>
          {designs &&
            designs.designs &&
            designs.designs.length > 0 &&
            designs.designs.map((design, index) => {
              return (
                <DesignComponent
                  key={design.slug + "..." + index}
                  title={design.title}
                  slug={design.slug}
                  description={design.description}
                  coverPhoto={design.coverPhoto}
                  author={design.author}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// generating static pages for our content received from GraphCMS
export async function getStaticProps() {
  let designs = [];

  try {
    const data = await APIConfig.graphcms.request(queryDesigns);
    designs = data;
  } catch (error) {
    console.log(error);
    if (error.message) {
      console.log(error.message);
    }
    // if (error.response) {
    //   console.log(error.response);
    // }
  }

  // will be received within out index.js as props
  return {
    props: {
      ...designs,
    },
    // update display content, regnerating static content after 20 seconds
    // revalidate: 20,
  };
}
