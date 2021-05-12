import { RootState } from '@/store'
import { ActionTree, ActionContext } from 'vuex'
import { AppActionTypes,  AppMutationTypes} from './types'
import { Mutations } from './mutations'
import { AppState } from './state'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
  } & Omit<ActionContext<AppState, RootState>, 'commit'>

export interface Actions {
    [AppActionTypes.ACTION_SHOW_ABOUT_ME](
        { commit }: AugmentedActionContext
    ): void
    [AppActionTypes.ACTION_HIDE_ABOUT_ME](
        { commit }: AugmentedActionContext
    ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.ACTION_SHOW_ABOUT_ME]({ commit }) {
        commit(AppMutationTypes.CONTROL_ABOUT_ME, true)
    },
    [AppActionTypes.ACTION_HIDE_ABOUT_ME]({ commit }) {
        commit(AppMutationTypes.CONTROL_ABOUT_ME, false)
    }
}