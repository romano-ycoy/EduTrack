export type PrefixType = 'MR' | 'MS' | 'DR' | 'OTHER';

export interface Student {
    studentId: number;
    prefix: PrefixType;
    customPrefix: string | null;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateStudentDto {
    prefix: PrefixType;
    customPrefix?: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}

export interface UpdateStudentDto {
    prefix: PrefixType;
    customPrefix?: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}