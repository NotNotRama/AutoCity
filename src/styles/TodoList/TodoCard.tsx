import styled from "@xstyled/styled-components";

const TodoCard = styled.div`
  height: 30rem;
  width: 20rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-around;
  background-color: violet;

  svg {
    width: 10rem;
    height: 10rem;
    color: red;
  }
`;

export default TodoCard;
