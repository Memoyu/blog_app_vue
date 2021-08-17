import { createStore, createLogger } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { store as app, AppStore, AppState } from '@/store/modules/app'
//import { store as admin, AdminStore, AdminState } from '@/store/modules/admin'


export interface RootState {
    app: AppState
    //admin: AdminState
}

export type Store = AppStore<Pick<RootState, 'app'>> //& AdminStore<Pick<RootState, 'admin'>>

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({}), createPersistedState()] : [createPersistedState()]

export const store = createStore({
  plugins,
  modules: {
    app,
    //admin
  }
})

export function useStore(): Store {
  return store as Store
}