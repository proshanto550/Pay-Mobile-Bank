// Login Button Functionality
document.getElementById("loginButton")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const mobileNumber = 12345678910;
        const pinNumber = 1234;

        const numberValue = document.getElementById("number").value
        const number = parseInt(numberValue);

        const pinValue = document.getElementById("pin").value
        const pin = parseInt(pinValue);

        if(mobileNumber === number && pinNumber === pin) {
            window.location.href="./home.html"
        }
        else {
            alert("Invalid Credentials");
        }
    })