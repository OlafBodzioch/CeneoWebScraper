function redirect() {

    var x = parseInt(document.getElementById("product-id").value);
    
    if(isNaN(x))
    {
        alert("Nieprawidłowe ID. Proszę wprowadzić prawidłowe ID.")
    }
    else
    {
        window.location.href = "lista.html";
    }
}