const $form_login = document.querySelector('#form-login');

const sendData = async (event) => {
  event.preventDefault();
  console.log("ENTRAMOS");
  const $form_login = document.querySelector('#form-login') || null;
  const formDataLogin = new FormData($form_login);
  console.log(formDataLogin.values());
  // const res = await fetch('https://livecarapi.herokuapp.com/login', {
  //   method: 'POST',
  //   body: formDataLogin,
  //   mode:"cors"
  // });
  // const data = await res.json();
  console.log(data);
  return data;
}

if ($form_login) {
  $form_login.addEventListener('submit',(ev)=>{
    sendData(ev);
  })
}