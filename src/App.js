import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home from './Home';
import  About  from './About';
import  Contact  from './Contact';
import  NoMatch  from './NoMatch';
import  Layout  from './components/Layout';
import   NavigationBar   from './components/NavigationBar';
import   NavigationBarFooter   from './components/Footer';
import  Jumbotron  from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout >
          <style>{'body { background-color: #666261; }'}</style>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <NavigationBarFooter />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
