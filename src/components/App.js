import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';
import PrivateRoute from 'components/PrivateRoute';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect
// } from 'react-router-dom'


// = styles =
// 3rd
import 'styles/bootstrap/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import grayTheme from './themes/grayTheme';

let MainApp = loadable({
  loader: () => import('components/Layout/AppLayout/MainApp'),
  loading: LoadingComponent
})
let Exception = loadable({
  loader: () => import('routes/exception/'),
  loading: LoadingComponent
})
let Account = loadable({
  loader: () => import('routes/user/'),
  loading: LoadingComponent
})
let PageFullscreen = loadable({
  loader: () => import('routes/fullscreen/'),
  loading: LoadingComponent
})


class App extends Component {
  componentDidMount() {}

  render() {
    const { match, location, layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth, theme } = this.props;
    let materialUITheme;
    switch (theme) {
      case 'gray':
        materialUITheme = grayTheme;
        break;
      case 'dark':
        materialUITheme = darkTheme;
        break;
      default:
        materialUITheme = lightTheme;
    }

    const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      return ( <Redirect to={'/app/home'}/> );
    }

    return (
      <MuiThemeProvider theme={materialUITheme}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar" /></div>
          <div
            className={classnames('app-main h-100', {
              'fixed-header': fixedHeader,
              'nav-collapsed': navCollapsed,
              'nav-behind': navBehind,
              'layout-boxed': layoutBoxed,
              'theme-gray': theme === 'gray',
              'theme-dark': theme === 'dark',
              'sidebar-sm': sidebarWidth === 'small',
              'sidebar-lg': sidebarWidth === 'large'})
          }>
            <PrivateRoute  path={`${match.url}app`} component={MainApp} />
            <Route path={`${match.url}exception`} component={Exception} />
            <Route path={`${match.url}user`} component={Account} />
            <Route exact path="/fullscreen" component={PageFullscreen} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
});

export default connect(
  mapStateToProps
)(App);
