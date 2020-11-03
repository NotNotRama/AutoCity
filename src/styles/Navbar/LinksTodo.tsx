import styled from "@xstyled/styled-components";

const LinksTodo = styled.div`
  position: relative;
  display: flex;
  padding-left: 2rem;
  flex-direction: row;

  a {
    font-size: 2.2rem;
    padding-left: 5rem;
    text-decoration: none;
    color: #3c3c3b;

    :hover {
      color: #979793;
    }
  }
`;

export default LinksTodo;
