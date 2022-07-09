import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";

// instantiating our GraphQLClient
const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

// create a query
const queryDesigns = gql`
  {
    designs {
      id
      title
      slug
      description {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

// home styles
import styles from "../styles/Home.module.css";

// design component
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

      <div className={styles.main}>
        {designs.designs &&
          designs.designs.length > 0 &&
          designs.designs.map((design, index) => {
            return (
              <DesignComponent
                key={design.slug + "..." + index}
                title={design.title}
              />
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
    // revalidate: 20,
  };
}
