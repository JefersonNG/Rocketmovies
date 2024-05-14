import { Container, Content, Title, Create, Tags, Description } from './style'
import { Header } from '../../components/Header'
import { StartRating } from '../../components/StartRating'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Tag } from '../../components/Tag'

export function Preview() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" icon={FiArrowLeft} path="/"/>
        <Title>
          <h1>Interestellar</h1>
          <StartRating value={2} />
        </Title>
        <Create>
          <span>
            <img src="https://avatars.githubusercontent.com/u/6643122?v=4" alt="" />
            Por Rodrigo Gonçalves
          </span>
          <span>
            <FiClock />
            23/05/22
            às
            08:00
          </span>
        </Create>
        <Tags>
          <Tag title="Drama" />
          <Tag title="Comedia" />
        </Tags>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in voluptate adipisci iusto, aut earum neque eveniet illum amet ut quaerat quas dolor dolore, eaque sed ipsa nemo fugiat magnam.

        </Description>
      </Content>
    </Container>
  )
} 