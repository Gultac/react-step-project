import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {  postsFetch } from "../../API/fetchAPI";
import { Container } from "../../commons";
import { NavLink } from "react-router-dom";

export const SingleNote = ({ match }) => {


  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await postsFetch();
      setData(data[match.params.id - 1]);
      setFetchData(data);
    })();
  }, []);

  return (
    <>
      {data && (
        <Container>
          <Row>
            <NoteContainer color={data.color}>
              <NoteHeader>
                <Title>{data.title}</Title>
              </NoteHeader>
              <Text>{data.text}</Text>
            </NoteContainer>
            <Div>
              <StyledNavLink
                to="/create"
                onClick={() => {
                  localStorage.setItem("item", JSON.stringify(data));
                }}
              >
                Edit
              </StyledNavLink>
              <Button>Archive</Button>
              <Button>Delete</Button>
            </Div>
          </Row>

        </Container>
      )}
    </>
  );
};

const Button = styled.button`
  border: none;
  margin: 0 12px 12px 18px;
  padding: 8px 30px;
  text-align: center;
  background-color: #009688;
  color: white;
  font-size: 16px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  background-color: #009688;
  color: white;
  margin: 80px auto 18px;
  padding: 8px 30px;
  font-size: 16px;
`;
const Row = styled.div`
  justify-content: center;
`;
const Div = styled.div`

`;
const NoteContainer = styled.div`
  background-color: ${(p) => p.color};
  margin: 50px auto;
  padding: 10px;
  border-radius: 10px;
  color: white;
  width: 300px;
  min-height: 300px;
`;
const NoteHeader = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid white;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;