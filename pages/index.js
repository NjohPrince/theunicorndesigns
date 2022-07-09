import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";

// instantiating our GraphQLClient
const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL);

// create a query
const queryDesigns = gql`
  {
    designs {
      id,
      title,
      slug,
      description {
        html
      },
      author {
        name,
        avatar {
          url
        }
      },
      coverPhoto {
        url
      }
    }
  }
`;

// home styles
import styles from "../styles/Home.module.css";

export default function Home(designs) {
  // logging our designs unto the console
  console.log(designs);

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

      <div className={styles.main}>
        {designs &&
          designs.length > 0 &&
          designs.map((design, index) => {
            return (
              <div>
                <h2>{design.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// generating static pages for our content received from GraphCMS
export async function getStaticProps() {
  const { designs } = await graphcms.request(queryDesigns);
  return {
    props: {
      designs,
    },
    // update display content, regnerating static content after 20 seconds
    revalidate: 20,
  };
}
