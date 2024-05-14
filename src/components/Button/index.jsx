import { Container } from "./style";
import PropType from 'prop-types'

export function Button( { icon: Icon, ...rest } ) {
  return ( 
    <Container {...rest}>
      { Icon && <Icon size="16"/> }
      { rest.children }
    </Container>
  )
}


Button.propTypes = {
  icon: PropType.elementType,
  title: PropType.string,
}