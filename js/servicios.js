// SERVICIOS

// NUEVO SERVICIO
const $form_new_service = document.querySelector('#form-new-service')
if ($form_new_service) {
    $form_new_service.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formDataNewService = new FormData(event.currentTarget);
      const serviceData = formDataToJSON(formDataNewService);
      const $error_text = document.querySelector('#servicio-get-error-text');
      const $response_text = document.querySelector('#servicio-get-response');
      try {
        const res = await axios.post('https://livecarapi.herokuapp.com/servicios/create', {
          service: serviceData,
        });
        console.log(res);
        $response_text.innerHTML = res?.data?.message || JSON.stringify(res);
      } catch (error) {
        console.log(error);
        $error_text.innerHTML = error?.response?.data?.message || error.message;
      }
    })
}


//CONSULTAR Y ANULAR SERVICIO

const $form_con_anu_servicio = document.querySelector('#form-con-anu')
if ($form_con_anu_servicio) {
    $form_con_anu_servicio.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formDataConAnuServicio = new FormData(event.currentTarget);
        const serviceIDs = formDataToJSON(formDataConAnuServicio);
        const $error_text = document.querySelector('#serv-get-error-text');
        const $response_text = document.querySelector('#serv-get-response');
        try {
          const res = await axios.get('https://livecarapi.herokuapp.com/servicio/'+serviceIDs.ID);
          console.log(res);
          let servicePrint = '';
          for (const key in res.data.service) {
            servicePrint += key + ': ' + res.data.service[key] + ' ';
          }
          $response_text.innerHTML = servicePrint;
        } catch (error) {
          console.log(error);
          $error_text.innerHTML = error?.response?.data?.message || error.message;
        }
    })
}