import React, { useState } from 'react'

import { Box,Typography } from '@mui/material'
import {WindowButtonGroup} from './WindowButtonGroup'
import { useTheme } from '@mui/material'

type WindowManagerProps={
  children?:React.ReactNode,
  onContentRefresh?:React.MouseEventHandler<HTMLElement>,
  title?:string
}


export const WindowManager:React.FunctionComponent<WindowManagerProps> = ({children,onContentRefresh,title})=> {
    const theme = useTheme()
    const [Subdisplay,setSubDisplay ]= useState(true)
    const [Windisplay,setWinDisplay ]= useState(true)
    const [full,setFull] = useState(false)

  return (
   <Box sx={{
    maxHeight:full?'auto':446,
    overflow:'hidden',
    display:Windisplay ? 'flex':'none',flexDirection:'column',alignItems:'center',
    position:full?'absolute':'',
    zIndex:full?999:0,
    pt:full?6:1,
    right:0,top:0,
    width:full?'calc(100% - 50px)':'100%',
    height:full?'100vh':'auto',
    borderRadius:1.2,
    pl:1,
   }} >


    {/* windowbar */}
    <Box sx={{width:'100%',height:36,display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:theme.palette.primary.contrastText,borderTopLeftRadius:4,borderTopRightRadius:4  }} >

        {/* window title */}
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}} >
               <Typography fontSize={14} fontWeight="bold" ml={1} color={theme.palette.secondary.dark} variant='body1' > {title} </Typography>
        </Box>
       {/* window buttons */}
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}  >
            <WindowButtonGroup onFull={()=>setFull(!full)} onRefresh={onContentRefresh} onHide={()=>setSubDisplay(!Subdisplay)} onClose={()=>setWinDisplay(!Windisplay)} />
       </Box>

             
    </Box>
         {/* windowbar border */}
         <Box sx={{width:'98%',height:1.2,backgroundColor:'rgba(0,0,0,0.1)'}} ></Box>

     {/* window Content */}

     <Box sx={{display:Subdisplay ? 'block':'none', overflow:'auto',backgroundColor:theme.palette.primary.contrastText,width:'100%',height:full?'calc(100vh - 90px)':'auto'  }} >
     {children}
     </Box>


   </Box>
  )
}
