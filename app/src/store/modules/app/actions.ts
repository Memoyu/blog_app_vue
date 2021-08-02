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
    [AppActionTypes.TEST](
        { commit }: AugmentedActionContext
    ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.TEST]({ commit }) {
        // commit(AppMutationTypes.TEST, true)
    }
}