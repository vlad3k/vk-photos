import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user/user'
import Page from '../components/page/page'
import { getPhotos } from '../actions/PageActions'

import './app.css'

class App extends Component {
  render() {
    const { user, page, getPhotos } = this.props
    return (
      <div className="app">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotos}
        />
        <User name={user.name} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  getPhotos: year => dispatch(getPhotos(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
