import { GET_ALL_WORKSPACES_QUERY, WORKSPACE_DETAIL_QUERY } from "$lib/mutations.js";
import { GraphQLClient } from "graphql-request";

export async function load({ params,cookies }) {
    const graphqlEndpoint = 'http://localhost:5001/graphql';
    try {
        const token = cookies.get('portal-token');

        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        graphQLClient.setHeader('authorization', `Bearer ${token}`);
        const workspaceDetails = await graphQLClient.request(WORKSPACE_DETAIL_QUERY,{uniqueName: params.workspace});
        const allWorkspaces = await graphQLClient.request(GET_ALL_WORKSPACES_QUERY);

        return {
            allWorkspaces,
            workspaceDetails
        };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}