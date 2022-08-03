const SESSION = getAuthToken();

if (!SESSION && !window.location.href.includes('login')) {
    window.location.assign("https://"+window.location.hostname+"/livecar/login");
}

if (SESSION && window.location.href.includes('login')) {
    window.location.assign("https://"+window.location.hostname+"/livecar");
}

function logout() {
    removeAuthToken();
    window.location.reload();
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}