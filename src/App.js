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

//import ProfileContainer from "./components/profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() => <Redirect to={"/profile"}/> } />
                    <Route path='/profile/:userId?' render={() =>{
                        return <React.Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>

                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                        <DialogsContainer/>
                        </React.Suspense>
                    }}/>

                    <Route path='/News' render={() => News}/>

                    <Route path='/Music' render={() => Music}/>

                    <Route path='/Settings' render={() => Settings}/>

                    <Route path='/users' render={() =>{
                        return <React.Suspense fallback={<Preloader/>}>
                            <UsersContainer/>
                        </React.Suspense>
                    }}/>

                    <Route path='/login' render={() => <Login/>}/>
                    {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
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