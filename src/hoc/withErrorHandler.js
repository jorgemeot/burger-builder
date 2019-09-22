import React from 'react'
import Modal from '../components/UI/Modal'
import Auxiliary from './Auxiliary'

export default (WrappedComponent, axios) =>
  class WithErrorHandler extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        error: null
      }
      this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this)
    }

    componentWillMount () {
      this.requestInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: null })
        return request
      })
      this.responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => this.setState({ error: error })
      )
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.requestInterceptor)
      axios.interceptors.response.eject(this.responseInterceptor)
    }

    errorConfirmedHandler () {
      this.setState({ error: null })
    }

    render () {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      )
    }
  }
