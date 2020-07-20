import styled from "styled-components";
import logoPic from '../../../static/logo.png'
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({href:'/'})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
`
export const Nav = styled.div`
    margin:0 auto;
    width:60%;
    height:100%;
`
export const NavItem = styled.div`
padding:0 15px;
line-height:56px;
font-size:17px; 
color:#333;
    &.left{
        float:left;
    }
    &.right{
        color:#969696;
        float:right;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    type:'text',
    placeholder:'搜索'
})`
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
margin-top:9px;
margin-left:20px;
padding:0 20px;
box-sizing:border-size;
font-size:14px;
&::placehodler{
    color:#999;
}
&.focused{
    width:250px;

}
&.slide-enter{
    transition:all .6s ease-out;
}
&.slide-enter-active{
    width:250px;
}
&.slide-exit{
    transition:all .6s ease-out;
}
&.slide-exit-active{
    width:160px;
}
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
margin-top:9px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
margin-right:20px;
padding:0 30px 0 20px;
font-size:14px;
colot:#666;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149;
}

`
export const SearchWrapper = styled.div`
float:left;
position:relative;

.zoom{
    position:absolute;
    right:5px;
    bottom:3px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:#777;
    }
}
`
export const SearchInfo = styled.div`
position:absolute;
left:16px;
top:56px;
width:240px;
padding:0 20px ;
box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoHeader = styled.div`
margin:20px 0 15px 0 ;
line-height:20px;
font-size:14px ;
color:#969696;

`
export const SearchInfoSwitch = styled.span`
cursor:pointer;
float :right;
font-size:13px;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .3s ease-in;
    transform:rotate(0deg);
    transition-origin:center center;
}
`
export const SearchInfoItem = styled.a`
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;
font-size:12px;
padding:0 5px;
line-height:20px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
cursor:pointer;
`
export const SearchInfoList = styled.div`
overflow:hidden;
`