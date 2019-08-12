const functions = require('firebase-functions')
const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getHTML = functions.https.onCall(async (data, context) => {

   try {
      const {link} = data
      const res = await axios.get(link)
      return res.data
   } catch (err) {
     console.log('err:', err)
     return(data)
   }
  
  
  
})


