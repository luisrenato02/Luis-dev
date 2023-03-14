import { Container, ImageStyled } from "./styles";
import Image from "next/image";
import Js from "../../assets/js.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Sql from "../../assets/react.png";
import React from "../../assets/sql.png";
import { useState } from "react";

export const Skills = () => {
  const [showP, setShowP] = useState(false);

  return (
    <Container>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>
            <ImageStyled
              onClick={(e) => setShowP(!showP)}
              width={150}
              height={150}
              src={Js}
              alt={"JavaScript"}
            />
            <p className={`${showP ? "showP" : ""}`}>
              JavaScript é uma linguagem de programação interpretada
              estruturada, de script em alto nível com tipagem dinâmica fraca e
              multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das
              três principais tecnologias da World Wide Web
            </p>
          </li>
          <li>
            <ImageStyled
              onClick={() => setShowP(!showP)}
              width={150}
              height={150}
              src={Html}
              alt={"Html"}
            />
            <p className={`${showP ? "showP" : ""}`}>
              HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web. Documentos HTML podem ser interpretados por
              navegadores. A tecnologia é fruto da junção entre os padrões
              HyTime e SGML. HyTime é um padrão para a representação estruturada
              de hipermídia e conteúdo baseado em tempo.
            </p>
          </li>
          <li>
            <ImageStyled
              onClick={() => setShowP(!showP)}
              width={150}
              height={150}
              src={Css}
              alt={"Css"}
            />
            <p className={`${showP ? "showP" : ""}`}>
              Cascading Style Sheets é um mecanismo para adicionar estilos a uma
              página web, aplicado diretamente nas tags HTML ou ficar contido
              dentro das tags. Também é possível, adicionar estilos adicionando
              um link para um arquivo CSS que contém os estilos.
            </p>
          </li>
          <li>
            <ImageStyled
              onClick={() => setShowP(!showP)}
              width={150}
              height={150}
              src={React}
              alt={"React"}
            />
            <p className={`${showP ? "showP" : ""}`}>
              O React é uma biblioteca front-end JavaScript de código aberto com
              foco em criar interfaces de usuário em páginas web.
            </p>
          </li>
          <li>
            <ImageStyled
              onClick={() => setShowP(!showP)}
              width={150}
              height={150}
              src={Sql}
              alt={"SQL"}
            />
            <p className={`${showP ? "showP" : ""}`}>
              Structured Query Language, ou Linguagem de Consulta Estruturada ou
              SQL, é a linguagem de pesquisa declarativa padrão para banco de
              dados relacional. Muitas das características originais do SQL
              foram inspiradas na álgebra relacional.
            </p>
          </li>
        </ul>
      </section>
    </Container>
  );
};
