import { Container } from "./style";
import PropType from 'prop-types'

export function ButtonText( { icon: Icon, title, path } ) {
  return ( 
    <Container to={path}>
      { Icon && <Icon size="16"/> }
      { title }
    </Container>
  )
}


ButtonText.propTypes = {
  path: PropType.string,
  icon: PropType.elementType,
  title: PropType.string,
}