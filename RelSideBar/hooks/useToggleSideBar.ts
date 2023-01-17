import React from 'react';

import { ToggleSideContext, SidebarContextProps } from '../RelSideBarPropvider';

export const useToggleSideBar = (): SidebarContextProps => {
  const context = React.useContext(ToggleSideContext);
  if (context === undefined) {
    throw new Error('ProSidebarProvider is required!');
  }
    
  return context;
};