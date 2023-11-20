var objPeople = [
    {
        username: "username",
        password: "password"
    }
]

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password == password) {
    alert('Login successful!');
    window.location.assign("quiz.html");
}   else {
    alert('Invalid username or password.');
}

}


function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (!localStorage.getItem(username)){
        const user = { username, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Signup successful!');
        

    } else {
    alert('Username already exists, please choose a different username. ');
    }

   
}
