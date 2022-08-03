// CARROS 
// CONSULTAR / ELIMINAR CARRO

const $form_con_el_car = document.querySelector('#form-con-el-car')
if ($form_con_el_car) {
    $form_con_el_car.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    const $consultar_carro = document.querySelector('#consultar_carro');
    $consultar_carro.addEventListener('click', async ()=>{
      const formDataConElCarro = new FormData($form_con_el_car);
      const carroIDs = formDataToJSON(formDataConElCarro);
      const $response_text = document.querySelector('#carro-get-response');
      const $error_text = document.querySelector('#carro-get-error-text');
      try {
        const res = await axios.get(`https://livecarapi.herokuapp.com/carro/${carroIDs.ID || 'mat/'+carroIDs.matricula}`, {
          carro: carroIDs,
        });
        console.log(res);
        let carroPrint = '';
        for (const key in res.data.carro) {
          carroPrint += key + ': ' + res.data.carro[key] + ' ';
        }
        $response_text.innerHTML = taxistaPrint;
      } catch (error) {
        $error_text.innerHTML = error.response.data.message;
      }
    });
}

const $form_mod_car = document.querySelector('#form-mod-car')
if ($form_mod_car) {
    $form_mod_car.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModCarro = new FormData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataModCarro,
        })
    })
}
