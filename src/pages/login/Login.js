import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { formValidation } from "./validation/validation";
import { setUser, getDbTable, getLogin } from "../../database/firebase"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#383838;
    min-width: 35vw;
    height: 100vh;
    margin:auto;
`;

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

const MenuContainer = styled.ul`
    display:flex;
    padding:1rem 3rem;
    
    flex-direction:row;
    align-items:center;
    background-color:#201d1d;
    width:100%;
    max-width:450px;

    li{
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content:center;
        color:#FFF;
        border-bottom: 2px solid #2aa2c0;
        margin:5px;
        list-style:none;
    }

    a{
        font-style:none;
        text-decoration:none;
    }
`;

const Login = ()=>{

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);

    function handleChage(ev){
        setForm({...form, [ev.target.name]: ev.target.value})
    }

    function handleSubimit(ev){
        ev.preventDefault();
        
        try{
            //setUser(form.name, form.email, form.password) && setLoading(true);
            getLogin(form.email, form.password).then( result => {
                if(result === true){

                }else{
                    alert("Email ou senha invalidos");
                }
            })
        }catch{
            alert("Verifique os campos preenchidos e tente novamente");
        }
    }


    return(
        <Container>
            <MenuContainer>
                <li><a Link="/"> Login </a></li>
                <li><a Link="cadastro"> Cadastre-se </a></li>
            </MenuContainer>
            <Form>
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

                <div>
                    <p> Não possui conta? </p>
                    <a href="#">Cadastrar</a>
                </div>

                <Button
                    type="submit"
                    value="Enviar"
                    onClick={(ev)=> handleSubimit(ev) }
                    disabled={ !formValidation(form) }
                />

            </Form>
        </Container>
        )
    }
export default Login;