import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`

const backdrop = (props) =>
  props.show ? <Backdrop onClick={props.clicked} /> : null

backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func.isRequired
}

backdrop.displayName = 'Backdrop'

export default backdrop
