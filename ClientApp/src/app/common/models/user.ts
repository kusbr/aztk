export class User{
    userId: string;
    firstName: string;
    lastName: string;
}

export interface AADUser{
    id_token: string;
    provider_name: string;
    user_clains: Array<{
        typ: string;
        val: string;
    }>;
    user_id:string;
}