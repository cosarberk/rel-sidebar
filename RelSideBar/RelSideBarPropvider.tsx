import React, { createContext,useState } from "react";

export type SidebarContextProps={
  open?:boolean,
  changeOpen:(o:boolean)=>void
}

export const ToggleSideContext = createContext<SidebarContextProps>({
  open:false,
  changeOpen:()=>{}
})

export interface SidebarProviderProps {
  children?: React.ReactNode;
}

export const RelSideBarPropvider:React.FunctionComponent<SidebarProviderProps>=({children})=>{
  const [open, changeOpen] = useState<boolean>()
  return <ToggleSideContext.Provider value={{open,changeOpen}}>{children}</ToggleSideContext.Provider>;
    
  

}
