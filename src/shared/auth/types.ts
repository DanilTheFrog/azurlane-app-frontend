export interface LoginData {
    login: string;
    password: string;
}

export interface AuthState {
    isAuth: boolean;
    name: string | null;
    id: string | null;
    token: string | null;
    error: string | null;
};