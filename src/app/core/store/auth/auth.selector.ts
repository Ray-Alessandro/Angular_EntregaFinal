import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(selectAuthState, (state: AuthState) => state.user);