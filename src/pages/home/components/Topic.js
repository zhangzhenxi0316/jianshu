import React, { Component } from 'react';
import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux'
class Topic extends Component {
    render() {
        const {topicList}  = this.props
        // console.log(topicList[0]);
        
        const list = topicList.map((item)=>{
            return (
                <TopicItem key={item.get('id')}>
                    <img  className='top-pic' src={item.get('imgUrl')} alt="'"/>
                    {item.get('title')}
                </TopicItem>
            )
        })
        return (
            <TopicWrapper>
                {list}
            </TopicWrapper>
        );
    }
}
const mapStateToProps = (state)=>{
        return {
            topicList:state.getIn(['home','topicList'])
        }
}
const mapDispatchToPorps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToPorps)(Topic);