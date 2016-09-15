import { UserData } from './user-data';

export interface AuthEventData {
    type: 'login' | 'register' | 'logout';
    userData: UserData;
}