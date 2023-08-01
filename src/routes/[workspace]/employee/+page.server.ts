import { GET_ALL_USERS } from "$lib/mutations.js";
import { GraphQLClient } from "graphql-request";

const graphqlEndpoint = 'http://localhost:5001/graphql';

export async function load({ params, cookies }) {
    const uniqueName = params.workspace;
    try {
        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        const token = cookies.get('portal-token');
        graphQLClient.setHeader('authorization', `Bearer ${token}`);

        const data = await graphQLClient.request(GET_ALL_USERS, {uniqueName: uniqueName});

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}