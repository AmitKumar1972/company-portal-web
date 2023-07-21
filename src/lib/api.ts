/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "graphql-request";
import { SIGNUP_MUTATION, VERIFY_OTP_MUTATION } from "./mutations";

const graphqlEndpoint = 'http://localhost:5001/graphql';

// Function to handle the signup mutation
/**
 * @param {any} name
 * @param {any} email
 * @param {any} password
 * @param {any} workspaceName
 * @param {any} uniqueName
 */
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

// Function to handle the OTP verification mutation
/**
 * @param {any} otp
 * @param {any} email
 */
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
