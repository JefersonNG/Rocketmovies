import { Container, Form, Avatar } from "./style";
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUnlock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} path="/"/>
      </header>
      <div>
        <Form>
          <Avatar>
            <img src="https://github.com/jefersonng.png" alt="" />
            <label htmlFor="avatar">
              <FiCamera/>
              <input type="file" id="avatar" />
            </label>
          </Avatar>

          <Input placeholder="Nome Completo" icon={FiUser} type="text" autoComplete="username"/>
          <Input placeholder="E-email" icon={FiMail} type="email" autoComplete="username"/>
          <Input placeholder="Senha Atual" icon={FiUnlock} type="password" autoComplete="new-password"/>
          <Input placeholder="Nova Senha" icon={FiLock} type="password" autoComplete="new-password"/>
          <Button> Salvar</Button>

        </Form>
      </div>
    </Container>
  )
}