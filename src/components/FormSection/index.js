import { Checkbox } from "../Form/Checkbox";
import { Input } from "../Form/Input";
import { Button } from "../UI/Button";
import { Link } from "../UI/Link";
import { SubTitle } from "../UI/SubTitle";
import { Title } from "../UI/Title";

import "/src/components/FormSection/styles.scss";

export const FormSection = () => {
  return `
    <section class="form-section">
      <div class="form-container">
        <div class="heading-container">
          ${SubTitle("Bem vindo de volta")}
          ${Title("Faça login na sua conta")}
        </div>
        <form action="">
          ${Input("E-mail")}
          ${Input("Senha", "password")}

          <div class="remind-me">
            ${Checkbox()}
            ${Link("Esqueceu sua senha?", "#", true)}
          </div>

          <div class="button-container">
            ${Button("Entrar")}
            ${Button("Ou faça login com o Google", true)}
          </div>
        </form>
      </div>
      <footer>
        <span class="not-account">Não tem uma conta?</span> ${Link("Cadastre-se")}
      </footer>
    </section>
  `;
}