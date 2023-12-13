import { createStore } from "redux";
export function cong(value){
  return {
type:"CONG",
payload:value
  }
}
export function tru(value){
  return {
type:"TRU",
payload:value
  }
}
export function nhan(value){
  return {
type:"NHAN",
payload:value
  }
}
export function chia(value){
  return {
type:"CHIA",
payload:value
  }
}
const initialState =
  {
    result:0
  }

const reducer =(state=initialState,action)=>{
  const {type,payload}=action
  if(type==="CONG"){
    return {result:state.result+payload}
  }
  else if(type=="TRU"){
    return {result:state.result-payload}
  }
  else if(type=="NHAN"){
    return {result:state.result*payload}
  }
  else if(type=="CHIA"){
    return {result:state.result/payload}
  }else {
    return state
  }
}
const store =createStore(reducer)
export default store
