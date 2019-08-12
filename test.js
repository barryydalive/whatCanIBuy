const axios = require('axios')

async function dog ()  {
  const {data} = await axios.get('https://www.amazon.com/gp/product/B07PZRYS8C/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1')
  console.log('data:', data);
}

dog()