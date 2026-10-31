function generatePassword() {

    let length = document.getElementById("length").value;

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&";

    let password = "";

    for (let i = 0; i < length; i++) {

        let random = Math.floor(Math.random() * characters.length);

        password += characters[random];
    }

    document.getElementById("password").innerHTML =
        password;
}
