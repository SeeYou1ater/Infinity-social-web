import React from 'react';
import './Reset.css';
import './App.css';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';
import { withRouter } from './hoc/withRouter';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/appReducer';
import { HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render () {
    if (!this.props.initializedApp) { return <Preloader/>} else
    return (
      <div className="App">
          <HeaderContainer/>
          <Main state={this.props.state}/>
          <Footer/>
      </div>
    )
  }
}
///////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  initializedApp: state.app.initialized
})

const mapDispatchToProps = (dispatch) => ({
  initializeApp: () => {
    dispatch(initializeApp())
  },
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(App);

const SocialApp = (props) => {
    return  <HashRouter>
              <Provider store={store}>
                <AppContainer state={store.getState()}/>
              </Provider>
            </HashRouter>
}

export default SocialApp

