import React, { useState } from "react";
import styled from "styled-components";

export const NoteForm = ({ initial = {}, onSuccessSubmit }) => {

    const [field, setFields] = useState({
        title: "",
        text: "",
        color: "#4eb78d",
        ...initial
    });

    const onChange = e => {
        const { name, value } = e.target;
        setFields(field => ({
            ...field,
            [name]: value
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        let validation = true;
        for ( let key in field) {
            if (field[key] === "") {
                validation =false;
                alert(`Please, fill ${key} field`);
            }
        }
        if (validation) {
            onSuccessSubmit({
                id: Date.now(),
                date: Date.now(),
                ...field
            });
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Input
                type="text"
                name="title"
                value={field.title}
                onChange={onChange}
            />
            <Textarea
                type="text"
                name="text"
                value={field.text}
                onChange={onChange}
            />
            <ColorContainer>
                <RadioLabel color="#7bdcb5">
                    <input
                        type="radio"
                        name="color"
                        value="#7bdcb5"
                        checked={field.color === "#7bdcb5"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
                <RadioLabel color="#96c0db">
                    <input
                        type="radio"
                        name="color"
                        value="#96c0db"
                        checked={field.color === "#96c0db"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
                <RadioLabel color="#4eb78d">
                    <input
                        type="radio"
                        name="color"
                        value="#4eb78d"
                        checked={field.color === "#4eb78d"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
                <RadioLabel color="#85c286">
                    <input
                        type="radio"
                        name="color"
                        value="#85c286"
                        checked={field.color === "#85c286"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
                <RadioLabel color="#c4def6">
                    <input
                        type="radio"
                        name="color"
                        value="#c4def6"
                        checked={field.color === "#c4def6"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
                <RadioLabel color="#c4e2a2">
                    <input
                        type="radio"
                        name="color"
                        value="#c4e2a2"
                        checked={field.color === "#c4e2a2"}
                        onChange={onChange}
                    />
                    <span></span>
                </RadioLabel>
            </ColorContainer>
            <Submit>Create</Submit>

        </Form>
    )
};

const Form = styled.form`
    max-width: 500px;
    margin: 80px auto;
    padding: 30px 40px;
    background-color: #dbf0de;
    border-radius: 10px;
`;

const inputStyles = `
    display: block;
    border 2px solid transparent;
    transition: all .3s ease;
    width: 100%;
    padding: 10px;
    border-radius: 5px;

    &:focus {
        background-color: #dbf0de;
        outline: none;
    }
`;

const Input = styled.input`
    ${inputStyles}
`;

const Textarea = styled.textarea`
    ${inputStyles};
    height: 100px;
    margin-top: 10px;
    resize: none;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 50px;
    

    h4 {
        margin: 0 25px 0 0;
    }
`;

const RadioLabel = styled.label`
    input {
        display: none;
    }

    span {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        margin: 0 10px;
        background-color: ${p => p.color};
        border: 4px solid transparent;
        transition: all .3s ease;
        cursor: pointer;
    }

    input:checked + span {
        border-color: white;
    }
`;

const Submit = styled.button`
     ${inputStyles};
     text-transform: uppercase;
     font-family: cursive;
     font-weight: bold;
     background-color: #009688;
     color: white;
     font-size: 15px;
`;