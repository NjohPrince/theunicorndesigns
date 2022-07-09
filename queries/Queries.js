import { gql } from "graphql-request";

export const queryDesigns = gql`
  {
    designs {
      id
      title
      slug
      datePublished
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

export const queryCategories = gql`
  {
    categories {
      label
    }
  }
`;
