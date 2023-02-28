import styled from "styled-components";

// export const Content = styled.div`
//   width: 1120px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
// `;

// export const Title = styled.div`
//   font-size: 30px;
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 560px) {
//     flex-direction: column;
//     background-color: #fff;
//     position: fixed;
//     height: 100%;

//     gap: 0px;
//     top: 0px;
//   }
// `;

// export const ContentTitle = styled.div`
//   text-align: end;
// `;

// export const SubTitle = styled.span``;

export const Nav = styled.nav`
  grid-template-columns: auto auto;
  display: grid;
  width: 100%;
  height: 7vh;
  background-color: #0b132b;
  justify-content: space-between;
  align-items: center;
  color: #5bc0be;

  h3 {
    margin-left: 5vh;
    font-size: 22px;
    letter-spacing: 4px;
    transition: 0.3s;

    &:hover {
      letter-spacing: 6px;
    }

    @media (max-width: 1129px) {
      font-size: 18px;
      margin-left: 10px;
    }
  }

  ul {
    display: flex;

    @media (max-width: 1129px) {
      position: absolute;
      top: 7vh;
      right: 0;
      width: 50vw;
      height: 93vh;
      background-color: #0b132b;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  li {
    list-style: none;
    margin-left: 70px;
    margin-right: 10vh;
  }

  a {
    color: #5bc0be;
    font-size: 16px;
    transition: 0.3s;
    letter-spacing: 2px;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
      letter-spacing: 4px;
    }
  }
`;

export const Group = styled.div`
  margin-right: "10vh";
`;

export const Icon = styled.div`
  display: none;

  @media (max-width: 1129px) {
    display: block;
    margin-right: 2vh;
    justify-content: center;
  }
`;

export const Apresentation = styled.div`
  h2 {
    color: #5bc0be;
  }

  h6 {
    color: #5bc0be;
  }

  p {
    max-width: 50vw;
  }
`;
