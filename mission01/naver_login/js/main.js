document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const emailInput = document.querySelector("#userEmail");
  const passwordInput = document.querySelector("#userPassword");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  const user = {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
  };

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return passwordRegex.test(password);
  }

  function validateForm() {
    let isValid = true;

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("is--invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is--invalid");
    }

    if (!validatePassword(passwordInput.value)) {
      passwordInput.classList.add("is--invalid");
      isValid = false;
    } else {
      passwordInput.classList.remove("is--invalid");
    }

    return isValid;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      const enteredEmail = emailInput.value;
      const enteredPassword = passwordInput.value;

      if (enteredEmail === user.id && enteredPassword === user.pw) {
        window.location.href = "welcome.html";
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    }
  });
});
