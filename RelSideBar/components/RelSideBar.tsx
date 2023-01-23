import { SideBar, GlobalStyle } from "../styled/sidebar";



type RelSideBarProps={
  children?:any,
  open?:boolean,
  SideBarContent?:any,
  bgColor?:string
}

export const RelSideBar:React.FunctionComponent<RelSideBarProps> = ({ children ,bgColor,open,SideBarContent}:RelSideBarProps) => {

  return (
   <>
   
   <GlobalStyle />
      <SideBar color={bgColor} width={open ? 47 : 251} > {SideBarContent} </SideBar>

      {children}
   
   </>

  
  );
};
