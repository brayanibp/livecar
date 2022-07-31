const $form_login = document.querySelector('#form-login');

const sendData = async (event) => {
  event.preventDefault();
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
    sendData(ev);
  })
}