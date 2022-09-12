function insert(num){
 var numero =   document.getElementById("display").innerHTML ;
document.getElementById("display").innerHTML = numero + num;
}
function clean(){
     document.getElementById("display").innerHTML = "";
}
function calcular(){
    var numero = document.getElementById("display").innerHTML;
   
       
   

    if (numero) {
        document.getElementById("display").innerHTML = eval(numero);
        
    } else {
        document.getElementById("display").innerHTML = "";
        
    } 
       

}