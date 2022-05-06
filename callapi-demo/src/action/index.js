import { FATCH_USER,SET_USER,DELETE_USER} from '../Type/types'
export function Registration() {
           return {type: FATCH_USER};
}
export function deletedata(id) {
    return {type: DELETE_USER , payload:id};
  
}
export const setuser =(userdata)=>{
    console.log('userdata', userdata.data.data.docs)

    debugger
  
    return {
        type:SET_USER,
        payload:userdata.data.data.docs
    }

}
export const setcreateuser =(userdata)=>{
    console.log('userdata', userdata.data.data.docs)

    debugger
  
    return {
        type:SET_USER,
        payload:userdata.data.data.docs
    }

}
// export const searchuser =(userdata)=>{
//     console.log('userdata', userdata)
//     debugger
//     return {
//         type:SET_DELETE_USER,
//         payload:userdata.data
//     }
// }