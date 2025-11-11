import { apiClient } from "@/shared/api";
import type { ApiResponse, StudentQueryParams, PaginatedResponse } from "@/shared/types";
import type { Student, CreateStudentDto, UpdateStudentDto } from "@/entities/student";

// Read Operations

/**
 * Get all students with optional filters
 * Supports: pagination, search, sorting
 */
export const getStudents = async (params?: StudentQueryParams) => {
    const response = await apiClient.get<ApiResponse<PaginatedResponse<Student>>>(
        `/students`,
        { params }
    );

    return response.data;
};

/**
 * Get single student by ID
 */
export const getStudentById = async (id: number) => {
    const response = await apiClient.get<ApiResponse<Student>>(
        `/students/${id}`
    );

    return response.data;
};

// Create Operation

/**
 * Create new student
 */
export const createStudent = async (data: CreateStudentDto) => {
    const response = await apiClient.post<ApiResponse<Student>>(
        `/students/create`,
        data
    );

    return response.data;
};

/**
 * Update existing student
 */
export const updateStudent = async (id: number, data: UpdateStudentDto) => {
    const response = await apiClient.put<ApiResponse<Student>>(
        `/students/update/${id}`,
        data
    );

    return response.data;
};

// Delete Operation

/**
 * Delete student by ID
 */
export const deleteStudent = async (id: number) => {
    const response = await apiClient.delete<ApiResponse<Student>>(
        `/students/delete/${id}`
    );

    return response.data;
};