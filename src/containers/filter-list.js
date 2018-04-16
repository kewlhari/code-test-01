import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectFilter from '../actions/action_select_filter'
import {bindActionCreators} from 'redux'

class FilterList extends Component {
  constructor(props){
    super(props);
    this.change = this.change.bind(this);
  }
  renderSizes() {
    var sizes = [];

    this.props.products.map((product, index) => {
      product.size.forEach(function(value){
        if(!sizes.includes(value)) sizes.push(value)
      })
    });

    return sizes.map(function(value){
      return (
        <option
          key={value}
          className='list-group-item' value={value}>{value}
        </option>
      );
    });
  }
  change(e){
    this.props.selectFilter(e.target.value)
  }
  render() {
    return (
      <div>
        <h2>Women's tops</h2>
        <select className = 'list-group col-sm-4' onChange={this.change}>
          <option className='list-group-item' value='select'>Filter by size</option>
          {this.renderSizes()}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectFilter: selectFilter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)
