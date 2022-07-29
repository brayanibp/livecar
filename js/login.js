const $form_login = document.querySelector('#form-login');

const sendData = async (event) => {
  event.preventDefault();
  const $form_login = document.querySelector('#form-login') || null;
  const formDataLogin = new FormData($form_login);
  const login = formDataToJSON(formDataLogin);
  try {

    const res = await axios.post('https://livecarapi.herokuapp.com/login', {
      login: login
    });
    console.log(res);
    return res;
  } catch (err) {
    const { response } = err;
    console.log(response.data);
    return null;
  }
}

if ($form_login) {
  $form_login.addEventListener('submit',(ev)=>{
    sendData(ev);
  })
}