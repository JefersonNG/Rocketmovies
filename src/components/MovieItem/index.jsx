import { Container } from "./style";
import PropTypes from 'prop-types'
import { FiPlus, FiX } from "react-icons/fi"
import { StyleSheetManager } from 'styled-components';

export function MovieItem({ isNew=false, value, onClick, ...rest }) {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isNew"}>
      <Container isNew={isNew}>
      <input type="text" defaultValue={ value } readOnly={!isNew} {...rest} />

        <button type="button" onClick={onClick} className={isNew ? "button-add" : "button-delete"}>
          {isNew ? <FiPlus /> : <FiX />}
        </button>
      </Container>
    </StyleSheetManager>
    
  )
}


MovieItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
}

