import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

// configs
import { APIConfig } from "../configs/apiConfig";

// queries
import { queryDesigns, queryCategories } from "../queries/Queries";

// home styles
import styles from "../styles/Home.module.css";

// components
import Navbar from "../components/navbar/Navbar.component";
import Footer from "../components/footer/Footer.component";
import Carousel from "../components/carousel/Carousel.component";
import DesignComponent from "../components/design-card/Design.component";

// filters
import { runSearch, filterByCategory } from "../filters/Filters";

export default function Home(designs) {
  const [categories, setCategories] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await APIConfig.graphcms.request(queryCategories);
      console.log(data.categories);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
      if (error.message) {
        console.log(error.message);
      }
      // if (error.response) {
      //   console.log(error.response);
      // }
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      setSearchResults(runSearch(designs?.designs, search));
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const filterByCategoryFunc = (e) => {
    // console.log("BTN_ID: ", e.target.id);

    const data = filterByCategory(categories, e.target.id);
    // console.log(data);
    setSearchResults(data);
  };

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
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toString())}
            name="search"
            type="search"
            placeholder="Search designs by title..."
          />
        </div>
        <div className={styles.categories}>
          <Carousel categories={categories} filter={filterByCategoryFunc} />
        </div>
        {searchResults.length > 0 ? (
          <div className={styles.grid__layout}>
            {searchResults &&
              searchResults &&
              searchResults.length > 0 &&
              searchResults.map((design, index) => {
                return (
                  <DesignComponent
                    key={design.slug + "..." + index}
                    title={design.title}
                    slug={design.slug}
                    description={design.description}
                    coverPhoto={design.coverPhoto}
                    author={design.author}
                    datePublished={design.datePublished}
                  />
                );
              })}
          </div>
        ) : (
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
                    datePublished={design.datePublished}
                  />
                );
              })}
          </div>
        )}
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
    revalidate: 30,
  };
}
