const $form_login = document.querySelector('#form-login');

const sendData = async () => {
  const $form_login = document.querySelector('#form-login') || null;
  const formDataLogin = new FormData($form_login);
  const login = formDataToJSON(formDataLogin);
  const $error_text = document.querySelector('#error-text') || null;
  try {
    const res = await axios.post('https://livecarapi.herokuapp.com/login', {
      login: login
    });
    $error_text.innerHTML = "";
    setAuthToken(res.data);
    window.location.reload();
    return null;
  } catch (err) {
    const { response } = err;
    $error_text.innerHTML = response.data.message;
    return null;
  }
}

if ($form_login) {
  $form_login.addEventListener('submit',(ev)=>{
    ev.preventDefault();
  });
  const $login_button = document.querySelector('#login_button');
  $login_button.addEventListener('click',()=>{
    sendData();
  });
  const $reset_button = document.querySelector('#reset_password');
  $reset_button.addEventListener('click', async () => {
    const formDataLogin = new FormData($form_login);
    const { email } = formDataToJSON(formDataLogin);
    const $error_text = document.querySelector('#error-text') || null;
    try {
      const res = await axios.post('https://livecarapi.herokuapp.com/reset_password', {
        email
      });
      const emailResponse = await axios.post('https://livecarapi.herokuapp.com/send_email',{
        email
      });
      console.log(res, emailResponse);
      alert(`Se ha enviado un correo a: ${email} con los nuevos datos. Revisa tu bandeja principal o la sección de SPAM.`);
    } catch (error) {
      const { response } = error;
      $error_text.innerHTML = response.data.message;
    }
  });
}