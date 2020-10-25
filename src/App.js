import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import {Redirect, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from './components/login/login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import ChatContainer from './components/Dialogs/chat/ChatContainer.jsx';
import { Col, Row } from 'react-bootstrap';





const  DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const  ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className="content-wrapper">
                  <Row>
                      <Col xl={2} lg={2} md={1} sm={0} xs={0}>
                          <Navbar/>
                      </Col>
                      <Col xl={9} lg={9} md={10} sm={12} xs={12}>
                          <div className='app-wrapper-content'>
                              <Route exact path='/' render={() => <Redirect to={"/profile"}/> } />
                              <Route path='/profile/:userId?' render={() =>{
                                  return <React.Suspense fallback={<Preloader/>}>
                                      <ProfileContainer/>
                                  </React.Suspense>
                              }}/>

                              <Route exact path='/dialogs' render={() => {
                                  return <React.Suspense fallback={<Preloader/>}>
                                  <DialogsContainer/>
                                  </React.Suspense>
                              }}/>

                              <Route exact path={'/dialogs/:id'} render={() => { return <ChatContainer /> }} />

                              <Route path='/News' render={() => { return <News /> }}/>

                              <Route path='/Music' render={() =>{ return <Music />} }/>

                              <Route path='/Settings' render={() => { return <Settings />}}/>

                              <Route path='/users' render={() =>{
                                  return <React.Suspense fallback={<Preloader/>}>
                                      <UsersContainer/>
                                  </React.Suspense>
                              }}/>

                              <Route path='/login' render={() => <Login/>}/>
                              {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
                          </div>
                      </Col>
                      <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
                  </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);