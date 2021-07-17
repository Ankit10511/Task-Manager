let text = "";
let high = "";
let mid = "";
let low = "";
let highsep = "";
let midsep = "";
let lowsep = "";
function main(){
    var ele=document.getElementById("priority").value;
    if(ele=="h")
    {
        highp();
    }
    else if(ele=="m")
    {
        midp();
    }
    else 
    {
        lowp();
    }
}
function highp(){
    var message=document.getElementById("name").value;    
if(message!=="")
    { 
    text += message+" "+"<br>" ;
    high += message+" "+"<span>(high)</span>"+"<br>" ;
    highsep += message+"<br>" ;
    document.getElementById("demohigh").innerHTML =high;
    }
}

function midp(){
    var message=document.getElementById("name").value;
    if(message!=="")
    {  
    text += message +" "+"<br>";
    mid += message+" "+"<span>(mid)</span>"+"<br>";
    midsep += message+"<br>" ;
    document.getElementById("demomid").innerHTML = mid;
    }
}

function lowp(){
var message=document.getElementById("name").value;
    if(message!=="")
    {
    text += message +" "+"<br>";
    low += message +" "+"<span>(low)</span>"+"<br>";
    lowsep += message+"<br>" ;

    document.getElementById("demolow").innerHTML =low;
    }
} 
function highshow(){
    var highbackground=document.getElementById("dem");
    highbackground.innerHTML = highsep;
}

function midshow(){
    var highbackground=document.getElementById("dem");
    document.getElementById("dem").innerHTML = midsep;
}

function lowshow(){
    var highbackground=document.getElementById("dem");
    document.getElementById("dem").innerHTML = lowsep;
}