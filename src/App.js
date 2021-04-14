import React from 'react' ;
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route ,useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Signin from './pages/signin';
import Mainteacher from './pages/mainteacher';

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
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/mainteacher' exact component={Mainteacher} />

      </Switch>
    </Router>
  );
}

export default App;
