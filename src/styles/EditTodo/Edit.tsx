import styled from "@xstyled/styled-components";

const EditTodo = styled.div`
  height: 40rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f3f3f2;

  form {
    display: flex;
    flex-direction: column;
    width: 30rem;
    justify-content: space-around;

    h1 {
      margin-bottom: 2rem;
    }

    input {
      margin-bottom: 3rem;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 300px;
      border: none;
      border-bottom: 1px solid #757575;
      background-color: #f3f3f2;
    }

    input:focus {
      outline: none;
    }

    button {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #0682c4;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;

      :hover {
        background: #02699f;
      }
    }
  }
`;

export default EditTodo;
