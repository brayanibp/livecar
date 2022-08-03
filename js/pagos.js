// PAGOS / CONSULTAR PAGO
const $form_consultar_pago = document.querySelector('#form-pago')
if ($form_consultar_pago) {
    $form_consultar_pago.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formDataConPago = new FormData(event.currentTarget)
        const pagoIDs = formDataToJSON(formDataConPago);
        const $error_text = document.querySelector('#pago-get-error-text');
        const $response_text = document.querySelector('#pago-get-response');
        try {
          const res = axios.get(`https://livecarapi.herokuapp.com/pagos/${pagoIDs.ID || 'ref/'+pagoIDs.referencia }`);
          console.log(res);
          let pagoPrint = '';
          for (const key in res.data.pago) {
            pagoPrint += key + ': ' + res.data.pago[key] + ' ';
          }
          $response_text.innerHTML = pagoPrint;
        } catch (error) {
          console.log(error);
          $error_text.innerHTML = error?.response?.data?.message || error.message;
        }
    })
}

//REPORTES

//REPORTE DE SERVICIOS 
const $form_reporte_servicio = document.querySelector('#form-reporte-servicio')
if ($form_reporte_servicio) {
    $form_reporte_servicio.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataReporteServicio = new formData(event.currentTarget)
        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataReporteServicio,
        })
    })
}