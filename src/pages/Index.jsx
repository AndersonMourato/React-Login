import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

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
        text-decoration:none;
        font-style:none;
        color: #fff;
        margin:5px auto;
        width:100%;
        text-align:center;
    }

    li:hover{
        border-bottom: 2px solid #82d0e3;
        background-color:#666666;
    }
`;

const Index = ()=>{

    return(
        <Container>
            <MenuContainer>
                <li><Link to="sing-in"> Login </Link></li>
                <li><Link to="sing-up"> Cadastre-se </Link></li>
            </MenuContainer>
            
            <Outlet/>
        </Container>
        )
    }
export default Index;