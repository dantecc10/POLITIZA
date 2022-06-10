function Subir() {
    var formulario = "";
    var usuario = document.form1.usuario.value;
    var nombre = document.form1.nombre.value;
    var apellido = document.form1.apellido.value;
    var email = document.form1.email.value;
    var clave1 = document.form1.clave1.value;
    var clave2 = document.form1.clave2.value;
    var hobbies = "";
    var b = document.form1.hobby.length;
    for (a = 0; a < b; a++) {
        if (document.form1.hobby[a].checked)
            hobbies += document.form1.hobby[a].value + ", ";
    }
    var pais = document.form1.pais.value;
    var sexo = document.form1.sexo.value;
    if (usuario == "" || nombre == "" || apellido == "" || pais == "") {
        alert("Los campos con asterisco son obligatorios!!!");
        return false;
    }
    if (hobbies.length == 0) {
        alert("Debes seleccionar al menos un hobby!!");
        return false;
    }
    if ((clave1 != clave2) || (clave1 == "")) {
        alert("Las claves deben ser iguales y/o no pueden ser en blanco!!!");
        return false;
    }
    if (email == "") { email.value = "No informado" };
    if (sexo == "") { sexo.value = "No informado" };
}
function docs() {
    var usuario = document.form1.usuario.value;
    var nombre = document.form1.nombre.value;
    var apellido = document.form1.apellido.value;
    var email = document.form1.email.value;
    var clave1 = document.form1.clave1.value;
    var clave2 = document.form1.clave2.value;
    var hobbies = "";
    var b = document.form1.hobby.length;
    for (a = 0; a < b; a++) {
        if (document.form1.hobby[a].checked)
            hobbies += document.form1.hobby[a].value + ", ";
    }
    var pais = document.form1.pais.value;
    var sexo = document.form1.sexo.value;

    var logo = new Image();
    logo.src = 'Logo.png';

    const pdf = new jsPDF();
    pdf.setFontSize(22);
    pdf.text(70, 10, "Informacion de usuario");
    pdf.setLineWidth(0.7);
    pdf.setFontSize(14);

    //lineas horizontales
    pdf.line(4, 20, 206, 20);
    pdf.line(4, 290, 206, 290);
    //lineas verticales
    pdf.line(4, 20, 4, 290);
    pdf.line(206, 20, 206, 290);

    pdf.text(6, 30, 'Usuario: ');
    pdf.text(30, 30, usuario);
    pdf.text(6, 40, 'Nombre: ');
    pdf.text(30, 40, nombre);
    pdf.text(6, 50, 'Apellido: ');
    pdf.text(30, 50, apellido);
    pdf.text(6, 60, 'email: ');
    pdf.setTextColor(0, 0, 255);
    pdf.text(30, 60, email);
    pdf.setTextColor(0);
    pdf.text(6, 70, 'Hobbies: ');
    pdf.text(30, 70, hobbies);
    pdf.text(6, 80, 'Pais: ');
    pdf.text(30, 80, pais);
    pdf.text(6, 90, 'Sexo: ');
    pdf.text(30, 90, sexo);
    pdf.setLineWidth(0.7);
    /* pdf.addImage(logo, 15, 40, 140, 210); */
    pdf.save(`Usuario info.pdf`);
}