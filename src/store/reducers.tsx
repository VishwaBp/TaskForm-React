import {DELETE_TASK, SET_DATA, SUBMIT_TASK} from './actions';
import {v4 as uuid}from 'uuid';

const initialState = {
data : [
    {
       id:1, task : 1, name:'task1', description:'description1' ,due_date:'may1', status: '0'

    }
    ]
};

const reducer = (state = initialState,action:any)=>{
    debugger;
    switch (action.type)
    {

        case SET_DATA:
            return {
                ...state,
                data:action.payload,
            };
        case SUBMIT_TASK:
if(action.payload.id){
   let ind =  state.data.findIndex( item => item.id == action.payload.id );
   state.data.splice(ind,1,action.payload);
}
else{
    action.payload.id = uuid();
    state.data.push(action.payload)
}


            return {
                ...state,

            };
        case DELETE_TASK:
            state.data = state.data.filter( item => item.id != action.payload.id);
            return {...state};
        default:return state;
    }};

export default reducer;