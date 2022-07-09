import { gql } from "graphql-request";

export const queryDesigns = gql`
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
