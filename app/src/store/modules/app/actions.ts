import { RootState } from '@/store'
import { ActionTree, ActionContext } from 'vuex'
import { AppActionTypes,  AppMutationTypes} from './types'
import { Mutations } from './mutations'
import { AppState } from './state'
import { UserModel } from '@/models'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
  } & Omit<ActionContext<AppState, RootState>, 'commit'>

export interface Actions {
    [AppActionTypes.ACTION_SET_USER_AND_STATUS](
        { commit }: AugmentedActionContext, user: UserModel
    ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.ACTION_SET_USER_AND_STATUS]({ commit }, user: UserModel) {
        commit(AppMutationTypes.SET_LOGIN_STATUS, true)
        commit(AppMutationTypes.SET_USER, user)
    }
}