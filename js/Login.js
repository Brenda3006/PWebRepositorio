function login(){
    var name = document.getElementById("user").value;
    var password = document.getElementById("contra").value;

    if (name == "" || password == ""){
        document.getElementById("Mensaje").innerHTML = "Llena todos los Campos";
        return false;
    }
}