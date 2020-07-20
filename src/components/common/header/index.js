import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actions from "../../../actionCreator";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoHeader,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import {Link} from 'react-router-dom'
class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      handleMouseIn,
      handleMouseOut,
      page,
      mouseIn,
      handleChangePage,
      
    } = this.props;
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (list[i]) {
        pageList.push(<SearchInfoItem key={i}>{list[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
          <SearchInfoHeader>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoHeader>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list ,login} = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login?<NavItem className="right"onClick={()=>{this.props.logout()}}>退出</NavItem>:<Link to='/login'><NavItem className="right">登陆</NavItem></Link>}
          <NavItem className="right ">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? "focused " : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe610;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
          <Button className="writting">
            <i className="iconfont ">&#xe6e5;</i>
            写文章
          </Button></Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    focused: state.get("header").get("focused"),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login:state.getIn(['login','login'])
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actions.getTages());
      }
      const action = actions.changeFocuse();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actions.changeBlur();
      dispatch(action);
    },
    handleMouseIn() {
      const action = actions.mouseIn();
      dispatch(action);
    },
    handleMouseOut() {
      const action = actions.mouseOut();
      dispatch(action);
    },
    handleChangePage(spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      console.log(originAngle);

      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      dispatch(actions.changePageList());
    },
    logout(){
      dispatch(actions.logout())
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Header);
