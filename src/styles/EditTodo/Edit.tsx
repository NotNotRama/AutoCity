import styled from "@xstyled/styled-components";

const EditTodo = styled.div`
  height: 40rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: yellow;

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
    }
  }
`;

export default EditTodo;
