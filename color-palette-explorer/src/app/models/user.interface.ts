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

export interface Colors{
    id: number;
    hex_code_1 : string;
    hex_code_2 : string;
    hex_code_3 : string;
    hex_code_4 : string;
    hex_code_5 : string;
}