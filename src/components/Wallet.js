import React from 'react'
import {connect} from 'react-redux'
// import scraper from 'product-scraper'

const Wallet = (props) => {
  const { wallet } = props
  // scraper.init('https://www.amazon.com/gp/product/B01A827XHM/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1', (data) => {
  //   console.log('data:', data);
  // })
  return(
    <div className='wallet'>
      <h1>${wallet} remaining</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet
  }
}

export default connect(mapStateToProps)(Wallet)