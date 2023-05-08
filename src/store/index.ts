import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroreducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
