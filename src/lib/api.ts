/* eslint-disable @typescript-eslint/no-explicit-any */
import request, { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";
import { CREATE_WORKSPACE_MUTATION, GET_ALL_WORKSPACES_QUERY, SIGNIN_MUTATION, SIGNUP_MUTATION, VERIFY_OTP_MUTATION } from "./mutations";

const graphqlEndpoint = 'http://localhost:5001/graphql';

export async function signup(name: string, email: string, password: string, workspaceName: string, uniqueName: string) {
    try {
        const data = await request(graphqlEndpoint, SIGNUP_MUTATION, {
            name: name,
            email: email,
            password: password,
            workspaceName: workspaceName,
            uniqueName: uniqueName
        });

        return data;
    } catch (error) {
        throw new Error('Error signing up. Please try again later.');
    }
}

export async function verifyOTP(email: any, otp: any) {
    try {
        const data = await request(graphqlEndpoint, VERIFY_OTP_MUTATION, {
            otp: otp,
            email: email,
        });

        return data;
    } catch (error) {
        throw new Error('Error verifying OTP. Please try again later.');
    }
}

export async function signin(email: string, password: string) {
    try {
        const data = await request(graphqlEndpoint, SIGNIN_MUTATION, {
            email: email,
            password: password,
        });

        return data;
    } catch (error) {
        throw new Error('Error signing in. Please try again later.');
    }
}

export async function getAllWorkSpaces() {
    try {
        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        const token = Cookies.get('portal-token');
        graphQLClient.setHeader('authorization', `Bearer ${token}`);


        const data = await graphQLClient.request(GET_ALL_WORKSPACES_QUERY);
        return data;

    } catch (error) {
        throw new Error('Error getting all workspaces in. Please try again later.');
    }
}

export async function createWorkspace(workspaceName: string, uniqueName: string) {
    try {
        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        const token = Cookies.get('portal-token');
        graphQLClient.setHeader('authorization', `Bearer ${token}`);

        const data = await graphQLClient.request(CREATE_WORKSPACE_MUTATION,{
            workspaceName: workspaceName,
            uniqueName: uniqueName
        });

        return data;

    } catch (error) {
        throw new Error('Error while creating workspace. Please try again later.');
    }
}

export async function addEmployee(name: string, email: string,workSpaceId: string,role: string) {
    try {
        const graphQLClient = new GraphQLClient(graphqlEndpoint);
        const token = Cookies.get('portal-token');
        graphQLClient.setHeader('authorization', `Bearer ${token}`);

        const data = await graphQLClient.request(CREATE_WORKSPACE_MUTATION,{
            name: name,
            email:email,
            workSpaceId: workSpaceId,
            role: role
        });

        return data;

    } catch (error) {
        throw new Error('Error while creating workspace. Please try again later.');
    }
}
