

  const firebaseConfig = {
    apiKey: "AIzaSyCxTh70ioF3wnj7trsBWzmwwjnBOLGUOzo",
    authDomain: "payment-form-732a6.firebaseapp.com",
    databaseURL: "https://payment-form-732a6-default-rtdb.firebaseio.com",
    projectId: "payment-form-732a6",
    storageBucket: "payment-form-732a6.appspot.com",
    messagingSenderId: "554357874333",
    appId: "1:554357874333:web:ebf719d97b7cb9e77e3e74",
    measurementId: "G-09KXLZVBEJ"
  };
//intalize firebase
firebase.initializeApp(firebaseConfig);

var paymentFormDB = firebase.database().ref('paymentForm');

document.getElementById('paymentForm').addEventListener('submit',submitForm);

function submitForm(e)
{
   e.preventDefault();

   var name = getElementVal('name');
 //var gender = getElementVal('gender');
   var address = getElementVal('address');
   var email = getElementVal('email');
   var pincode = getElementVal('pincode');
   var cardType = getElementVal('card_type');
   var  cardNumber = getElementVal('card_number');
   var expirationDate = getElementVal('exp_date');
   

   //console.log(name, address, email,pincode,gender,cardType,cardNumber,expirationDate);
   saveMessages(name, address, email,pincode,cardType,cardNumber,expirationDate );
//enable alert
   document.querySelector('.alert').style.display = 'block';
   //remove alert
   setTimeout(() =>{
    document.querySelector('.alert').style.display = 'none';
   }, 3000);
   // reset form
   document.getElementById('paymentForm').reset();
}

const saveMessages =( name, address, email,pincode,cardType,cardNumber,expirationDate) =>{
    var newPaymentForm = paymentFormDB.push();

newPaymentForm.set({
        name: name,
        address: address,
        email: email,
        pincode: pincode,
        cardType: card_type,
        cardNumber: card_number,
        expirationDate: exp_date,


})

}

const getElementVal =(id) =>{
    return document.getElementById(id).value;
}