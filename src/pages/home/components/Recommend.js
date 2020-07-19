import React, { Component } from 'react';
import {RecommendWrapper,RecommendItem}from '../style'
import {connect} from 'react-redux'
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {this.props.recommendList.map((item,index)=>{
                    return (
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                    )
                })}
                
                
            </RecommendWrapper>
        );
    }
}
const mapStateToProps = (state)=>({
    recommendList:state.getIn(['home','recommendList'])
})
const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);