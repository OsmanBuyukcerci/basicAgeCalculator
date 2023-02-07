document.getElementById("button").onclick = function calc() {
    var age = new Date().getFullYear() - document.getElementById("yearofbirth").value;
    document.getElementById("resultMsg").innerHTML = "Your age is "+age;
}