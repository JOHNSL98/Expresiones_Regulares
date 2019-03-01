function validar() {
    var expreg;

    var name = document.getElementById("nombre").value;
    if(name == ''){
        alert("Ingrese un nombre.");
    } else {
        expreg = new RegExp("^[A-Za-z\\s]*$");
        if(expreg.test(name)) {
            alert("El nombre es correcto");
        } else {
            alert("El nombre no es correcto");
        }
    }

    var tel = document.getElementById("telefono").value;
    if(tel == ''){
        alert("Ingrese un numero de telefono.");
    } else {
        expreg = new RegExp("^[0-9]*$");
        if(expreg.test(tel)) {
            alert("El telefono es correcto");
        } else {
            alert("El telefono no es correcto");
        }
    }
    
    var email = document.getElementById("correo").value;
    if(email == ''){
        alert("Ingrese un correo.");
    } else {
        expreg = new RegExp("^[^@]+@[^@]\\.\\[a-zA-Z]{2,}$");
        if(expreg.test(email)) {
            alert("El correo es correcto");
        } else {
            alert("El correo no es correcto. Ingrese Ex. example@ex.com");
        }
    }

    var placa = document.getElementById("placa").value;
    if(placa == ''){
        alert("Ingrese una placa.");
    } else {
        expreg = new RegExp("^[A-Za-z]{3}\\-\\d{3}$");
        if(expreg.test(placa)) {
            alert("La placa es correcta");
        } else {
            alert("La placa no es correcta. Ingrese Ex. ABC-123");
        }
    }
}