import { Nav, Group, Icon } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header>
      <Nav>
        <h3>&lt; Luis Renato / &gt;</h3>
        <Icon id="icon">
          <GiHamburgerMenu style={{}} onClick={() => setShowMenu(!showMenu)} />
        </Icon>

        <Group className={`${showMenu ? "menu-open" : ""}`}>
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
