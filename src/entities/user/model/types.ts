export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
}

export interface AuthTokens {
    accessToken: string;
    user: User;
}