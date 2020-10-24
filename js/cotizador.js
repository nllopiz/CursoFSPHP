//datos usuario
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");

//datos compra
var pase_dia = document.getElementById("pase_dia");
var pase_dia_precio = 30;

var pase_completo = document.getElementById("pase_completo");
var pase_completo_precio = 50;

var pase_dosdias = document.getElementById("pase_dosdias");
var pase_dosdias_precio = 45;

var camisa_evento = document.getElementById("camisa_evento");
var camisa_evento_precio = 10;
var camisa_descuento = 0.20;

var etiquetas = document.getElementById("etiquetas");
var etiquetas_precio = 2;

var regalo = document.getElementById("regalo");

var calcular = document.getElementById("calcular");
var pagar = document.getElementById("pagar");


/* Validación datos usuario */
function validarDatosUsuario() {
    var nombreOk = false;
    var apellidoOk = false;
    var emailOk = false;
    var divError = document.getElementById("error");
    if (email.value.indexOf('@') === -1) {
        divError.setAttribute("style", "display: block");
        email.focus({ preventScroll: false });
    } else {
        emailOk = true;
    }
    if (apellido.value === "") {
        divError.setAttribute("style", "display: block");
        apellido.focus({ preventScroll: false });
    } else {
        apellidoOk = true;
    }
    if (nombre.value === "") {
        divError.setAttribute("style", "display: block");
        nombre.focus({ preventScroll: false });
    } else {
        nombreOk = true;
    }
    if (nombreOk && emailOk) {
        divError.setAttribute("style", "display: none");
        validarCompra();
    }
}

/* Resumen */

function validarCompra(){
    var boletosPorDia = parseInt(pase_dia.value);
    var boletosPor2Dias = parseInt(pase_dosdias.value);
    var boletosCompleto = parseInt(pase_completo.value);
    
    /* Validar cantidades */
    if (boletosPorDia === 0 && boletosPor2Dias === 0 && boletosCompleto === 0) {
        alert("No ha seleccionado cantidad");
        pase_dia.focus({ preventScroll: false });
        return false;
    }

    var remeras = parseInt(camisa_evento.value);
    var paquetes = parseInt(etiquetas.value);
    var obsequio = parseInt(regalo.value);

    /* Validar regalo */
    if (obsequio === 0){
        alert("No olvides seleccionar tu regalo");
        regalo.focus({ preventScroll: false });
        return false;
    }

    /* Calcular */
    var totalBoletosPorDia = boletosPorDia * pase_dia_precio;
    var totalBoletosCompleto = boletosCompleto * pase_completo_precio;
    var totalBoletosPor2Dias = boletosPor2Dias * pase_dosdias_precio;
    var totalRemeras = remeras * camisa_evento_precio;
    var totalDescuento = totalRemeras * camisa_descuento;
    var totalPaquetes = paquetes * etiquetas_precio;
    var total = totalBoletosPorDia + totalBoletosCompleto + totalBoletosPor2Dias + totalRemeras + totalPaquetes - totalDescuento;
   
    /* Completar resumen */
    var resumenPorDia = boletosPorDia + " x Boleto Pase POR DÍA: $ " + totalBoletosPorDia;
    var resumenCompleto = boletosCompleto + " x Boleto Pase TODOS LOS DÍAS: $ " + totalBoletosCompleto;
    var resumenPor2Dias = boletosPor2Dias + " x Boleto Pase POR 2 DÍAS: $ " + totalBoletosPor2Dias;
    var resumenRemeras = remeras + " x Remera: $ " + totalRemeras;    
    var resumenDescuento = " Descuento 20%: -$ " + totalDescuento;
    var resumenPaquetes = paquetes + " x Paquete: $ " + totalPaquetes;   
    var resumenRegalo = "Regalo (sin cargo)";
     
    document.getElementById("resumenPorDia").innerHTML = resumenPorDia;
    document.getElementById("resumenCompleto").innerHTML = resumenCompleto;
    document.getElementById("resumenPor2Dias").innerHTML = resumenPor2Dias;
    document.getElementById("resumenRemeras").innerHTML = resumenRemeras;
    document.getElementById("resumenDescuento").innerHTML = resumenDescuento;
    document.getElementById("resumenPaquetes").innerHTML = resumenPaquetes;
    document.getElementById("resumenRegalo").innerHTML = resumenRegalo;
    document.getElementById("total").innerHTML = "$ " + total;
    
}

calcular.addEventListener("click", validarDatosUsuario);


