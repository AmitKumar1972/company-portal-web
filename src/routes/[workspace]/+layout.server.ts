import { GET_ALL_WORKSPACES_QUERY, WORKSPACE_DETAIL_QUERY } from "$lib/mutations.js";
import { GraphQLClient } from "graphql-request";

export async function load({ params, cookies }) {
    const graphqlEndpoint = 'http://localhost:5001/graphql';
    let workspaceDetails;
    let allWorkspaces;
    try {
        const token = cookies.get('portal-token');

        if (token) {
            const graphQLClient = new GraphQLClient(graphqlEndpoint);
            graphQLClient.setHeader('authorization', `Bearer ${token}`);
            workspaceDetails = await graphQLClient.request(WORKSPACE_DETAIL_QUERY, { uniqueName: params.workspace });
            allWorkspaces = await graphQLClient.request(GET_ALL_WORKSPACES_QUERY);

            return {
                allWorkspaces,
                workspaceDetails
            };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}