const crypted = CryptoJS.AES.encrypt("aaaaaaa","secret").toString();
const SESSION = getAuthToken();

console.log(SESSION,window.location.hostname, crypted);

if (!SESSION && !window.location.href.includes('login')) {
    localStorage.setItem('SESSION',null);
    window.location.assign("https://"+window.location.hostname+"/livecar/login");
}

if (SESSION && window.location.href.includes('login')) {
    window.location.assign("https://"+window.location.hostname+"/livecar");
}