import { colorDefault,colorDefaultHover, colorOutlineHover, colorPrimary, colorPrimaryHover } from "../global"
import { styled } from "styled-components"


const StyleButton = styled.button`
    background-color:${colorDefault};
    border:none;
    padding:20px 30px;
    transition: all 1s;
    border-radius: 10px;
    box-shadow: 3px 3px 10px 0px rgba(191,191,191,1);
    cursor:pointer;
    
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

const Button = (props) => {
    const {variant, disabledShadow, disabled} = props
    if(disabled  && variant === "text"){
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