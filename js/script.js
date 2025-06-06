let mobileNumber = document.getElementById("mobileNumber")
let pinNumber = document.getElementById("pinNumber")
let loginBtn = document.getElementById("loginBtn")


document.querySelectorAll('input[type="number"]').forEach(function(input) {
  input.addEventListener('keydown', function(e) {
    if (['e', 'E', '+', '-', '.'].includes(e.key)) {
      e.preventDefault();
    }
  });
});



let pinNumbers = document.querySelectorAll('input[type="password"]');

pinNumbers.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 4) {
      input.value = input.value.slice(0, 4);
    }
  });
});



loginBtn.addEventListener("click", () => {
  let numberValue = mobileNumber.value;
  let pinValue = pinNumber.value;

  if (numberValue === "01860978120" && pinValue === "2000") {
    localStorage.setItem("mobile", numberValue);
    localStorage.setItem("pin", pinValue);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./home.html";
    mobileNumber.value = "";
    pinNumber.value = "";
  } else if (numberValue === "" || pinValue === "") {
    alert("Please fill the input field.");
  } else {
    alert("Invalid mobile or pin.");
    mobileNumber.value = "";
    pinNumber.value = "";
  }
});



