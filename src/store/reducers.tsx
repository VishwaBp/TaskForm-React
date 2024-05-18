import {SET_DATA} from './actions';
const initialState = {

};

const reducer = (state = initialState,action:any)=>{
    switch (action.type)
    {
        case SET_DATA:
            return {
                ...state,
                data:action.payload,
            };
        default:return state;
    }};
export default reducer;