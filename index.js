const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirmpassword");

// add event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (usernameval, sRate, count) => {
  if (sRate === count) {
    alert("registration Complete");
    swal("Good job!" + usernameval, "Registration Successful", "success");
  }
};

//for final data validation
const successMsg = (usernameval) => {
  let formCon = document.getElementsByClassName("form-control");

  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      sendData(usernameval, sRate, count);
    } else {
      return false;
    }
  }
};

//More email validate
const isEmail = (emailval) => {
  var atSymbol = emailval.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailval.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailval.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();

  // validate function

  if (usernameval === "") {
    setErrormsg(username, "Username cannot be black");
  } else if (usernameval.length <= 2) {
    setErrormsg(username, "Username minimum 3 characters");
  } else {
    setSuccessMsg(username);
  }

  // Validate Email
  if (emailval === "") {
    setErrormsg(email, "Email cannot be blank");
  } else if (!isEmail(emailval)) {
    setErrormsg(email, "Not a valid email ");
  } else {
    setSuccessMsg(email);
  }

  if (phoneval === "") {
    setErrormsg(phone, "Phone cannot be blank");
  } else if (phoneval.length != 11) {
    setErrormsg(phone, "Not a valid email ");
  } else {
    setSuccessMsg(phone);
  }

  if (passwordval === "") {
    setErrormsg(password, "Password cannot be null");
  } else if (passwordval.length <= 5) {
    setErrormsg(password, "Minimum Six Character ");
  } else {
    setSuccessMsg(password);
  }

  if (cpasswordval === "") {
    setErrormsg(cpassword, "Confirm password can not be back");
  } else if (passwordval !== cpasswordval) {
    setErrormsg(cpassword, "Password are not Match");
  } else {
    setSuccessMsg(cpassword);
  }

  successMsg(usernameval);
};
function setErrormsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input, successmsgs) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
