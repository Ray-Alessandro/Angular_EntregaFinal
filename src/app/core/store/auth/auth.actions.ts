import { createAction, props } from "@ngrx/store";
import { User } from "../../services/auth/model/user.model";

export const setAuthUser =  createAction('[Auth] Set Auth User', props<{ payload: User }>());

export const clearAuthUser =  createAction('[Auth] Clear Auth User');