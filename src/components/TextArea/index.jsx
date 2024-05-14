import { Container } from "./style";
import PropType from 'prop-types'

export function TextArea( { value, ...rest } ) {
  return ( 
    <Container {...rest}>
      {value}
    </Container>
  )
}


TextArea.propTypes = {
  value: PropType.string,
}