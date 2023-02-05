
document.getElementById("button").onclick = function calc() {
    var yearOfBirth = parseInt(document.getElementById("yearofbirth").value);
    var age = new Date().getFullYear() - yearOfBirth;
    document.getElementById("age").value = age;
};