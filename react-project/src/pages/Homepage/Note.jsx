import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Note = ( {title, text, id, color} ) => {
    return (
        <Link
            to={`/notes/${id}`}>
            <NoteContainer color={color}>
                <NoteHeader>
                    <Title>{title}</Title>
                </NoteHeader>
                <Text>{text}</Text>
            </NoteContainer>
        </Link>
    )
};

const NoteContainer = styled.div`
    background-color: ${p => p.color};
    padding: 10px;
    border-radius: 10px;
    color: white;
`;

const NoteHeader = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid white;
    margin: 5px 20px;
    color: white;
    font-family: cursive;
    text-align: center;
    text-transform: uppercase;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: 
`;

const Text = styled.p`
    text-align: center;
    text-align: justify;
    margin: 15px 20px;
`;