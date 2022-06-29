import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    // uri: 'https://api-us-east-1.graphcms.com/v2/cl4zxagst0nr701ukch3y1eju/master',
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4zzc3370ojy01ujeoev3gq8/master',
    cache: new InMemoryCache()
}) 