function validForm(email) {
    if (email === "") {
        return false;
    }
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validEmail.test(email);
}

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  const email = document.getElementById('email').value;
  if (!validForm(email)) {
    e.preventDefault();
    document.querySelector(".form").classList.add("erro");
  }
});

