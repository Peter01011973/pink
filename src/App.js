import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Topics from './components/topics/topics';
import Flexbox from './components/Flexbox/Flexbox';

const App = () => {
  
  return (
    <Layout >
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/topics' component = {Topics}/>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/flexbox' component = {Flexbox}/>
      </Switch>
    </Layout>
  );
}

export default App;
