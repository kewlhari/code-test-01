import React, { Component } from 'react';
import FilterList from '../containers/filter-list'
import ProductList from '../containers/product-list'
import './../../style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="product-list-module">
          <div className="product-list-module__select-filter">
            <FilterList />
          </div>
          <div className="product-list-module__product-list">
            <ProductList />
          </div>
      </div>
    );
  }
}
