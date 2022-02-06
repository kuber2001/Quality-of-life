// validator.js
// An example of input validation using the change and submit
// events
// The event handler function for the name text box
function chkuserame() {
    var myName = document.getElementById("E-mail");
   // Test the format of the input name
   // Allow the spaces after the commas to be optional
   // Allow the period after the initial to be optional
    var pos = myName.value.search(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pos != 0) {
    alert("The name you entered (" + myName.value +
    ") is not in the correct form. \n" +
    "The correct form is:" +
    "name @ gmail .com/in\n" +
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
   // validatorr.js
   // Register the event handlers for validator.html
   document.getElementById("username").onchange = chkuserame;
   document.getElementById("password").onchange = chkpassword;