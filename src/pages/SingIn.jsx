import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

import { formValidationSingIn } from "../validation/validation";
import { getLogin } from "../database/firebase"


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

const SingIn = ()=>{

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);

    function handleChage(ev){
        setForm({...form, [ev.target.name]: ev.target.value});
    }

    function handleSubimit(ev){
        ev.preventDefault();
        
        try{
            //setUser(form.name, form.email, form.password) && setLoading(true);
            getLogin(form.email, form.password).then( result => {
                if(result === true){
                    //REDIRECIONAR PARA PROXIMA PAGINA
                    alert("Paraben, login realizado com sucesso!");
                }else{
                    alert("Email ou senha invalidos");
                }
            })
        }catch{
            alert("Verifique os campos preenchidos e tente novamente");
        }
    }


    return(
        <Form>
            <h1> Login </h1>

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
                value="Entrar"
                onClick={(ev)=> handleSubimit(ev) }
                disabled={ !formValidationSingIn(form) }
            />

        </Form>
        )
    }
export default SingIn;