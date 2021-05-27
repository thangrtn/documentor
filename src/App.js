import React from 'react';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect
} from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signinpage';
import Form1 from './pages/f01';
import Form16 from './pages/f16';
import Form26 from './pages/f26';
import { Helmet } from 'react-helmet';
import Service from './components/Services/services'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import history from "./utils/history";
let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://documentor-kmutt.me/api';

export const Header = () => {
    const location = useLocation();
    if (location.pathname !== '/signin') {
        return <Navbar />;
    } else {
        return '';
    }
};

function App() {
    const token = localStorage.getItem('accessToken');
    return (
        <Router>
            <Helmet>
                <title>Documentor</title>
            </Helmet>
            <div className='app'>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' exact component={Service} />
                    <Route
                        path='/signin'
                        render={() =>
                            token ? <Redirect to='/' /> : <Signin />
                        }
                        exact
                    />
                    <Route path='/form1' exact component={Form1} />
                    <Route path='/form16' exact component={Form16} />
                    <Route path='/form26' exact component={Form26} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
