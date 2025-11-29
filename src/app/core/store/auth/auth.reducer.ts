import { createReducer, on } from "@ngrx/store";
import { clearAuthUser, setAuthUser } from "./auth.actions";
import { User } from "../../services/auth/model/user.model";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | null;
}

export const initialAuthState: AuthState = {
  user: null
};

export const authReducer = createReducer<AuthState>(
  initialAuthState,
  on(setAuthUser, (state, { payload }) => ({ ...state, user: payload }) ),
  on(clearAuthUser, state => ({ ...state, user: null }) )
);