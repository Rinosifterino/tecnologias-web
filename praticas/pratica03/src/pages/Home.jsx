import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import Painel from "../components/Painel";
import "./Home.css";
export default Home;

function Home() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Conteudo>
        <Menu />
        <Secao texto="Página Inicial">
          <div estilo="card-grid">
            <Painel
              texto="Mural de Avisos"
              itens={[
                "Inscrições para Cursos deExtensão",
                "Evento Maratona de Programação",
                "Palestra sobre InteligênciaArtificial",
              ]}
            />
            <Painel
              texto="Agenda Acadêmica"
              itens={[
                "Semana de Provas P1",
                "Entrega deTrabalhos",
                "Apresentação de TCC",
              ]}
            />
            <Painel
              texto="Histórico de Notas"
              itens={[
                "Lógica de Programação - 5,5",
                "Banco de Dados - 7,8",
                "Engenharia de Software - 5,3",
              ]}
            />
            <Painel
              texto="Histórico de Faltas"
              itens={[
                "Lógica de Programação - 6",
                "Banco de Dados - 0",
                "Engenharia de Software - 3",
              ]}
            />
          </div>
        </Secao>
      </Conteudo>
    </>
  );
}
