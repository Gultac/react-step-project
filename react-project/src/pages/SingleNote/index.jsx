import React, { useEffect, useState } from 'react';


export const SingleNote = () => {

    const [notes, setNotes] = useState([]);

    const [fields, setFields] = useState({
        title: "",
        text: ""
    });
    const onFieldChange = e => {
        const { name, value } = e.target;
        setFields(fields => ({
            ...fields,
            [name]: value

        }));
    };
    const onSubmit = e => {
        e.preventDefault();
        createNote(fields);

    };

    const getNotes = async () => {
        try {
            const res = await fetch("http://localhost:3001/notes");
            const data = await res.json();

            setNotes(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createNote = async ({ title, text }) => {
        try {
            const res = await fetch("http://localhost:3001/notes", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, text })
            });
            const answer = await res.json();
            getNotes();
            console.log(answer);

        }
        catch (error) {
            console.log(error);
        }
    };

    const editNote = async (id, { title, text }) => {
        try {
            const res = await fetch(`http://localhost:3001/notes/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, text })
            });
            const answer = await res.json();
            getNotes();
            console.log(answer);

        }
        catch (error) {
            console.log(error);
        }
    }

    const deleteNote = async id => {
        try {
            const res = await fetch(`http://localhost:3001/notes/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json"
                }

            });
            const answer = await res.json();
            getNotes();
            console.log(answer);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNotes();
    }, []);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='title'
                    value={fields.title}
                    onChange={onFieldChange}
                />
                <input
                    type='text'
                    name='text'
                    value={fields.text}
                    onChange={onFieldChange}
                />
                <button>send</button>
            </form>
            <ul>
                {notes.map(({ id, title, text }) => (
                    <li key={id}>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <button onClick={() => editNote(id, fields)}>edit</button>
                        <button onClick={() => deleteNote(id)}>delete</button>

                    </li>
                ))}
            </ul>
        </div>
    );

};