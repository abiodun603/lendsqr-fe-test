export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    gender: 'male' | 'female';
    bvn: number;
    children: number;
    type_of_residence: 'Parent Apartment' | 'Own House' | 'Rented House';
    username: string;
    organization: string;
    phone: string;
    status: 'pending' | 'approved' | 'rejected';
    education: {
        education_level: 'High School Diploma' | 'Bachelor Degree' | 'Master Degree' | 'PhD';
        employment_status: 'employed' | 'unemployed' | 'self-employed';
        sector: 'Technology' | 'Finance' | 'Healthcare' | 'Education';
        office_email: string;
        salary: number;
        loan: number;
    };
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantor: {
        fullname: string;
        phone: string;
        email: string;
        relationship: 'spouse' | 'parent' | 'sibling' | 'friend';
    };
};

export interface Users {
    users: User[]
}