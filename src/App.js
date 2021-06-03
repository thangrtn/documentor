import React from 'react';
import { isExpired, decodeToken } from "react-jwt";
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect
} from 'react-router-dom';
import Home from './pages';
import Mteacher from './pages/mainteacher'
import Signin from './pages/signinpage';
import TNavbar from './components/TeacherNavbar/TNavbar'
import Form1 from './pages/f01';
import Form16 from './pages/f16';
import Form26 from './pages/f26';
import TeacherForm1 from './components/Ro1/r1';
import TeacherForm16 from './components/Ro16/r16';
import TeacherForm26 from './components/Ro26/r26';
import Transection      from './components/Lastteacher/last-teacher'
import { Helmet } from 'react-helmet';
import Service from './components/Services/services'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'https://documentor-kmutt.me/api';

export const Header = () => {
    const location = useLocation();
    const token             = localStorage.getItem('accessToken');
    const myDecodedToken    = decodeToken(localStorage.getItem('accessToken'));
    const isMyTokenExpired  = isExpired(localStorage.getItem('accessToken'));
    if (location.pathname !== '/signin') {
        if(myDecodedToken && myDecodedToken['role'] === 'teacher' ){
            if (token && isMyTokenExpired) { 
                localStorage.clear();
                window.location.reload(); 
            }
            return <TNavbar/>
        }else{
            if (token && isMyTokenExpired) { 
                localStorage.clear();
                window.location.reload(); 
            }
            return <Navbar />;
        }
    } else {
        return '';
    }
};

function App() {
    const token             = localStorage.getItem('accessToken');
    const myDecodedToken    = decodeToken(localStorage.getItem('accessToken'));
    const isMyTokenExpired  = isExpired(localStorage.getItem('accessToken'));
    if (myDecodedToken && isMyTokenExpired ){
        localStorage.clear()
        window.location.reload();
    };
    return (
        <Router>
            <Helmet>
                <title>Documentor</title>
            </Helmet>
            <div className='app'>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route 
                        path='/services' 
                        exact
                        render={() => 
                            !((myDecodedToken) && (myDecodedToken['role'] !== 'teacher' ? true : false) && (!isMyTokenExpired)) ? <Redirect to='/signin' /> : <Service />}
                        
                    />
                    <Route
                        path='/signin'
                        render={() =>
                            (token) ? <Redirect to='/' /> : <Signin />
                        }
                        exact
                    />
                    <Route 
                        path='/form1' 
                        exact
                        render={() =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] !== 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/signin' /> : <Form1 />
                        }
                    />
                    <Route 
                        path='/form16' 
                        exact
                        render={() =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] !== 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/signin' /> : <Form16 />
                        }
                    />
                    <Route 
                        path='/form26' 
                        exact
                        render={() =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] !== 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/signin' /> : <Form26 />
                        }
                    />
                    <Route path='/teacher_request_list' 
                        exact 
                        render={() => 
                            !((myDecodedToken !== null) && (myDecodedToken['role'] === 'teacher' ? true : false) && (!isMyTokenExpired)) ? <Redirect to='/signin' /> : <Mteacher />
                        } 
                    />
                    <Route path='/RO-01/:id' 
                        exact 
                        render={(prop) =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] === 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/signin' /> : <TeacherForm1 {...prop}/>
                        } 
                    />
                    <Route path='/RO-16/:id' 
                        exact 
                        render={(prop) =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] === 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/signin' /> : <TeacherForm16 {...prop}/>
                        } 
                    />
                    <Route path='/RO-26/:id' 
                        exact 
                        render={(prop) =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] === 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/' /> : <TeacherForm26 {...prop}/>
                        } 
                    />
                    <Route path='/transection_status/:type' 
                        exact 
                        render={(prop) =>
                            !((myDecodedToken !== null) && (myDecodedToken['role'] === 'teacher' ? true : false) && (!isMyTokenExpired))  ? <Redirect to='/' /> : <Transection {...prop}/>
                        } 
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
