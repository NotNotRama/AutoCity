import styled from "@xstyled/styled-components";

const Icons = styled.div<{ arrowColor?: string }>`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 15rem;
  padding-right: 3rem;
  justify-content: space-between;
  align-self: flex-end;

  svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1.3rem;
  }

  svg:nth-of-type(1) {
    color: #636363;
  }

  svg:nth-of-type(2) {
    color: #b20505;
  }
  svg:nth-of-type(3) {
    color: ${({ arrowColor }) => arrowColor && arrowColor};
  }
`;

export default Icons;
