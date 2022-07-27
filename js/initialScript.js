const ACCESS = (localStorage.getItem('access') === true);

console.log(ACCESS,window.location.hostname);

// if (!ACCESS && !window.location.href.includes('login')) {
//     console.log("Está pasando por la autenticación");
//     localStorage.setItem('access',false);
//     window.location.assign("https://"+window.location.hostname+"/livecar/login");
// }