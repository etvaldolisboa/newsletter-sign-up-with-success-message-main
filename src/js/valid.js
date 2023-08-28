function validForm(email) {
    if (email === "") {
        return false;
    }
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validEmail.test(email);
}

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const newsletter = document.querySelector('.container-newsletter')
    const action = document.querySelector('.container-action');
    const user = document.querySelector('.user-email');

    if (!validForm(email)) {
        document.querySelector(".form").classList.add("erro");
    } else {
        newsletter.classList.add('hidden');
        action.classList.remove('hidden');
        user.innerText = `${email}`;
    }
});