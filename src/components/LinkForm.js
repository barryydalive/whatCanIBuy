import React, {useState} from 'react'
import {parseLink} from '../redux/reducers/productReducer'
import {useDispatch, useSelector} from 'react-redux'


const useSignUpForm = () => {
  const [link, setLink] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {

    if (event) {
      event.preventDefault()
      dispatch(parseLink(link))
      setLink('')
    }
  }
  const handleInputChange = (event) => {
    setLink(event.target.value)
  }
  return {
    handleSubmit,
    handleInputChange,
    link
  }
}

const LinkForm = (props) => {
  // const [link, setLink] = useState('')
  const {handleInputChange, handleSubmit, link} = useSignUpForm()
  const products = useSelector(state => state.products)
  
  console.log('products:', products)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={link}/>
        <button type='submit'>Add To Closet</button>
      </form>
    </div>
  )
}

export default LinkForm