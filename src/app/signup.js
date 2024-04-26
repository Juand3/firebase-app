import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

import{ auth } from './firebase.js'

const signupform = document.querySelector('#signup-form')



signupform.addEventListener('submit', async (e) =>{
    e.preventDefault()

   const email= signupform['signup-email'].value
   const password= signupform['signup-password'].value

    console.log(email,password)


 try {
    const userCredentials = await createUserWithEmailAndPassword( auth ,email,password)
    console.log(userCredentials)
   
   //esto es para cerrar el modal de signup
   const signupModal = document.querySelector('#signupModal')
   const modal = bootstrap.Modal.getInstance(signupModal)
   modal.hide()

 } catch (error) {
    console.log(error.message)
    console.log(error.code)

    if (error.code === 'auth/invalid-email'){
      alert ('invalid email')
    }
 }

    

})
