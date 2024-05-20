import {SET_DATA, SUBMIT_TASK} from './actions';
const initialState = {
data : [
    {
        task : 1, title:'task1', description:'description1' ,due_date:'may1', status: 'pending'

    },
    {
        task : 2, title:'task2', description:'description2' ,due_date:'may1', status: 'pending'

    },
    {
        task : 3, title:'task3', description:'description3' ,due_date:'may1', status: 'pending'

    },
    {
        task : 4, title:'task4', description:'description4' ,due_date:'may1', status: 'pending'

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

            state.data.push(action.payload)

            return {
                ...state,

            };
        default:return state;
    }};

export default reducer;