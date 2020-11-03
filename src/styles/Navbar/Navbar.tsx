import styled from "@xstyled/styled-components";

const Navbar = styled.div`
  height: 8vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e1deda;

  h1 {
    font-weight: 4rem;
    padding-right: 15rem;
    letter-spacing: 3px;
    font-weight: bold;
  }
`;

export default Navbar;
