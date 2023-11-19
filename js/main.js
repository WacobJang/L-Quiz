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
            document.location.href = "quiz.html";
            return
        }
    }
    console.log("incorrect username or password")
}

let contentArray = localStorage.getItem('cred') ? 
JSON.parse(localStorage.getItem("cred")) : []; 

function addInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    objPeople.push({
        username: username,
        password: password
    })

    contentArray.push(objPeople);
    localStorage.setItem('cred', JSON.stringify(contentArray));

    console.log(objPeople)
}