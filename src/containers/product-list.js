import React, { Component } from 'react';
import {connect} from 'react-redux'

export class ProductList extends Component {
	constructor(props){
    	super(props);
  }
  renderProductItem(product, index) {
    return(
      <li className="product-list-module__product-list__list__list-item" key={index}>
          <span className="product-item-container">
            <span className="product-item-inner">
              <span className="product-image">
                <img src={'./img/products/product-' + (index === 0 ? 1 : index+1) + '.jpg'} alt={product.productName}/>
              </span>
              <span className="sale-exclusive">
                {
                  product.isSale && (
                    <span className="product-sale">Sale</span>
                  )
                }
                {
                  product.isExclusive && (
                    <span className="product-exclusive">Exclusive</span>
                  )
                }
              </span>
              <span className="product-price-wrapper">
                <span className="product-name">{product.productName}</span>
                <span className="product-price">{product.price}</span>
              </span>
            </span>
          </span>
      </li>
    )
  }
  renderProductList() {
		return(
			this.props.products.map((product, index) => {
				if(this.props.activeFilter !== 'select') {
					if(product.size.includes(this.props.activeFilter)) {
					return(
            <div>
						  {this.renderProductItem(product, index)}
            </div>
					 )	
					} 
				} else {
					return(
            <div>
						  {this.renderProductItem(product, index)}
            </div>
					)
				}
			})
		)
  }
	render() {
		return (
			<ul className="product-list-module__product-list__list">
				{this.renderProductList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
  return {
    activeFilter: state.activeFilter,
    products: state.products
  };
}

export default connect(mapStateToProps)(ProductList)
