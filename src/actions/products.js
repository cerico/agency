const API_URL = `https://s3.eu-west-2.amazonaws.com/io1937/json/sample.json`

export const getProducts = () => {
  const endpoint = `${API_URL}`
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setProducts(res.products)))
    // .then(res => dispatch(setProducts(res.products)))
    .catch(error => console.log(error))
  }
}

export const setProducts = products => {
  console.log(products)
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    products,
  }
}