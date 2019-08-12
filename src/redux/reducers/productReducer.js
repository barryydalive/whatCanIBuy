import {functions} from '../../firebase'
import cheerio from 'cheerio'

const ADD_PRODUCT = 'ADD_PRODUCT'




export const parseLink = link => {
  return async (dispatch) => {
    try {
      const getHTML = functions.httpsCallable('getHTML')
      const {data} = await getHTML({link})
      console.log('data:', data);
      const $ = cheerio.load(data)
      const product = {price: '', imageURL: '', name: ''}
      const listPrice = $('#price_inside_buybox').text()
      const image = $('#landingImage').prop('src')
      const name = $('#productTitle').text()
    
      product.price = listPrice
      product.imageURL = image
      product.name = name

      dispatch(addProduct(product))
    } catch (err) {
      console.log(err)
    }
  }

}

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product
  }
}

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}

export default productReducer