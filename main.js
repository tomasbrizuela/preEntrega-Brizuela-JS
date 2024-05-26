let monto = Number(prompt("Ingrese el monto a solicitar en pesos argentinos"));

let metodoDePago = "";
let interes = Number(0.1);
let cuotas = Number(0);
let total = Number(0);
let valorCuotas = Number(0);


let pais = "";

if (monto) {

    metodoDePago = (prompt(`Seleccioná el método de pago: "Cuotas" o "Un Pago"`, `"Cuotas" o "Un Pago"`)).toLowerCase();

    } else {

    Number(prompt("Por favor ingrese el monto a solicitar en pesos argentinos para continuar con el préstamo"))

}

if (metodoDePago) {
    pais = prompt("Ingresá el nombre de tu país").toLowerCase();
}

if ( pais != "argentina") {
    alert("Actualmente no podemos otorgar préstamos a residentes de " + pais)
} else {
    if(monto) {
        if(metodoDePago === "cuotas" ){
            confirm("Antes de seguir, tené en cuenta que si elegís menos de 6 cuotas, el interés es del 10%. Si elegís más de 6 cuotas, el interés es del 20%")
            cuotas = Number(prompt("Ingresá la cantidad de cuotas"));

            if ( cuotas < 6 ){
                total = Number(( monto + (monto * interes) ));
                valorCuotas = Math.floor(Number(total / cuotas));
                alert(`Total a pagar de $` + total + " en " + cuotas + " cuotas de $" + valorCuotas);
            } else {
                interes = 0.2;
                total = Number(( monto + (monto * interes) ));
                valorCuotas = Math.floor(Number(total / cuotas));
                alert(`Total a pagar de $` + total + " en " + cuotas + " cuotas de $" + valorCuotas);
            }
            
        
            } else {
        
            alert("Total a pagar de: $"+ monto + " en una sola cuota");
        
        }
    }
}



