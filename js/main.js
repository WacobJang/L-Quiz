var objPeople = [
    {
        username: "username",
        password: "password"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            return
        }
    }
    console.log("incorrect username or password")
}