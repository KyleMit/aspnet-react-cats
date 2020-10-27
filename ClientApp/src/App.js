import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchBreeds } from './components/FetchBreeds';
import { RandomCat } from './components/RandomCat';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={RandomCat} />
        <Route path='/fetch-data' component={FetchBreeds} />
      </Layout>
    );
  }
}
