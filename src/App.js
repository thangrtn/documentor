import React from 'react' ;
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route ,useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Signin from './pages/signin';
import Form1 from './pages/f01';
import Form16 from './pages/f16';
import Form26 from './pages/f26';
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export const Header = () => {
  const location = useLocation();
  if ( location.pathname !== '/signin'){
    return <Navbar />
  }else {
    return ''
  }
}

function App() {
  return (
    <Router>
      <Helmet><title>Documentor</title></Helmet>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/services' exact component={Services} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/form1' exact component={Form1} />
          <Route path='/form16' exact component={Form16} />
          <Route path='/form26' exact component={Form26} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
