import { Timestamp } from 'typeorm';
export declare class User {
    id: number;
    name: string;
    created_at: Timestamp;
    updated_at: Timestamp;
}
