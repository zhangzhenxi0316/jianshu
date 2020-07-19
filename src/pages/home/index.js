import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import { connect } from "react-redux";
import * as actions from "../../actionCreator";
class Home extends Component {
  componentDidMount() {
    this.props.getHomeData();
    window.addEventListener("scroll", this.ChangeScroll.bind(this));
    // this.changeShow = this.props.changeShow
    // this.changeDisappear = this.props.
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.ChangeScroll.bind(this));
  }
  ChangeScroll() {
    if (document.documentElement.scrollTop >= 100) {
        this.props.changeShow()
    }else{
        this.props.changeDisappear()
    }
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { show } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4993/421ec96ccef8aea708c84ba2972b5be484695f25.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {show ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ""}
      </HomeWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.getIn(["home", "showScroll"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      const action = actions.getHomeData();
      dispatch(action);
    },
    changeShow(){
        const action = actions.changeShow();
        dispatch(action)
    },
    changeDisappear(){
        const action = actions.changeDisappear()
        dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
