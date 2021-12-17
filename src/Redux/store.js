import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from './darkModeRedux'

export const store = configureStore({
  reducer: {
      dark:darkModeSlice
  },
})