const inputs = document.querySelectorAll(".input");
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var massageError = document.getElementById("massage-error");
var submitError = document.getElementById("submit-error");

function validanionName(){
    var name = document.getElementById("input-name").value;
    if (name.length == 0) {
        nameError.style.color = "red";
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.style.color = "red"
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.style.color = "green"
    nameError.innerHTML = 'Valid';
    return true;
    
}

function validanionEmali(){
    var email = document.getElementById("input-emali").value;
    if (email.length == 0) {
        emailError.style.color = "red";
        emailError.innerHTML= "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.style.color = "red";
        emailError.innerHTML= "Email invalid";
        return false;
    }
    emailError.style.color = "green"
    emailError.innerHTML = 'Valid';
    return true;
}

function validanionPhone(){
    var phone = document.getElementById("input-phone").value;
    if (phone.length == 0) {
        phoneError.style.color = "red"
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if(phone.length !== 11){
        phoneError.style.color = "red"
        phoneError.innerHTML = "Phone number number should be 11 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.style.color = "red"
        phoneError.innerHTML = "Only digits";
        return false;
    }
    phoneError.style.color = "green"
    phoneError.innerHTML = 'Valid';
    return true;
}
function validanionMassage(){
  var  massage = document.getElementById("input-massage").value;
  var required = 30;
  var left = required - massage.length;
  if (left > 0) {
    massageError.style.color = "red";
    massageError.innerHTML = left + " more character required";
    return false;
  }
   massageError.style.color = "green"
   massageError.innerHTML = 'Valid';
  return true;
}
function validationfrom(){
    if (!validanionName() || !validanionEmali() || !validanionPhone() || !validanionMassage()) {
        submitError.style.display ="block";
        submitError.style.color = "red";
        submitError.innerHTML = "Please fix error";
        setTimeout(function(){ submitError.style.display ="none"},3000)
        return false;
    }

}

function blurFun(){
    let parent = this.parentNode
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
function focusFun(){
    let parent = this.parentNode
    parent.classList.add("focus");
}
inputs.forEach(input =>{
    input.addEventListener("focus",focusFun);
    input.addEventListener("blur",blurFun);
})