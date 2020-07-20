import * as Types from '../constance'
import axios from 'axios'
export const changeFocuse = ()=>({
    type:Types.CHANGE_FOCUSE
})
export const getTages = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerlist.json').then(res=>{
            dispatch({
                type:Types.GET_TAGES,
                value:res.data,
                totalPage:Math.ceil(res.data.length/10)
            })
        }).catch((err)=>{
            console.log('错误')
        })
        
    }
}

export const changeBlur = ()=>({
    type:Types.CHANGE_BLUR
})
export const mouseIn = ()=>({
    type:Types.MOUSE_IN
})
export const mouseOut = ()=>({
    type:Types.MOUSE_OUT
})
export const changePageList = ()=>({
    type:Types.CHANGE_PAGE_LIST
})

// home
export const getHomeData=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            console.log(res);
            
            dispatch({
                type:Types.GET_HOME,
                value:res.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then(res=>{
            console.log(res.data.data);
            
            dispatch({
                type:Types.ADD_HOME_LIST,
                value:res.data.data,
                page:page+1
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const changeShow = ()=>{
    return {
        type:Types.CHANGE_SHOW
    }
}
export const changeDisappear = ()=>{
    return {
        type:Types.CHANGE_DISAPPEAR
    }
}
export const getDetail=(id)=>{
return (dispatch)=>{
    axios.get('/api/detail.json?id='+id).then(res=>{
       dispatch({
           type:Types.GET_DETAIL,
           value:res.data.data
       })
    }).catch(err=>{
        console.log(err);
    })

}
}
export const logout = ()=>{
    return{
        type:Types.LOGOUT,
        value:false
    }
}
// login
export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('api/login.json?account='+account+'&password='+password).then(res=>{
            const result = res.data.data;
            if(result){
                dispatch({
                    type:Types.CHANGE_LOGIN,
                    value:true
                })
            }
        })
    }
}