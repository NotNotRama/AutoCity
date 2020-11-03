import styled from "@xstyled/styled-components";

const DeletedTodos = styled.div`
  height: 40rem;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  justify-content: space-evenly;
  background-color: #f3f3f2;

  h1 {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #b20505;
    width: 15rem;
    border: 0;
    padding: 1.5rem;
    margin-left: 1rem;
    color: #ffffff;
    font-size: 14px;
  }

  ul li {
    list-style-type: none;
    background: #d6d9dc;
    margin: 1rem;
    height: 3.5rem;
    padding: 1rem 0 0 1rem;
    font-size: 1.4rem;
    width: 50%;
  }
`;

export default DeletedTodos;
