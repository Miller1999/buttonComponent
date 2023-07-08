import { colorDefault,colorDefaultHover, colorOutlineHover, colorPrimary, colorPrimaryHover, colorSecondary, colorSecondaryHover, colorDanger, colorDangerHover } from "../global"
import { styled } from "styled-components"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyleButton = styled.button`
    background-color:${colorDefault};
    border:none;
    padding:20px 30px;
    transition: all 1s;
    border-radius: 10px;
    box-shadow: 3px 3px 10px 0px rgba(191,191,191,1);
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:10px;
    &:hover, &:focus{
        background-color: ${colorDefaultHover}
    }
`
const OutlineButton = styled(StyleButton)`
    border: ${colorPrimary} 2px solid;
    background-color: transparent;
    color:${colorPrimary};

    &:hover, &:focus{
        background-color: ${colorOutlineHover}
    }
`
const TextButton = styled(StyleButton)`
    background-color: transparent;
    color:${colorPrimary};
    box-shadow: none;

    &:hover, &:focus{
        background-color: ${colorOutlineHover}
    }
`
const DisabledShadow = styled(StyleButton)`
    box-shadow: none;
    background-color: ${colorPrimary};
    color: white;
    &:hover, &:focus{
        background-color: ${colorPrimaryHover}
    }
`
const Disabled = styled(StyleButton)`
    background-color:${colorDefault};
    color:${colorDefaultHover};
    box-shadow: none;
    &:hover, &:focus{
        background-color:${colorDefault};
        cursor: not-allowed;
    }
`
const DisabledText = styled(TextButton)`
    color:${colorDefault};
    &:hover, &:focus{
        background-color: transparent;
        cursor:not-allowed;
    }
`
const SmallButton = styled(StyleButton)`
    padding: 10px 15px;
`   
const LargeButton = styled(StyleButton)`
    padding: 30px 40px;
`
const Primary = styled(StyleButton)`
    background-color:${colorPrimary};
    color:white;

    &:hover, &:focus{
        background-color: ${colorPrimaryHover};
    }
`
const Secondary = styled(StyleButton)`
    background-color:${colorSecondary};
    color:white;

    &:hover, &:focus{
        background-color: ${colorSecondaryHover};
    }
`
const Danger = styled(StyleButton)`
    background-color:${colorDanger};
    color:white;

    &:hover, &:focus{
        background-color: ${colorDangerHover};
    }
`

const Button = (props) => {
    const {variant, disabledShadow, disabled, startIcon, endIcon, size, color} = props
    if(color==="primary"){
        return( <Primary>Default</Primary>)
    }
    else if(color === "secondary"){
        return( <Secondary>Default</Secondary>)
    }
    else if(color === "danger"){
        return( <Danger>Default</Danger>)
    }
    else if(size === "sm"){
        return (<SmallButton>Default</SmallButton>)
    }
    else if(size === "lg"){
        return (<LargeButton>Default</LargeButton>)
    }   
    else if(startIcon){
        return(<StyleButton><ShoppingCartIcon/> Default</StyleButton> )
    }
    else if(endIcon){
        return(<StyleButton>Default <ShoppingCartIcon/></StyleButton>)
    }
    else if(disabled  && variant === "text"){
        return(<DisabledText>Disabled</DisabledText>)
    }else if(disabled){
        return(<Disabled>Disabled</Disabled>)
    }
    else{
        if(disabledShadow){
            return(<DisabledShadow>Default</DisabledShadow>)
        }else{
            if(variant === "outline"){
                return(<OutlineButton>Default</OutlineButton>)
            }else if(variant === "text"){
                return(<TextButton>Default</TextButton>)
            }else{
                return(<StyleButton>Default</StyleButton>)
            }
        }
    }
}

export default Button