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
import Signin from './pages/signin';
import Form1 from './pages/f01';
import Form16 from './pages/f16';
import Form26 from './pages/f26';
import MainT from './pages/mainteacher';
import LastT from './pages/lastteacher';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

axios.defaults.baseURL = `http://documentor-kmutt.me/api`;

export const Header = () => {
    const location = useLocation();
    if (location.pathname !== '/signin') {
        return <Navbar />;
    } else {
        return '';
    }
};

function App() {
    const token = localStorage.getItem('token');
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
                        path='/signin'
                        render={() =>
                            token ? <Redirect to='/' /> : <Signin />
                        }
                        exact
                        component={Signin}
                    />
                    <Route path='/main' exact component={MainT} />
                    <Route path='/last' exact component={LastT} />

                    <Route path='/form1' exact component={Form1} />
                    <Route path='/form16' exact component={Form16} />
                    <Route path='/form26' exact component={Form26} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
