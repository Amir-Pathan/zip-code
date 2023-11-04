import axios from "axios";
import { ERROR, GETDATA, LOADING } from "./action";

export function getData(payload){

  return{
    type:GETDATA,
    payload:payload
  }

}

export function getDataError(payload){

  return{
    type:GETDATA,
    payload:payload
  }

}

export function loading(){

  return {
    type:LOADING,
    payload:null
  }
}

export function error(payload){

  return{
    type:ERROR,
    payload:payload
  }


}

export function LoadingData(){

  return dispatch =>dispatch(loading())

}

export function getDataByZipCode(zipCode){

  return dispatch=>{

    axios.get('https://www.zippopotam.us/in/'+zipCode).then((res)=>{

    console.log(typeof(res.data));

      dispatch(getData(res.data))

    }).catch((err)=>{

      dispatch(error(err.message))

    })

  }

}