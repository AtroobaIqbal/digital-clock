var format;
function displayClock(){
    var date = new Date();
    var hour = date.getHours()
    var min =  date.getMinutes()
    var sec = date.getSeconds()
    format = `${hour} : ${min} : ${sec}`
    document.getElementById('clock').innerHTML = format;
    // return format;
}
displayClock()
setInterval(displayClock, 1000)