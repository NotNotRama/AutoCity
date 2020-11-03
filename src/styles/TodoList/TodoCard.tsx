import styled from "@xstyled/styled-components";

const TodoCard = styled.div<{ arrowColor?: string; deleteColor?: string; editColor?: string }>`
  height: 30rem;
  width: 40rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-around;
  background-color: #dfeef0;

  h1 {
    font-weight: 600;
    padding-left: 1.5rem;
  }

  p {
    font-weight: 300;
    padding-left: 1.5rem;
    font-size: 1.6rem;
  }
`;

export default TodoCard;
