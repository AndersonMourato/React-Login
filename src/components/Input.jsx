import React from "react";
import styled from "styled-components";

const InputCustom = styled.input`
    color: #fff;
    font-size:20px;
    background-color:transparent;
    border:2px solid #6a6a6a;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 16px 20px;
    width:100%;

    input::placeholder{
        color:$FFF;
        font-size:12px;
        opacity: 0.7;
    }
`;
 
const Input = (props)=>{
    return(
        <InputCustom
            id = { props.id }
            className = { props.class }
            type = { props.type }
            name = { props.name }
            value = { props.value }
            placeholder = { props.placeholder }
            checked = { props.checked }
            onChange={ props.onChange }
            onClick={ props.onClick }
        />
    )
}
export default Input;