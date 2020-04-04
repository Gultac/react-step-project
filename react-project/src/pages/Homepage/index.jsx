import React, { useState, useEffect } from "react";
import {Container, Row} from "../../commons";
import { Note } from "./Note";

import { postsFetch } from '../../API/fetchAPI';



    export const Homepage = () => {

        const [notes, setNotes] = useState([]);

        useEffect(() => {
            (async () => {
                const data = await postsFetch();
                setNotes(data);
            })()
        }, []);


        return (
            <Container>
                <Row>
                    {!!notes.length ?
                        notes.map(({ title, text, id, color }) => (
                            <Note
                                key={id}
                                title={ title }
                                text={ text }
                                color={ color }
                            />
                        ))
                        :
                        null
                    }
                </Row>
            </Container>
        )

};