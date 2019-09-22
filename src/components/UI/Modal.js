import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Auxiliary from '../../hoc/Auxiliary'
import Backdrop from './Backdrop'

const ModalContainer = styled.div`
  top: 30%;
  left: 15%;
  width: 70%;
  z-index: 500;
  padding: 16px;
  position: fixed;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ccc;
  transition: all 0.3s ease-out;
  box-shadow: 1px 1px 1px #000;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transform: ${(props) =>
    props.show ? 'translateY(0)' : 'translateY(-100vh)'};
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

class Modal extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    )
  }

  render () {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <ModalContainer {...this.props}>{this.props.children}</ModalContainer>
      </Auxiliary>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Modal.displayName = 'Modal'

export default Modal
