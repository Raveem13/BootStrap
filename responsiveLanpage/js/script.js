var d, h, m, s, clock;
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], months =["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function clck(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

if(h <= 9 ) {
    h='0'+h;
}

if(m <= 9 ) {
    m='0'+m;
}
if(s <= 9 ) {
    s='0'+s;
}


clock = h +":"+ m +":"+ s;
document.getElementById("clock").innerHTML = clock;
document.getElementById("date").innerHTML = days[d.getDay()] + ", "+ months[d.getMonth()] + " " + d.getDate() + " "+d.getFullYear();

setTimeout(clck,1000);
}
clck();
