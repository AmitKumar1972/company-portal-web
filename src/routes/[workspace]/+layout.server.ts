import { GET_ALL_WORKSPACES_QUERY, GET_USER_WORKSPACE_ROLE, WORKSPACE_DETAIL_QUERY } from "$lib/mutations.js";
import { GraphQLClient } from "graphql-request";

export async function load({ params, cookies }) {
    const graphqlEndpoint = 'http://localhost:5001/graphql';
    let workspaceDetails;
    let allWorkspaces;
    let currentUserRole;

    try {
        const token = cookies.get('portal-token');

        if (token) {
            const graphQLClient = new GraphQLClient(graphqlEndpoint);
            graphQLClient.setHeader('authorization', `Bearer ${token}`);
            workspaceDetails = await graphQLClient.request(WORKSPACE_DETAIL_QUERY, { uniqueName: params.workspace });
            allWorkspaces = await graphQLClient.request(GET_ALL_WORKSPACES_QUERY);
            currentUserRole = await graphQLClient.request(GET_USER_WORKSPACE_ROLE, { uniqueName: params.workspace });

            return {
                allWorkspaces,
                workspaceDetails,
                currentUserRole
            };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}