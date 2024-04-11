export interface UserInterface{
    email: string;
    token: string;
    username: string;
}

export interface UserGetInterface{
    user: {
        email: string;
        username: string;
    }
    token: {
        access: string;
        refresh: string;
    }
}