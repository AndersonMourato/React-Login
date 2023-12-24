import React from "react";
import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Container = styled.div`
    display:flex;
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


const Login = ()=>{
    return(
        <Container>
            <Form>
                <h1> Faça seu Login </h1>
                <Input/> 
                <Input/>   
                <Input/>   
                <Input/>     
                <div>
                    <p> Não possui conta? </p>
                    <a>Cadastrar</a>
                </div>
                <Button/>
            </Form>
        </Container>
        )
    }
export default Login;