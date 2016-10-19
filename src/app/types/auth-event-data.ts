import { UserData } from './user-data';
import { FirebaseAuthState } from 'angularfire2';

export enum AUTH_STATES {
    LOGGED_IN,
    LOGGED_OUT,
    NO_AUTH,
    CHECKING
};
export interface AuthEventData {
    state: AUTH_STATES;
    authData?: FirebaseAuthState;
    userData?: UserData;
}
