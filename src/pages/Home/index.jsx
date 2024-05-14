import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <h2>Meus filmes</h2>
          <Button icon={FiPlus} to="/new">
            Adicionar filme
          </Button>
        </section>
        <Movie data={
          {
            title: 'Interestellar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            rating: 2,
            tags: [
              {
                id: 1,
                name: 'Action'
              },
              {
                id: 2,
                name: 'Comedy'
              }
            ]
          }
        } />
        <Movie data={
          {
            title: 'Interestellar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            rating: 2,
            tags: [
              {
                id: 1,
                name: 'Action'
              },
              {
                id: 2,
                name: 'Comedy'
              }
            ]
          }
        } />
      </Content>
    </Container>
  )
} 