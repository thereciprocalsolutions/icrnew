  var firebaseConfig = {
    apiKey: "AIzaSyDUV-KSDEb3gufrMQbWIDUk44n1J8eMawY",
    authDomain: "intercityrider.firebaseapp.com",
    databaseURL: "https://intercityrider.firebaseio.com",
    projectId: "intercityrider",
    storageBucket: "intercityrider.appspot.com",
    messagingSenderId: "205048091037",
    appId: "1:205048091037:web:4039e159b8701819a71f74",
    measurementId: "G-7ZLG79C6HZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('book');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  


    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('p');
    var pickuplocation = getInputVal('location-1');
    var pickuptime = getInputVal('pickuptime');
    var droplocation = getInputVal('location-2');
    var cars = getInputVal('cars');
    var ser = getInputVal('ser');
    var date = getInputVal('pickupdate');
    var b=getInputVal('b')
  
  
    // Save message
    saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars,ser,date,b);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },2000);
    
    window.open('https://intercityriders.com/bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars,ser,date,b){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      pickuplocation:pickuplocation,
      pickuptime:pickuptime,
      droplocation:droplocation,
      cars:cars,
      ser:ser,
      date:date,
      b:b

    });
  }
