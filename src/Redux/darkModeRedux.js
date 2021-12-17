import { createSlice } from '@reduxjs/toolkit'


export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState:{
      darked:''
  },
  reducers: {
    darkedMode:(state,action)=>{
        state.darked = !action.payload
    }
  },
})

export const { darkedMode } = darkModeSlice.actions

export default darkModeSlice.reducer