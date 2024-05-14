import { Container, Form, Background} from './style'
import { FiLock, FiMail} from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo oque assistir</p>

        <span>Faça seu login</span>
        <Input type="email" placeholder="E-mail" icon={FiMail} autoComplete="username"/>
        <Input type="password" placeholder="Senha" icon={FiLock} autoComplete="current-password"/>
        <Button> Entrar</Button>

        <ButtonText title="Criar Conta" path="/cadastrar"/>
      </Form>

      <Background/>
    </Container>
  )
} 