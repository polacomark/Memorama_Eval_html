// Consignas:
// Un formulario con validación personalizada (utilizando la API trabajada).
// Un juego (que utilice al menos 2 de los temas trabajados. Ej. funciones / DOM / eventos / condicionales).
// Una función asociada a un botón.

function habilitar(){
    txt_1 = document.getElementById("usu").value,
    txt_2 = document.getElementById("email").value,
    //txt_3 = document.getElementById("terms").value,
    txt_4 = document.getElementById("select").value,
    val = 0;

    if(txt_1 == ""){
        val++;
    }
    if(txt_2==""){
        val++;
    }
    // if(txt_3==""){
    //     val++
    // }
    if(txt_4==""){
        val++;
    }
    if(val==0){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
}
document.getElementById("usu").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
//document.getElementById("terms").addEventListener("keyup", habilitar);
document.getElementById("select").addEventListener("change", habilitar);
document.getElementById("btn")
 document.getElementById("btn").addEventListener("click", ()=>{
     alert("haz completado correctamente, puede realizar el juego")
});