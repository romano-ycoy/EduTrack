import axiosInstance from './axiosInstance';
import type { AxiosRequestConfig } from 'axios';

let accessToken: string | null = null;

// Function to set token (will be called after login)
export const setAccessToken = (token: string | null) => {
    accessToken = token;
};

// Function to get current token
export const getAccessToken = () => accessToken;

// Request interceptor - add token to all requests
axiosInstance.interceptors.request.use(
    (config) => {
        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken};`
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - handle token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Try to refresh token
                const response = await axiosInstance.post('/auth/refresh');
                const newAccessToken = response.data.data.accessToken;

                // Update token
                setAccessToken(newAccessToken);

                // Retry original request with new token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // Refresh failed, redirect to login
                setAccessToken(null);
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// Generic API client methods
export const apiClient = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        axiosInstance.get<T>(url, config),

    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        axiosInstance.post<T>(url, data, config),

    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        axiosInstance.put<T>(url, data, config),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        axiosInstance.delete<T>(url, config),
};