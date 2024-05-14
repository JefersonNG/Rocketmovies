import { Container } from "./style";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropType from 'prop-types'

export function StartRating({ value, size }) {
  const stars = Array.from({ length: 5}, (_, index ) => {
    if(index < value) {
      return <AiFillStar key={index} size={size}/>
    } else {
      return <AiOutlineStar key={index} size={size}/>
    }
  })
  return (
    <Container>
      { stars }
    </Container>
  )
}

StartRating.propTypes = {
  size: PropType.number,
  value: PropType.number.isRequired,
}