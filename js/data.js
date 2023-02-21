const firebaseConfig = {
    apiKey: "AIzaSyDtNuMJDnLC110K0_bF7kdO7Gs15BisBFE",
    authDomain: "portfolio-fed13.firebaseapp.com",
    databaseURL: "https://portfolio-fed13-default-rtdb.firebaseio.com",
    projectId: "portfolio-fed13",
    storageBucket: "portfolio-fed13.appspot.com",
    messagingSenderId: "993726783782",
    appId: "1:993726783782:web:d5a0f4cfaa55b050ee61e7"
  };


  //initialise database
  firebase.initializeApp(firebaseConfig);

  //reference our database
  const contactDB = firebase.database().ref('Portfolio')

  document.getElementById('contactform').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var mssg = getElementVal('message');

    //console.log(name, email, number, mssg);
    saveMsg(name, email, number, mssg);
    document.getElementById("contactform").reset();


  }

  const saveMsg = (name, email, number, mssg) =>{
    var newContact = contactDB.push();
    newContact.set({
        name: name,
        email: email,
        number: number,
        mssg: mssg,
    });
  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }