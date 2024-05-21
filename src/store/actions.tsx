export const SET_DATA = 'SET_DATA';
export const SUBMIT_TASK = 'SUBMIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const setData = (data:any)=>({
    type:SET_DATA,


    payload:data,
})

export const submitTask = (data:any)=>({
    type:SUBMIT_TASK,


    payload:data,
})

export const deleteTask = (data:any)=>({
    type:DELETE_TASK,
    payload:data,
})