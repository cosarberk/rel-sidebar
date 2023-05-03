import { SideBar, GlobalStyle } from "../styled/sidebar";
import { useTheme } from '@mui/material/styles';



type RelSideBarProps={
  children?:any,
  open?:boolean,
  SideBarContent?:any
}

export const RelSideBar:React.FunctionComponent<RelSideBarProps> = ({ children ,open,SideBarContent}:RelSideBarProps) => {
  const theme = useTheme();
  return (
   <>
   
   <GlobalStyle />
      <SideBar color={theme.palette.primary.dark} width={open ? 47 : 251} > {SideBarContent} </SideBar>

      {children}
   
   </>

  
  );
};
