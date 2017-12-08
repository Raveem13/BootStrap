var keylist = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#$%^&*";
var tmp = '';
function generatepass(plength) {
    tmp=''
    for(var i=0; i<plength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return tmp;
}
function populateForm(enterlength){
    document.passgen.output.value = generatepass(enterlength);
}