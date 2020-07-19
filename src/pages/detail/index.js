import React, { Component } from 'react';
import {DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import * as actions from '../../actionCreator'
import {withRouter} from 'react-router-dom'
const qs = require('query-string')
class Detail extends Component {
    componentDidMount(){
        const params = qs.parse(this.props.location.search);
        this.props.getDetail(params.id)
    }
    render() {
        
        
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </DetailWrapper>
        );
    }
}
const mapStateToProps = (state)=>({
title:state.getIn(['detail','title']),
content:state.getIn(['detail','content'])
})
const mapDispatchToProps = (dispatch)=>{
    return {
        getDetail(id){
            dispatch(actions.getDetail(id))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Detail));