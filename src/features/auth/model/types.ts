import type { User } from '@/entities/user';
import { z } from 'zod';

// What we send to the backend when logging in
export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

// What we send when registering a new admin
export interface RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

// The authentication state in our app
export interface AuthState {
    user: User | null;        // Current logged-in user
    isAuthenticated: boolean; // Are they logged in?
    isLoading: boolean;       // Are we checking/loading?
}

// Zod schemas
//Login
export const loginSchema = z.object({
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),

    password: z.string()
        .min(1, "Password is required"),

    rememberMe: z.boolean().optional(),
});

// Infer TypeScript type from Zod schema
// Automatically creates a TypeScript type from zod schema
export type LoginFormData = z.infer<typeof loginSchema>;

//Register
export const registerSchema = z.object({
    email: z.string()
        .min(1, 'Email is required')
        .email("Invalif email address"),

    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),

    confirmPassword: z.string()
    .min(1, "Please confirm your password"),

    firstName: z.string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),

    lastName: z.string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
})
.refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Password don't match",
        path: ["confirmPassword"],
    }
)

export type RegisterFormData = z.infer<typeof registerSchema>;