function signup(){
    var name = document.getElementById("txt_name").value;
    var cpassword = document.getElementById("txt_Ccontra").value;
    var lastname = document.getElementById("txt_apellido").value;
    var username = document.getElementById("txt_user").value;
    var email = document.getElementById("txt_email").value;
    var password = document.getElementById("txt_contra").value;
    var borndate = document.getElementById("txt_fecha").value;
    var [year, month, day] = borndate.split('-');
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    var today = new Date();
    var dayy = today.getDate();
    var monthh = today.getMonth()+1;
    var yearr = today.getFullYear();

    var t1 = /\w+@\w+\.+[a-z]/;
    var t2 = /^[a-zA-Z0-9\_\-]/;
    var t3 = /^[a-zA-ZÀ-ÿ\s]/;
    if (name == "" || cpassword == "" || lastname == "" || username == "" || email == "" || password == "" || borndate == ""){
        alert("LLena toda la informacion");
        return false;
    }else if(!t3.test(name)){
            document.getElementById("txt_nameM").innerHTML = "Tu nombre debe tener Solo letras";
            return false;
        }
    else if(!t3.test(lastname)){
        document.getElementById("txt_apellidoM").innerHTML = "Tu nombre debe tener solo letras";
        return false;
    }
    else if(password.length>20 || password.length<8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!"#$%&()=?¡]/.test(password)){
        document.getElementById("txt_contraM").innerHTML = "La contraseña debe tener maximo 20 caracteres minimo 8,debe tener mayusculas, minusculas, numeros y signos de puntuacion";
        return false;
    }
    else if(password != cpassword){
        document.getElementById("txt_CcontraM").innerHTML = "La contraseña no es la misma";
        return false;
    }
    else if(!t1.test(email)){
        document.getElementById("txt_emailM").innerHTML = "Tu email tiene caracteres invalidos";
        return false;
    }
    else if(!t2.test(username)){
        document.getElementById("txt_userM").innerHTML = "tu usuario no tiene caracteres validos";
        return false;
    }
    else if(year > yearr){
        document.getElementById("txt_fechaM").innerHTML = "Fecha invalida";
        return false;
    }else if(month > monthh){
        document.getElementById("txt_fechaM").innerHTML = "Fecha Invalida";
        return false;
    }else if(day > dayy){
        document.getElementById("txt_fechaM").innerHTML = "Fecha Invalida";
        return false;
    }
}