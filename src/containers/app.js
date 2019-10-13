import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user/user'
import Page from '../components/page/page'
import { setYear } from '../actions/PageActions'

import './app.css'

class App extends Component {
  render() {
    const { user, page, setYear } = this.props
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYear} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  setYear: year => dispatch(setYear(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
