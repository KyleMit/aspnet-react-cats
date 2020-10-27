import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchBreeds } from './components/FetchBreeds';
import { RandomCat } from './components/RandomCat';

import './custom.css'



export default function App() {

  return (
    <Layout>
      <Route exact path='/' component={RandomCat} />
      <Route path='/breeds' component={FetchBreeds} />
    </Layout>
  );

}
