import {fromJS} from 'immutable';
import * as Types from '../../../constance' 
const defaultState = fromJS({
    login:false
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case Types.CHANGE_LOGIN:
            return state.set('login',action.value)
        case Types.LOGOUT:
            return state.set('login',action.value)
        default:return state;
    }
}