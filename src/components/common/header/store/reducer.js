import * as Types from '../../../../constance'
import {fromJS} from 'immutable'
const defauleStore =fromJS( {
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false,
});
export default (state=defauleStore,action)=>{
    switch(action.type){
        case Types.CHANGE_FOCUSE:
            // const newState = {...state,focused:state.focused?false:true}
            return state.set('focused',true)
            // return newState
        case Types.CHANGE_BLUR:
            return state.set('focused',false)
        case Types.GET_TAGES:
            return state.set('list',action.value).set('totalPage',action.totalPage)
        case Types.MOUSE_IN:
            return state.set('mouseIn',true)
        case Types.MOUSE_OUT:
            return state.set('mouseIn',false)
        case Types.CHANGE_PAGE_LIST:
            return state.set('page',(state.get('page')+1)<=(state.get('totalPage'))?(state.get('page')+1):1)
        default:return state;
    }
}