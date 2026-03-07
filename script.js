function validationForm(){
    let user=document.getElementById("username").value.trim();
    let pass=document.getElementById("password").value.trim();
    if(user===""||pass===""){
        alert("important to fill all boxes")
        return false;
    }
    window.location.href="progress.html";
    return false;
}

function calculate(op){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let res;
    if (isNaN(n1)||isNaN(n2)){
        res="Invalid";
    }
    else{
        switch(op){
            case '+': res=n1+n2;break;
            case '-': res=n1-n2;break;
        }
    }
    document.getElementById("result").innerText="Result:"+res;
}