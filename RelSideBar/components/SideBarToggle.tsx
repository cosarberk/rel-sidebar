import React, { useContext } from 'react'

import { useToggleSideBar } from '../hooks/useToggleSideBar';
import styled from "styled-components";



export interface ISideBarToggleBtn{
  width?:number,
  height?:number,
  fsize?:number,
  bgcolor?:string
}


const SideBarToggleBtn = styled.div<ISideBarToggleBtn>`
  width: ${(props) => (props.width ? props.width + "px" : "46px")};
  min-width: ${(props) => (props.width ? props.width + "px" : "46px")};
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  font-size: ${(props) => (props.fsize ? props.fsize + "px" : "15px")};
  margin:0;padding:0;border:0;
  backgroundColor:${(props) => (props.bgcolor)};
  outline:none;
  color:white;
  display: inline-flex;
  float: left;
  align-items: center;
  justify-content: center;
  transition:0.3s linear;
  cursor:pointer;
  &:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;



export interface IToggleLogo{
  scale?:number
}

const ToggleLogo = styled.img<IToggleLogo>`
width:100%;
height:100%;
transform:scale(${(props)=>(props.scale ? props.scale : 0.9)})
`

type SideBarToggleProps={
  onclick?:any,
  lgooSrc?:string,
  bgcolor?:string
}

export const SideBarToggle:React.FunctionComponent<SideBarToggleProps> = ({onclick,lgooSrc,bgcolor}:SideBarToggleProps) => {
  const { open,changeOpen} = useToggleSideBar()

  return(
    <SideBarToggleBtn bgcolor={bgcolor} onMouseDown={onclick} onClick={()=>changeOpen(!open)}>
  <ToggleLogo scale={0.9} src={lgooSrc} />
    </SideBarToggleBtn>
  )

}

  