// SERVICIOS

// NUEVO SERVICIO
const $form_new_service = document.querySelector('#form-new-service')
if ($form_new_service) {
    $form_new_service.addEventListener('submit', (event) => {
      event.preventDefault();
      const formDataNewService = new FormData(event.currentTarget);
      const serviceData = formDataToJSON(formDataNewService);
      try {
        const res = axios.post('https://livecarapi.herokuapp.com/', {
          service: serviceData,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })
}


//CONSULTAR Y ANULAR SERVICIO

const $form_con_anu_servicio = document.querySelector('#form-con-anu')
if ($form_con_anu_servicio) {
    $form_con_anu_servicio.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataConAnuServicio = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataConAnuServicio,
        })
    })
}