export default Conteudo;
import "./Conteudo.css";
function Conteudo(props) {
  return <main className={props.estilo}>{props.children}</main>;
}
