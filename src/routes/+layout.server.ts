import { GET_ALL_WORKSPACES_QUERY } from "$lib/mutations.js";
import { GraphQLClient } from "graphql-request";

export async function load({ cookies }) {
    const graphqlEndpoint = 'http://localhost:5001/graphql';
    try {
        const token = cookies.get('portal-token');

        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        graphQLClient.setHeader('authorization', `Bearer ${token}`);
        const data = await graphQLClient.request(GET_ALL_WORKSPACES_QUERY);

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}