import { Nav, Group, Icon } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const MenuMobile = (el) => {
    var display = document.getElementById.style.display;
    if(display == 'none'
    document.getElementById(el)?.style.display = 'block'
    else
    document.getElementById(el)?.style.display = 'none'
  };

  return (
    <header>
      <Nav>
        <h3>&lt; Luis Renato / &gt;</h3>
        <Icon id='icon' onClick={(icon) => console.log("teste")}>
          <GiHamburgerMenu style={{}} />
        </Icon>
        <Group>
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </Group>
      </Nav>
    </header>
  );
};
