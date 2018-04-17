import { FilterList } from '../../src/containers/filter-list'
import { ProductList } from '../../src/containers/product-list'

import React from 'react'
import configureStore from 'redux-mock-store';
// See README for discussion of chai, enzyme, and sinon
import chai, { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import { Provider } from 'react-redux';

chai.use(chaiEnzyme())
// create any initial state needed
const initialState = {}; 
const mockStore = configureStore();
let wrapper
let store

const products = [{
	    "index": 0,
	    "isSale": true,
	    "isExclusive": false,
	    "price": "$18.88",
	    "productImage": "product-1.jpg",
	    "productName": "Striped shirt",
	    "size": ["XS", "S", "L", "XL"]
	  },
	  {
	    "index": 1,
	    "isSale": false,
	    "isExclusive": false,
	    "price": "$25.44",
	    "productImage": "product-2.jpg",
	    "productName": "Denim shirt",
	    "size": ["XS", "S"]
	  },
	  {
	    "index": 2,
	    "isSale": false,
	    "isExclusive": true,
	    "price": "$12.93",
	    "productImage": "product-3.jpg",
	    "productName": "Plain cotton t-shirt",
	    "size": ["S", "M"]
	  },
	  {
	    "index": 3,
	    "isSale": false,
	    "isExclusive": false,
	    "price": "$26.32",
	    "productImage": "product-4.jpg",
	    "productName": "Plain 3/4 sleeve cotton t-shirt",
	    "size": ["XL"]
	  },
	  {
	    "index": 4,
	    "isSale": false,
	    "isExclusive": false,
	    "price": "$12.16",
	    "productImage": "product-5.jpg",
	    "productName": "White dress shirt",
	    "size": ["M", "L"]
	  },
	  {
	    "index": 5,
	    "isSale": false,
	    "isExclusive": false,
	    "price": "$30.27",
	    "productImage": "product-6.jpg",
	    "productName": "Long Sleeve Skivvy Top",
	    "size": ["XS", "S", "M"]
	  },
	  {
	    "index": 6,
	    "isSale": true,
	    "isExclusive": false,
	    "price": "$24.26",
	    "productImage": "product-7.jpg",
	    "productName": "Puffer Vest with Hood",
	    "size": ["M", "L", "XL"]
	  },
	  {
	    "index": 7,
	    "isSale": false,
	    "isExclusive": true,
	    "price": "$17.73",
	    "productImage": "product-8.jpg",
	    "productName": "Funnel Neck Swing Top",
	   	"size": ["XS", "S", "XL"]
}]

describe('<FilterList />', () => {
  let wrapper
	beforeEach(() => {
		wrapper = shallow(<FilterList products={products}/>)
	})
	
	it('Filter by size dropdown renders', () => {	
		expect(wrapper.find('select').exists()).to.equal(true);
    })
});

describe('<ProductList />', () => {
  let wrapper
	beforeEach(() => {
		wrapper = shallow(<ProductList products={products} activeFilter="XL"/>)
	})
	
	it('Product list renders when filter is set to XL', () => {	
		expect(wrapper.find('ul').exists()).to.equal(true);
    })
});

