function SearchF(){
    var t=document.getElementById("text").value;
    var i= document.getElementById("in1").value;
    var s=document.getElementById("sonuc");
    var result=t.includes(i);
    if(result==true && i!=""){
        s.innerHTML="Aradığınız kelime vardır";
        s.style.color="green";
    }else if(i==""){
        alert("inputa bir mesaj yazın!")
    }
    
    
    else{
        s.innerHTML="kelime bulunamadı"
        s.style.color="red"
    }
}