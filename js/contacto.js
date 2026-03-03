function contactar(){
    //let nombre = document.getElementById('nombre').value
    //let correo = document.getElementById('correo').value
    //let mensaje = document.getElementById('mensaje').value


    //if(!nombre || !correo || !mensaje){
       // alert('📍Error faltan datos')
    //}

    //else{
        //alert(nombre + "✏️Su mensaje ha sido enviado. Gracias por contactarnos!");
    //}
    //alert(nombre)
    //alert(correo)
    //alert(mensaje)

   let bolsa = document.querySelectorAll('.form-control');
   let nombre= bolsa[0].value;
   for (let i = 0; i < bolsa.length; i++) {
    const elemento = bolsa[i].value; //el array se llama bolsa 
    if(!nombre || !correo || !mensaje){
        alert("Error... Faltan datos!")
        return;//encuentra un campop vacio y de una se sale 
    }
    else{
        alert(nombre+ "✏️Su mensaje ha sido enviado. Gracias por contactarnos!.")
        return;
    }
    
   }
}