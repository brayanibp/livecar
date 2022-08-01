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