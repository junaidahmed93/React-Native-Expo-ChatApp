import {
    EMPLOYEE_UPDATE
} from '../action/types';

const INITIAL_STATE = {
    name : '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        console.log("14",action);
        //action.payload ===  {prop:'name' , value:'jane'}
        return {...state, [action.payload.prop]: action.payload.value} // key interipolation 
        default:
            return state;
    }
}