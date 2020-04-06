import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// import images from "../styles/img";

export const Header = () => {
  return (
    <Container>
      <Logo>NotesApp</Logo>
      <div>
        <StyledNavLink exact to="/">
          Actual
        </StyledNavLink>
        <StyledNavLink to="/archive">
          
          Archive
        </StyledNavLink>
        <StyledNavLink to="/create">
          
          Create
        </StyledNavLink>
      </div>
    </Container>
  );
};

const Container = styled.header`
    background: #009688;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin: 0 60px;
`;

const Logo = styled.div`
    font-size: 35px;
    font-weight: bold;
    color: white;
    font-family: cursive;
`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    color: #009688;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px 15px;
    min-width: 150px;
    text-align: center;
    font-family: cursive;
    font-weight: bold;
    background-color: white;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: all .3s ease-out;
    
    span {
        margin-right: 10px;
    }
    
    &.active {
        background-color: #dbf0de;
    }
`;