import { UserModel } from "@/models";

export interface AppState {
  isLogin: boolean,
  showAboutMe: boolean,
  showLogin: boolean,
  user: UserModel
}

export const state: AppState = {
  isLogin: false,
  showAboutMe: false,
  showLogin: false,
  user: {} as UserModel
}