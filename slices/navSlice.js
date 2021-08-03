import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
  }

  export const navSlice = createSlice({
      name: 'nav',
      initialState,
      reducers: {
          setOrigin: (state,action) =>{
              state.origin = action.payload
          },
          setDestination: (state,action) =>{
               state.destination = action.payload
          },
          setTravelTimeInformation : () =>{
              state.travelTimeInformation = action.payload
          }
      }

  })