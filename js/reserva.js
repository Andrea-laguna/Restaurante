function reservar() {

    let bolsa = document.querySelectorAll(".form-control, .form-select");

    let nombre = bolsa[0].value;
    let correo = bolsa[1].value;
    let fecha = bolsa[2].value;
    let hora = bolsa[3].value;
    let personas = bolsa[4].value;

    if (!nombre || !correo || !fecha || !hora || !personas) {

        alert("❌ Error, faltan datos");
        return;

    } else {

        alert(nombre + 
        ", tu reserva fue enviada correctamente para el " 
        + fecha + " a las " + hora);

    }
}