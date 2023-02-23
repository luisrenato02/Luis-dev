import styled from "styled-components";
export const Container = styled.div`
  width: 350px;
  height: auto;
  align-content: center;
  padding-top: 25px;
`;

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

export const Image = styled.img`
  float: left;
  display: flex;
`;

export const Nav = styled.nav`
  h3 {
    padding: 20px;
  }
  color: #5bc0be;
  li {
    text-align: end;
    justify-content: space-around;
  }
`;

export const UlNavbar = styled.ul`
  text-align: right;
  align-items: center;
  padding-top: 35px;
  padding-right: 200px;
`;

export const LiNavbar = styled.li`
  padding: 50px;
  display: inline;
`;
export const ANavbar = styled.a`
  font-size: 20px;

  &:hover {
    color: #fff;
  }
`;
