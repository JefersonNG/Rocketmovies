import { Container } from "./style";
import { StartRating } from "../StartRating"
import PropTypes from "prop-types"
import { Tag } from "../Tag"

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{ data.title }</h2>
      <StartRating value={data.rating} size={16} />
      <p>{ data.description}</p>
      {
        data.tags && 
          <footer>
            { data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)}
          </footer>
      }
    </Container>
  )
} 

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.objectOf)
  })
}