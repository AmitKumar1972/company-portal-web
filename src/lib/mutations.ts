export const SIGNUP_MUTATION = `
mutation Signup($name: String!, $email: String!, $password: String!, $workspaceName: String!, $uniqueName: String!) {
    signup(name: $name, email: $email, password: $password, workspaceName: $workspaceName,uniqueName: $uniqueName) {
        message
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