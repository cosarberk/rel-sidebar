import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export  interface IMenuItemProps{
  width?:number,
  height?:number,
  bgcolor?:string,
  color?:string,
  disabled?:boolean,
  }


export const ManuItem = styled.div<IMenuItemProps>`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "37px")};
  border-bottom: 1px solid #333;
  float: left;
  overflow: hidden;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "transparent"};
  color: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;
  transition: 0.5s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select:${(props) => (props.disabled ? "none": "")};
  pointer-events:${(props) => (props.disabled ? "none" : "all")};
  opacity:${(props) => (props.disabled ? 0.6 : 1)};
  &:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.12);
  }
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;


export interface IItemIcon{
  width?:number,
  height?:number,
  fsize?:number,
  bold?:boolean,
  rotate?:string | any
}


const ItemIcon = styled.div<IItemIcon>`
  width: ${(props) => (props.width ? props.width + "px" : "46px")};
  min-width: ${(props) => (props.width ? props.width + "px" : "46px")};
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  font-size: ${(props) => (props.fsize ? props.fsize + "px" : "15px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  display: inline-flex;
  float: left;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition:0.1s linear;
  transform:${(props)=>props.rotate ? props.rotate : "rotate(0deg)"} ;
`;

//gereksiz mouseover hatasını engeller
const ItemIconSafer = styled.div`
  pointer-events: none;
`;


export interface IItemTitle{
  fsize?:number,
  bold?:boolean,
  color?:string
}

const ItemTitle = styled.p<IItemTitle>`
  font-size: ${(props) => (props.fsize ? props.fsize + "px" : "15px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  text-overflow: ellipsis;
  margin-left: 6px;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;
  float: left;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  pointer-events: none;
`;


export interface IFreeMenuArea{
  width?:number,
  display?:string,
  top?:number,
  left?:number,
  bgcolor?:string
}

const FreeMenuArea = styled.div<IFreeMenuArea>`
  width: ${(props) => (props.width ? props.width + "px" : "251px")};
  height: auto;
  max-height: 400px;
  position: fixed;
  display: ${(props) => props.display};
  top: ${(props) => props.top + "px"};
  z-index: 99;
  left: ${(props) => (props.left ? props.left + "px" : "46px")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "blue")};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: black; 
  }
   
  &::-webkit-scrollbar-thumb {
    background: orange; 
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: orange; 
  }



`;


export interface IFreeMenuTitleBar{
  bgcolor?:string
}

const FreeMenuTitleBar = styled.div<IFreeMenuTitleBar>`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "darkblue")};
  width: 100%;
  user-select: none;
`;

const RelLink = styled.a`
  text-decoration: none;

`;



export interface IMenuItemChildHome{
  width?:number,
  height?:number|string,
  sunMargin?:number,
  bgcolor?:string
}

const MenuItemChildHome = styled.div<IMenuItemChildHome>`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : 0)};
  overflow: hidden;
  margin-left: ${(props) => (props.sunMargin ? props.sunMargin + "px" : 0)};
  transition: 0.5s linear;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "rgba(0,0,0,0.3)"};
`;








type RelMenuItemProps={
  width?:number,
  height?:number,
  children?: any[],
  IconItem?:any,
  label?:string,
  IconItemEnd?:any,
  subAreaBgColor?:string,
  sunMargin?:number,
   to?:any,
   disabled?:boolean
}

export const RelMenuItem:React.FunctionComponent<RelMenuItemProps> = ({

  width,
  height,
  children,
  IconItem,
  label,
  IconItemEnd,
  subAreaBgColor,
  sunMargin,
   to,
   disabled
}:RelMenuItemProps) => {



  const [HideH, SHideH] = useState<number | string>(0);
  const [iconAnimation,setIcaonAnimation ]= useState<string>('rotate(0deg)')
  function toggleChild(e:any) {
    e.preventDefault();

    if(HideH === 0) {SHideH("auto");setIcaonAnimation('rotate(-90deg)') }else {SHideH(0);setIcaonAnimation('rotate(0deg)')}
  }



  
  return (
    <div>

        <ManuItem
         disabled={disabled}
          width={width}
          height={height}
          onClick={(e) => toggleChild(e)}
        >
            <Link style={{display:'inline-flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}} to={children?.length !==0 ? null:to} >
          <ItemIcon>
            <ItemIconSafer>{IconItem}</ItemIconSafer>
          </ItemIcon>
           <div style={{display:'inline-flex',flexDirection:'row',justifyContent:'flex-start',width:'100%',overflow:'hidden'}} >
           <ItemTitle>{label}</ItemTitle>
           </div>
      
         
          <ItemIcon rotate={iconAnimation} >{IconItemEnd ? IconItemEnd : ""}</ItemIcon>
          </Link>
        </ManuItem>
     
      <MenuItemChildHome
        sunMargin={sunMargin}
        bgcolor={subAreaBgColor}
        height={HideH}
      >
 
        {children}
     
      </MenuItemChildHome>
    
    </div>
  );
};

type IFreeMenuItemProps={
  children?:any,
  top?:number,
  onMouseOut?:any,
  onMouseOver?:any,
  display?:string,
  label?:string,
  bgcolor?:string,
  TitleColor?:string,
  Titlebgcolor?:string,
}



const FreeMenuItem:React.FunctionComponent<IFreeMenuItemProps> = ({
  children,
  top,
  onMouseOut,
  onMouseOver,
  display,
  label,
  bgcolor,
  TitleColor,
  Titlebgcolor,
}:IFreeMenuItemProps) => {
  return (
    <FreeMenuArea
      top={top}
      onMouseOut={onMouseOut}
      onMouseMove={onMouseOver}
      display={display}
      bgcolor={bgcolor}
    >
      <>
        <FreeMenuTitleBar bgcolor={Titlebgcolor}>
          <ManuItem>
            <ItemTitle color={TitleColor}>{label}</ItemTitle>
          </ManuItem>
        </FreeMenuTitleBar>

        {children}
      </>
    </FreeMenuArea>
  );
};

type RelHoverMenuItemProps={
  width?:number,
  height?:number,
  IconItem?:any,
  label?:string,
  sunMargin?:number,
  IconItemEnd?:any,
  FreeMenuItemTitlebgcolor?:string,
  FreeMenuItembgcolor?:string,
  TitleColor?:string,
  children?: any[],
  subAreaBgColor?:string,
  to?:any | null,
  disabled?:boolean
}

export const RelHoverMenuItem:React.FunctionComponent<RelHoverMenuItemProps> = ({

  width,
  height,
  IconItem,
  label,
  sunMargin,
  IconItemEnd,
  FreeMenuItemTitlebgcolor,
  FreeMenuItembgcolor,
  TitleColor,
  children,
  subAreaBgColor,
  to,
  disabled
}:RelHoverMenuItemProps) => {



  const [FreeT, SFreeT] = useState<number>(0);
  const [FreeD, SFreeD] = useState<string>("none");
  const [HideH, SHideH] = useState<number | string>(0);
  const [iconAnimation,setIcaonAnimation ]= useState<string>('rotate(0deg)')

  function getSidebarStatus():number {
    const f:any = document.querySelector(".SideBar");
    const fw = f.getAttribute("width");

    return fw;
  }

  const hoverIcon = (e:any) => {
    e.preventDefault();
    console.log(e)
    const element = e.pageY; 
    const top = element.top;
    const w = e.target.getBoundingClientRect().width;
    if (getSidebarStatus() > w * 1.1) {
      return;
    }
    SFreeT(top);
    SFreeD("");
  };

  const toggleChild = (e:any) => {
    e.preventDefault();
    if (FreeD !== "none") {
      return;
    }
    if(getSidebarStatus() <60){
      SHideH(0)
    }
    if(HideH === 0) {SHideH('auto');setIcaonAnimation('rotate(-90deg)') }else {SHideH(0);setIcaonAnimation('rotate(0deg)')}
  };

  useEffect(()=>{
    if(getSidebarStatus() <60){
      setIcaonAnimation('rotate(0deg)')
      SHideH(0)
    }
  })

  return (
    <div>
     
      <FreeMenuItem
        top={FreeT}
        onMouseOut={() => { SFreeD("none")}}
        onMouseOver={(e: any) => hoverIcon(e)}
        display={FreeD}
        label={label}
        TitleColor={TitleColor}
        Titlebgcolor={FreeMenuItemTitlebgcolor}
        bgcolor={FreeMenuItembgcolor}
      >
        < div onMouseOver={()=>SFreeD("")} onMouseOut={()=>SFreeD("")} >
        {children}
        </div>
       
      </FreeMenuItem>
    
      <ManuItem
        disabled={disabled}
        width={width}
        height={height}
        onClick={(e:any) => toggleChild(e)}
      >
      <Link style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}} to={children?.length !==0 ? null:to} >

     
        <ItemIcon
         fsize={5}  
          onMouseOut={(e:any) => SFreeD("none")}
          onMouseMove={(e:any) => hoverIcon(e)}
        >
        
          <ItemIconSafer>{IconItem}</ItemIconSafer>
        </ItemIcon>
        <div style={{display:'inline-flex',flexDirection:'row',justifyContent:'flex-start',width:'100%',overflow:'hidden'}} >
           <ItemTitle >{label}</ItemTitle>
           </div>
    
        <ItemIcon rotate={iconAnimation}  >{IconItemEnd ? IconItemEnd : ""}</ItemIcon>
        </Link>
      </ManuItem>

      <MenuItemChildHome
        sunMargin={sunMargin}
        bgcolor={subAreaBgColor}
        height={HideH}
      >
        {children}

     
      </MenuItemChildHome>
    </div>
  );
};
