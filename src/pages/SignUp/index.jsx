import { Container, Form, Background} from './style'
import { FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo oque assistir</p>

        <span>Faça seu login</span>
        <Input type="text" placeholder="Nome Completo" icon={FiUser}/>
        <Input type="email" placeholder="E-mail" icon={FiMail} autoComplete="username"/>
        <Input type="password" placeholder="Senha" icon={FiLock} autoComplete="new-password"/>
        <Button>Cadastrar</Button>

        <ButtonText title="Voltar para login" path="/" icon={FiArrowLeft}/>
      </Form>

      <Background/>
    </Container>
  )
} 