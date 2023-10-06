function Hesapla(){
    var v=Number(document.getElementById('vizeid').value);
    let f=Number(document.getElementById('finalid').value);
    var result= (v*0.4) + (f*0.6);
    document.getElementById('sonucid').innerHTML='SONUC:' + result;
    
}