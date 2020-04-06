import React, { useState, useEffect } from "react";
import { createFetch, postsFetch } from "../../API/fetchAPI";

import { Container } from "../../commons";
import { NoteForm } from "../../components";

export const Create = ({ history }) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await postsFetch();
      setFetchData(data);
    })();
  }, []);
  const createNote = note => {
    createFetch("", note);
    history.push("/");
  };


  return (
    <Container>
      <h1>Create</h1>
      <NoteForm
        submitBtnText="Create"
        onSuccessSubmit={
            createNote
        }
      />
    </Container>
  )
};