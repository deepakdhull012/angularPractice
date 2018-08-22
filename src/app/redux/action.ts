import { Action } from '@ngrx/store';

export const ADD_USER = 'Add User';
export const USER_SELECTED = 'User Selected';
export const GET_EXPANDED_JE = '[IJournalEntry] Get expanded JE';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public user) { }
}
export class UserSelected implements Action {
    readonly type = USER_SELECTED;
    constructor(public userId) { }
}
export type Actions = AddUser | UserSelected ;
