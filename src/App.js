import React from 'react' ;
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route ,useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Signin from './pages/signin';
import Mainteacher from './pages/mainteacher';
import LastTeacher from './pages/lastteacher';
import Ro1 from './pages/ro1';
import { Helmet } from 'react-helmet'



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
          <Route path='/mt' exact component={Mainteacher} />
          <Route path='/lt' exact component={LastTeacher} />
          <Route path='/r1' exact component={Ro1} />



        </Switch>
      </div>
    </Router>
  );
}

export default App;
