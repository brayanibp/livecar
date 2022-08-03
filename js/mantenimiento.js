// MANTENIMIENTO 

// MODIFICAR PASSWORD
const $form_mod_password = document.querySelector('#form-mod-password')
if ($form_mod_password) {
  $form_mod_password.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formDataModPassword = new FormData(event.currentTarget);
    const passwordsData = formDataToJSON(formDataModPassword);
    const $error_text = document.querySelector('#password-get-error-text');
    try {
      const res = await axios.post('https://livecarapi.herokuapp.com/change_password', {
        user: SESSION,
        passwords: passwordsData
      });
      setAuthToken(res.data.session);
      alert(res.data.message);
      window.location.reload();
    } catch (error) {
      $error_text.innerHTML = error.data.message;
    }
  });
}


// NUEVA PASSWORD

const $form_new_pass = document.querySelector('#form-new-password')
if ($form_new_pass) {
    $form_new_pass.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataNewPass = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataNewPass,
        })
    })
}

// BAJAR RESPALDO
const $form_bajar_respaldo = document.querySelector('#form-bajar-respaldo')
if ($form_bajar_respaldo) {
  $form_bajar_respaldo.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get('https://livecarapi.herokuapp.com/respaldo');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });
}


// SUBIR RESPALDO

const $form_subir_respaldo = document.querySelector('#form-subir-respaldo')
if ($form_subir_respaldo) {
  $form_subir_respaldo.addEventListener('submit', (event) => {
    event.preventDefault()
    const formDataSubirRespaldo = new formData(event.currentTarget)
    fetch('https://livecarapi.herokuapp.com/', {
      method: 'POST',
      body: formDataSubirRespaldo,
    })
  })
}