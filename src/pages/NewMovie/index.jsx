import { Container, Content, Form } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={FiArrowLeft} path="/" />
            <h1>Novo filme</h1>
          </header>
          <span>
            <Input placeholder='Titulo' />
            <Input placeholder='Sua nota (de 0 a 5)' />
          </span>
          <TextArea placeholder="Observações" />
          <Section title="Marcadores">
            <MovieItem value="React"/>  
            <MovieItem isNew={true} placeholder="Novo marcador" />
          </Section>
          <footer>
            <button> Excluir filme </button>
            <Button>Salvar alterações</Button>
          </footer>
        </Form>
        
      </Content>
    </Container> 
  )
} 