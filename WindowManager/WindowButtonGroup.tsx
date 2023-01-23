import React from 'react'
import { Box } from '@mui/material'
import {WindowBıtton} from './WindowBıtton'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material'


type WindowButtonGroup={
  onFull?:React.MouseEventHandler<HTMLElement>,
  onRefresh?:React.MouseEventHandler<HTMLElement>,
  onHide?:React.MouseEventHandler<HTMLElement>,
  onClose?:React.MouseEventHandler<HTMLElement>
}

export const WindowButtonGroup:React.FunctionComponent<WindowButtonGroup> =({onFull ,onRefresh , onHide, onClose}) => {
  const theme = useTheme()
  return (
    <Box sx={{display:'flex',flexDirection:'row'}} >
       <WindowBıtton onclick={onFull}  icon={<OpenInFullIcon sx={{ color:theme.palette.secondary.dark,fontSize:15}}  />} />
       <WindowBıtton onclick={onRefresh}  icon={<RefreshIcon sx={{color:theme.palette.secondary.dark,fontSize:15 }} />} />
       <WindowBıtton onclick={onHide}  icon={<KeyboardArrowDownIcon sx={{color:theme.palette.secondary.dark,fontSize:15}}  />} />
       <WindowBıtton onclick={onClose}  icon={<CloseIcon sx={{color:theme.palette.secondary.dark,fontSize:15}}  />} />
    </Box>
  )
}
