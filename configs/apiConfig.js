import { GraphQLClient } from "graphql-request";

// instantiating our GraphQLClient
export const APIConfig = {
  graphcms: new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL),
};
