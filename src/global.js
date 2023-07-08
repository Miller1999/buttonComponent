
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
        padding:20px 150px;
    }
    h1{
        font-family: "Raleway";
        font-weight:900;
        font-size:40px;
    }
    h2{
        padding:20px;
        font-family: "Raleway";
        font-weight:900;
        font-size:20px;
        color:gray;
    }
`
export const StyledDiv = styled.div`
    display:flex;
    align-items:center;
    padding:50px;
    gap:30px;
`

export default GlobalStyle