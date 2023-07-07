
import styled, { createGlobalStyle } from "styled-components";

//Colors

export const colorDefault = "#e0e0e0"
export const colorDefaultHover = "#aeaeae"
export const colorPrimary = "#2962ff"
export const colorPrimaryHover = "#0039cb"
export const colorSecondary = "#455a64"
export const colorSecondaryHover = "#1c313a"
export const colorDanger = "#d32f2f"
export const colorDangerHover = "#9a0007"
export const colorOutlineHover = "#eaefff"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Raleway";
        font-weight:900;
        font-size:20px;
        box-sizing:border-box;
    }
    body{
        width:100%;
        height:100vh;
    }
`
export const StyledDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:50px;
`

export default GlobalStyle