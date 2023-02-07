document.getElementById("button").onclick = function calc() {
    var yearOfBirth = parseInt(document.getElementById("yearofbirth").value);
    var age = new Date().getFullYear() - yearOfBirth;
    var result = getElementById("result");
    result = "Your age is "+age;
};