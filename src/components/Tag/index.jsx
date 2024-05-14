import { Container } from "./style";
import PropType from 'prop-types'

export function Tag({ title, ...rest }) {
  return ( 
    <Container {...rest}>
      { title }
    </Container>
  )
}


Tag.propTypes = {
  title: PropType.string,
}