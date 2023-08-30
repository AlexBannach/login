
import "./css/styles.css";

function App() {
  return (
      <div id="login-container">
      <h1>Login</h1>
      <form action="">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-email" autocomplete="off" />
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" />
        <a href="#" id="forgot-pass">Esqueceu a senha?</a>
        <input type="submit" value="Login" />
      </form>
      <div id="social-container">
        <p>Ou entre pelas suas redes sociais</p>
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-linkedin"></i>
      </div>
      <div id="register-container">
        <p>Ainda não tem uma conta?</p>
        <a href="#">Registrar</a>
      </div>
    </div>

  );
}

export default App;