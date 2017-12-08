var add = document.getElementById('add');
var remvall = document.getElementById('rmoveall');
var list = document.getElementById('list');

//function for remove all

remvall.onclick = function(){
    list.innerHTML = '';
}


//adding a new list element

add.onclick = function(){
    addlst(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
    
}

function addlst(trgtUl){
    var inputtxt = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var txtNode = document.createTextNode(inputtxt + ' ');
    var rmovebtn = document.createElement('button');
    
    rmovebtn.style.float = 'right';
    
    if(inputtxt !== ''){
        rmovebtn.className = 'btn btn-xs btn-danger';
        rmovebtn.innerHTML = '&times;';
        rmovebtn.setAttribute('onClick', 'removeMe(this)');
        
        li.appendChild(txtNode);
        li.appendChild(rmovebtn);
        trgtUl.appendChild(li);
    }
    else{
        alert("Please enter a TODO");
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
    
}