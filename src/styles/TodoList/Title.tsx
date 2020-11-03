import styled from "@xstyled/styled-components";

const Title = styled.h1<{ titleColor: string }>`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1.4rem;
  background-color: ${({ titleColor }) => titleColor && titleColor};
  min-width: 30rem;
  color: #e7eeee;
`;

export default Title;
