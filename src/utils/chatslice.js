import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
    name:"chat",
    initialState:{
    message:[],
    },
    reducers:{
        setMessage:(state,action)=>{
            if (state.message.length > 50) {
                state.message.splice(0, 30); // Remove oldest 30 messages
            }
            state.message.push(action.payload);

        }
    }

  });
  export const { setMessage } = chatslice.actions;
export default chatslice.reducer;
