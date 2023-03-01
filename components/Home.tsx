import Image from "next/image";
import { Apresentation } from "./style";
export const Home = () => {
  return (
    <main>
      <div>
        <div>
          <Image width={300} height={300} src="/../public/img/logo.png" />
        </div>
        <Apresentation>
          <h2>Luís Renato Toniati</h2>
          <h6>Desenvolvedor Web-JR</h6>
          <p>
            Olá, tenho 21 anos e sou formado em Análise e Desenvolvimento de
            sistemas, e atualmente sou desenvolvedor web na Infoluck Sistemas
            Comecei na área do desenvolvimento profisionalmente no início de
            2023, antes trabalhava como suporte na mesma software house, onde
            obtive conhecimento em SQL.
          </p>
        </Apresentation>
      </div>
    </main>
  );
};
