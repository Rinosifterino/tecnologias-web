export default InputSenha;
import "./Imput.css";

function InputSenha() {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" required />
    </>
  );
}
