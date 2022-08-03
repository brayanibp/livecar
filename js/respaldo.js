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