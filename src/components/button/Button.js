import React from "react";
import styled from "styled-components";

const ButtonCustom = styled.button`
    color: #fff;
    font-size:20px;
    background-color:#6a6a6a;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 16px 20px;
    width:100%;
    height:50px;
    cursor: pointer;
`;

const Button = ( props )=>{
    return(
        <ButtonCustom
            id = { props.id }
            className = { props.class }
            type = { props.type }
            name = { props.name }
            value = { props.value }
            onChange={ props.onChange }
            onClick={ props.onClick }
        >
            { props.value }
        </ButtonCustom>
    )
}
export default Button;