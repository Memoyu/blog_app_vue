import { MutationTree } from 'vuex'
import { AppMutationTypes } from './types'
import { AppState } from './state'
import { UserModel } from '@/models'

export type Mutations<S = AppState> = {
    [AppMutationTypes.CONTROL_ABOUT_ME](state: S, isShow: boolean): void,
    [AppMutationTypes.CONTROL_LOGIN](state: S, isShow: boolean): void,
    [AppMutationTypes.SET_LOGIN_STATUS](state: S, isShow: boolean): void,
    [AppMutationTypes.SET_USER](state: S, user: UserModel): void,

}

export const mutations: MutationTree<AppState> & Mutations = {
    [AppMutationTypes.CONTROL_ABOUT_ME](state: AppState, isShow: boolean) {
        state.showAboutMe = isShow
    },
    [AppMutationTypes.CONTROL_LOGIN](state: AppState, isShow: boolean) {
        state.showLogin = isShow
    },
    [AppMutationTypes.SET_LOGIN_STATUS](state: AppState, isLogin: boolean) {
        state.isLogin = isLogin
    },
    [AppMutationTypes.SET_USER](state: AppState, user: UserModel) {
        state.user = user
    },
}