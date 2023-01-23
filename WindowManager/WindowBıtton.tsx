import React from "react";
import { Box, ButtonBase } from "@mui/material";


type WindowBıttonProps={
  icon?:React.ReactNode,
  onclick?:React.MouseEventHandler<HTMLElement>
}



export const WindowBıtton:React.FunctionComponent<WindowBıttonProps> =({ icon, onclick })=> {
  return (
    <ButtonBase onClick={onclick}>
      <Box sx={{ width: 36, height: "100%" }}>{icon}</Box>
    </ButtonBase>
  );
}
