import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const Mytodos1=createAsyncThunk('fetch1',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/north_indian/north_indian');
    return response.data
})

export const Mytodos2=createAsyncThunk('fetch2',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/south_indian/south_indian');
    return response.data
})
export const Mytodos3=createAsyncThunk('fetch3',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/chinease/chinease');
    return response.data
})
export const Mytodos4=createAsyncThunk('fetch4',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/italian/italian');
    return response.data
})
export const Mytodos5=createAsyncThunk('fetch5',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/drinks/drinks');
    return response.data
})
export const Mytodos6=createAsyncThunk('fetch6',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/sweet/sweet');
    return response.data
})
export const Mytodos7=createAsyncThunk('fetch7',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/pizza/pizza');
    return response.data
})
export const Mytodos8=createAsyncThunk('fetch8',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/breads/breads');
    return response.data
})
export const Mytodos9=createAsyncThunk('fetch9',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/starters/starters');
    return response.data
})
export const Mytodos10=createAsyncThunk('fetch10',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/tandoor/tandoor');
    return response.data
})
export const Mytodos11=createAsyncThunk('fetch11',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/fast-food/fast-food');
    return response.data
})
export const Mytodos12=createAsyncThunk('fetch12',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/sandwich/sandwich');
    return response.data
})
export const Mytodos13=createAsyncThunk('fetch13',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/momos/momos');
    return response.data
})
export const Mytodos14=createAsyncThunk('fetch14',async()=>{
    const response=await axios.get('https://my-json-server.typicode.com/Aalokbaghele2001/bakery/bakery');
    return response.data
})




const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isloading:false,
        data1:[],
        data2:[],
        data3:[],
        data4:[],
        data5:[],
        data6:[],
        data7:[],
        data8:[],
        data9:[],
        data10:[],
        data11:[],
        data12:[],
        data13:[],
        data14:[],
        isError:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        //pending state
        builder.addCase(Mytodos1.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos1.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data1=action.payload
        })
        builder.addCase(Mytodos1.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })


        builder.addCase(Mytodos2.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos2.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data2=action.payload
        })
        builder.addCase(Mytodos2.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos3.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos3.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data3=action.payload
        })
        builder.addCase(Mytodos3.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })


        builder.addCase(Mytodos4.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos4.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data4=action.payload
        })
        builder.addCase(Mytodos4.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos5.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos5.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data5=action.payload
        })
        builder.addCase(Mytodos5.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos6.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos6.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data6=action.payload
        })
        builder.addCase(Mytodos6.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })


        builder.addCase(Mytodos7.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos7.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data7=action.payload
        })
        builder.addCase(Mytodos7.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })




        builder.addCase(Mytodos8.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos8.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data8=action.payload
        })
        builder.addCase(Mytodos8.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos9.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos9.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data9=action.payload
        })
        builder.addCase(Mytodos9.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos10.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos10.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data10=action.payload
        })
        builder.addCase(Mytodos10.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })


        builder.addCase(Mytodos11.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos11.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data11=action.payload
        })
        builder.addCase(Mytodos11.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos12.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos12.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data12=action.payload
        })
        builder.addCase(Mytodos12.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })


        builder.addCase(Mytodos13.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos13.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data13=action.payload
        })
        builder.addCase(Mytodos13.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })



        builder.addCase(Mytodos14.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos14.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data14=action.payload
        })
        builder.addCase(Mytodos14.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
            // console.log("error",action.payload)
        })
   },

   
})
export default TodoSlice.reducer