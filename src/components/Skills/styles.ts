import Image from "next/image";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-top: 5vw;

  h2 {
    color: #5bc0be;
    margin-left: 5vw;
  }

  ul {
    display: flex;
    list-style: none;
  }

  p {
    display: none;
    &.showP {
      display: block;
    }
  }
`;

export const ImageStyled = styled(Image)`
  margin: 5vw;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px black;
  }
`;
