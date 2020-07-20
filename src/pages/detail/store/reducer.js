import {fromJS} from 'immutable'
import * as Types from '../../../constance'
const defaultState = fromJS({
    title:'',
    content:''
})
export default (state=defaultState,action)=>{
    switch (action.type){
        case Types.GET_DETAIL:
            //  
            return state.merge({
                title:action.value.title,
                content:action.value.content
            })
        default:return state;
    }
}