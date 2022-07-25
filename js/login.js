const $form_login = document.querySelector('#form-login');

const sendData = async (event) => {
  event.preventDefault();
  const $form_login = document.querySelector('#form-login') || null;
  const formDataLogin = new FormData($form_login);
  let body = {};
  for (let entry of formDataLogin.entries()) {
    body[entry[0]] = entry[1];
  }
  const res = await fetch('https://livecarapi.herokuapp.com/login', {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: 'POST',
    body: formDataLogin
  });
  const data = await res.json();
  console.log(data, JSON.stringify(body));
  return data;
}

if ($form_login) {
  $form_login.addEventListener('submit',(ev)=>{
    sendData(ev);
  })
}