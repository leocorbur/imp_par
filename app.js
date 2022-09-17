function imp_pares(){
    var num = document.getElementById("numero").value;
    var pares = [];
    for(i=1; i <= num; i++){
        if(i % 2 == 0){
            pares.push(i);
        }
    }
    document.getElementById("output").innerHTML = pares;
}