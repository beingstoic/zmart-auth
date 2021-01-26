export interface LoginResponse{
    userId: String;
    username: String;
    fullname: String;
    email: String;
    roles: String[];
}
export interface LoginRequest{
    username: String;
    password: String;
}