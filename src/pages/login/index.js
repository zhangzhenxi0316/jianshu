import React, { PureComponent } from 'react';
import {LoginWrapper,LoginBox,Input,Button} from './style'
import * as actions from '../../actionCreator'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Login extends PureComponent {
    render() {
        const {loginState} = this.props
        if(!loginState){
            return(
                <LoginWrapper>
                <LoginBox>
                <Input placeholder="账号" ref={(input)=>{this.account = input}}/>
                <Input placeholder="密码" type="password" ref={(password)=>{this.password = password}}/>
                <Button onClick={()=>{this.props.login(this.account,this.password)}}>提交</Button>
                </LoginBox>
            </LoginWrapper>
            )
        }else{
            return <Redirect to="/"/>
        }
    }
}
const mapStateToProps = (state)=>{
    return{
        loginState:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch)=>({
    login(account,password){
        console.log(account.value);
        
        dispatch(actions.login(account.value,password.value))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login) ;