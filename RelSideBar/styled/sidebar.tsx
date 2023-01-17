import styled,{createGlobalStyle,keyframes} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    border:0;
  }
`;


export interface ISideBar{
  width?:number,
  color?:string,
  zIndex?:number
}


export const SideBar = styled.div.attrs({
  className: 'SideBar',
  })<ISideBar>`
position:fixed;
overflow:hidden;
left:0;
top:46px;
white-space: nowrap;
width:${props => (props.width ? props.width+'px' : '251px')};
height:100vh;
background-color:${props => (props.color ? props.color : 'blue')};
transition: 0.5s;
z-index:${props => (props.zIndex ? props.zIndex : 9)};
`;

