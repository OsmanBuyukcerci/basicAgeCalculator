// ver 0.12

document.getElementById("button").onclick = function calc() {
    var year = document.getElementById("yearInput").value;
    var month = document.getElementById("monthInput").value;
    var date = document.getElementById("dateInput").value;
    var birthday = new Date();
    birthday.setFullYear(year);
    birthday.setMonth(month-1);
    birthday.setDate(date);
    var ageMilisecond = new Date() - birthday;
    ageSecond = ageMilisecond / 1000;
    ageMinute = ageSecond / 60;
    ageHour = ageMinute / 60;
    ageDay = ageHour / 24;
    ageYear = ageDay / 365;

    document.getElementById("yearOutput").innerHTML = "Your age is " + parseInt(ageYear);
    document.getElementById("hourOutput").innerHTML = "You lived for " +ageHour + " hours";
    
}