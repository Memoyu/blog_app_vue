import { MutationTree } from 'vuex'
import { AppMutationTypes } from './types'
import { AppState } from './state'

export type Mutations<S = AppState> = {
    [AppMutationTypes.CONTROL_ABOUT_ME](state: S, isShow: boolean): void

}

export const mutations: MutationTree<AppState> & Mutations = {
    [AppMutationTypes.CONTROL_ABOUT_ME](state: AppState, isShow: boolean) {
        state.showAboutMe = isShow
    }
}