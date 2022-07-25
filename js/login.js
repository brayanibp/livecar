const sendData = async (event) => {
  event.preventDefault();
  const $form_login = document.querySelector('#form-login')
  const formDataLogin = new FormData($form_login);
  const res = await fetch('https://livecarapi.herokuapp.com/login', {
    method: 'POST',
    body: formDataLogin,
    mode:"cors"
  });
  return res.json();
}