import { Container, Profile } from "./style";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder= "Pesquisar pelo título"/>
      <Profile>
        <Link to="/profile">
          <img
            src="https://avatars.githubusercontent.com/u/6643122?v=4"
            alt="avatar"
          />
        </Link>
        <div>
          <span>Jeferson nascimento</span>
          <a href="/">Sair</a>
        </div>
      </Profile>
    </Container>
  )
}