var sorular=["1.soru", "2.soru", "3.soru"];
var cevaplar=["1.cevap", "2.cevap", "3.cevap"];
var kontrol=0;
document.getElementById('sorualan').innerHTML=sorular[kontrol];

function NextQuestion(){
    kontrol++;
    document.getElementById('sorualan').innerHTML=sorular[kontrol];
    document.getElementById('cevapalan').innerHTML='';
}
function ShowAnswer(){
    document.getElementById('cevapalan').innerHTML=cevaplar[kontrol];
}

function BackQuestion(){
    kontrol--;
    document.getElementById('sorualan').innerHTML=sorular[kontrol];  
    document.getElementById('cevapalan').innerHTML='';  
}