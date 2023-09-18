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
            isemailVerified
            isActivated
        }
    }
}
`;

export const VERIFY_OTP_MUTATION = `
        mutation VerifyOtp($email: String!, $otp: Int!) {
            verifyOtp(email: $email, otp: $otp) {
                token
                user{name
                email
                isemailVerified
                }
            }
        }
`;

export const GET_ALL_WORKSPACES_QUERY = `
query GetAllWorkSpaces {
    getAllWorkspaces {
        total
        workspace{
            uniqueName
            workspaceName
        }
    }
}
`;

export const GET_USER_WORKSPACE_ROLE = `
query GetUserRoleWorkspace ($uniqueName: String!){
    getUserRoleWorkspace (uniqueName: $uniqueName)
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

export const ADD_EMPLOYEE_MUTATION = `
mutation AddEmployee($name:String!, $email: String!, $workspaceId: String!,$role: roleTypes!){
    addEmployee(name: $name,email:$email,workspaceId:$workspaceId,role:$role){
      message
    }
  }
`;

export const WORKSPACE_DETAIL_QUERY = `
query GetWorkspaceDetailsByUniqueName($uniqueName: String!){
    getWorkspaceDetailsByUniqueName (uniqueName: $uniqueName) {
        id
        createdBy
        workspaceName
        uniqueName
        logo
        description
    }
}
`;

export const RESET_PASSWORD_MUTATION = `
mutation ResetPassword($email: String!, $oldPassword: String!,$newPassword: String!){
    resetPassword(email: $email,newPassword:$newPassword,oldPassword:$oldPassword){
      token
    }
  }
`;

export const GET_ALL_USERS = `
query GetAllUsers($uniqueName: String!){
    getAllUsers (uniqueName: $uniqueName) {
        total
        user{
            name
            email
            mobileNumber
        }
    }
}
`;

export const LEAVE_REQUEST_MUTATION = `
mutation LeaveRequest($workspaceId: Int!,$reason:String!, $startDate: String!,$numberOfLeaves: Int!,$leaveType: LeaveType!){
    leaveRequest(workspaceId:$workspaceId,reason:$reason, startDate:$startDate,numberOfLeaves: $numberOfLeaves,leaveType: $leaveType){
      message
    }
  }
`;

export const MANAGE_LEAVE_MUTATION = `
mutation ManageLeave($workspaceId: Int!,$reason:String!, $startDate: String!,$numberOfLeaves: Int!,$leaveType: LeaveType!){
    manageLeave(workspaceId:$workspaceId,reason:$reason, startDate:$startDate,numberOfLeaves: $numberOfLeaves,leaveType: $leaveType){
      message
    }
  }
`;
