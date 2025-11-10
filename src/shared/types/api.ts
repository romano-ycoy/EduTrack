// Base API Response
export interface ApiResponse<T = any> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
    error?: any;
}

// Pagination
export interface PaginationParams {
    page?: number;
    limit?: number;
}

export interface PaginationResponse<T> {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
    students: T[];
}

// Query params for students
export interface StudentQueryParams extends PaginationParams {
    search?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
}