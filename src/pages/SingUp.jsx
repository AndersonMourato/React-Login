import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

import { formValidationSingUp } from "../validation/validation";
import { setUser, getUser } from "../database/firebase"
import { Navigate } from "react-router-dom";


const Form = styled.form`
    display:flex;
    padding:3rem;
    flex-direction:column;
    align-items:center;
    background-color:#201d1d;
    width:100%;
    max-width:450px;
    gap:30px 0px;

    h1{
        color:white;
        font-size:20px;
        font-weight:light;
    }

    p{
        color:white;
        font-size:16px;
        font-weight: 100;
    }

    a{
        color:white;
        font-size:12px;
        font-weight: 100;
    }
`;

const SingUp = ()=>{

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);

    function handleChage(ev){
        setForm({...form, [ev.target.name]: ev.target.value})
    }

    function handleSubimit(ev){
        ev.preventDefault();
        
        try{
            getUser(form.email).then( result => {
                if(result === true){
                    alert("Já existe uma conta com esté email " + form.email);
                }else{
                    setUser(form.name, form.email, form.password)
                    alert("Usuario cadastrado com exito!")
                    setLoading(true)
                }
            })
        }catch{
            alert("Verifique os campos preenchidos e tente novamente");
        }
    }


    return(
        <Form>
            {
                loading === true && <Navigate to="/sing-in" />
            }
            <h1> Faça seu Cadastro </h1>

            <Input
                name="name"
                type="text"
                placeholder="Digite seu nome"
                onChange={ (ev)=> handleChage(ev) }
            /> 
            <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={ (ev)=> handleChage(ev) }
            /> 
            <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
                onChange={ (ev)=> handleChage(ev) }
            />      
            
            <Button
                type="submit"
                value="Enviar"
                onClick={(ev)=> handleSubimit(ev) }
                disabled={ !formValidationSingUp(form) }
            />

        </Form>
        )
    }
export default SingUp;