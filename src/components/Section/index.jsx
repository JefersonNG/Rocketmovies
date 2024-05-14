import { Container } from "./style";
import PropTypes from 'prop-types'

export function Section({ title, children, ...rest }) {
  return (
    <Container { ...rest }>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </Container>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}