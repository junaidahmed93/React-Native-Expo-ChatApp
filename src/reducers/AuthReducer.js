import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../action/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
   // console.log("actions outer", action);
    switch (action.type) {

        case EMAIL_CHANGED:
           // console.log("action", action, "state", state);
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            //console.log("action", action, "state", state);
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
           // console.log("user login success", action, "state", state);
            return { ...state, ...INITIAL_STATE, user: action.payload, error: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_FAIL:
           // console.log("user login fail");
            return { ...state, error: 'Auth Failed', password: '', loading: false };
        default:
            return state;
    }
}      