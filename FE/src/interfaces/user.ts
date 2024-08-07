
export interface IUser {
    email: string;
    password: string;
    name?: string;
    role?: 'user' | 'admin';
    avatar?: string;
}
