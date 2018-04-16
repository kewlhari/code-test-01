function selectFilter(size) {
  return {
    type: 'FILTER_SELECTED',
    payload: size
  }
}
export default selectFilter;
