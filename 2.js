function chkuserame() {
    var myName = document.getElementById("username");
   // Test the format of the input name
   // Allow the spaces after the commas to be optional
   // Allow the period after the initial to be optional
    var pos = myName.value.search(
        /^[a-zA-Z0-9]+$/);
    if (pos != 0) {
    alert("The username you entered is not correct. \n" +
    "The correct form is:" + "Alphabate + number"+
    "Please go back and fix your username");
    return false;
    } else
    return true;
   }
   // The event handler function for the phone number text box
   function chkpassword() {
    var myPhone = document.getElementById("password");
   // Test the format of the input phone number
    var pos = myPhone.value.search(/^[A-Za-z]\w{7,14}$/);
    if (pos != 0) {
    alert("The password you entered is not correct \n" +
    "The password must contain : 1 uppercase + lowercase + number \n" +
    "Please go back and fix your password ");
    return false;
    } else
    return true;
   }
   function chkemail() {
    var myPhone = document.getElementById("email");
   // Test the format of the input phone number
    var pos = myPhone.value.search( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pos != 0) {
    alert("The email you entered is not correct \n" +
    "The email must contain : name + number + special character +.com/in \n" +
    "Please go back and fix your email ");
    return false;
    } else
    return true;
   }
   // validatorr.js
   // Register the event handlers for validator.html
   document.getElementById("username").onchange = chkuserame;
   document.getElementById("password").onchange = chkpassword;
   document.getElementById("email").onchange = chkemail;