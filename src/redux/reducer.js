import { ERROR, GETDATA,LOADING } from "./action";


const initial={
  data:{},
  isLoading:false,
  error:""
}


function reducerHandle(state=initial,action){

   switch(action.type){

     case GETDATA:{


      return {
        ...state,
        isLoading:false,
        data:action.payload,
        error:''
      }

     }
     case LOADING:{

      return {
      ...state,
      isLoading:true
      }

     }

     case ERROR:{

      return{
        ...state,
        isLoading:false,
        error:action.payload
      }

     }

     default:
      return state

   }

}

export default reducerHandle