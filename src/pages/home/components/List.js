import React, { Component } from 'react';
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import * as actions from '../../../actionCreator'
import {Link} from 'react-router-dom'
class List extends Component {
    
    render() {
        const {news,getMoreList,page} = this.props;
        const list = news.map((item,index)=>{
            // console.log(item);
            
            return (
                <Link key={index} to={'/detail?id='+item.get('id')}>
                <ListItem >
                    <img className="pic" src={item.get('imgUrl')} alt=''/>
                    <ListInfo>
                        <h3 className="title">{item.get('title')}</h3>
                        <p className="desc">{item.get('content')}</p>
                    </ListInfo>
                </ListItem>
                </Link>
            )
        })
        return (
            <div>
                {list}
                <LoadMore onClick={()=>{getMoreList(page)}}>加载更多</LoadMore>
            </div>
            
        );
    }
}
const mapStateToProps = (state)=>({
    news:state.getIn(['home','news']),
    articleList:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatchToProps = (dispatch)=>{
    return{
        getMoreList(page){
            const action = actions.getMoreList(page)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);