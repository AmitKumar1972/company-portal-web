export const SIGNUP_MUTATION = `
mutation Signup($name: String!, $email: String!, $password: String!, $workspaceName: String!, $uniqueName: String!) {
    signup(name: $name, email: $email, password: $password, workspaceName: $workspaceName,uniqueName: $uniqueName) {
        message
    }
}
`;

export const SIGNIN_MUTATION = `
mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
        success
        token
        expiresIn
        user {
            id
            name
            email
        }
    }
}
`;

export const VERIFY_OTP_MUTATION = `
        mutation VerifyOtp($email: String!, $otp: Int!) {
            verifyOtp(email: $email, otp: $otp) {
                name
                email
                isEmailVerified
            }
        }
`;

export const GET_ALL_WORKSPACES_QUERY = `
query GetAllWorkSpaces {
    getAllWorkspaces {
        total
        workspace{
            workspaceName
        }
    }
}
`;

export const CREATE_WORKSPACE_MUTATION = `
mutation CreateWorkspaceMutation($workspaceName: String!, $uniqueName: String!) {
    createWorkspace (workspaceName: $workspaceName, uniqueName: $uniqueName) {
        id
        workspaceName
        uniqueName
    }
}
`;