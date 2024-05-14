import { Container } from "./style";
import PropType from 'prop-types'

export function Input( { placeholder, icon: Icon, ...rest } ) {
  return ( 
    <Container placeholder={placeholder} >
      {Icon && <Icon size="20"/>}
      <input type="text" placeholder={placeholder} {...rest}/>
    </Container>
  )
}


Input.propTypes = {
  icon: PropType.elementType,
  placeholder: PropType.string.isRequired,
}