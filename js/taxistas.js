//ADD TAXISTA
const $form_add_tax = document.querySelector('#form-add-tax')
if ($form_add_tax) {
  $form_add_tax.addEventListener('submit', async (event) => {
    const $error_text = document.querySelector('#taxista-error-text') || null;
    event.preventDefault();
    const formDataAddTaxista = new FormData(event.currentTarget);
    const taxistaData = formDataToJSON(formDataAddTaxista);
    try {
      const res = await axios.post('https://livecarapi.herokuapp.com/taxista/create', {
        taxista: taxistaData,
      });
      console.log(res);
      $error_text.innerHTML = res.data.message;
    } catch (error) {
      $error_text.innerHTML = error.response.data.message;
    }
  });
}



// COSULTAR / ELIMNAR TAXISTA 
const $form_con_mod_tax = document.querySelector('#form-con-mod-tax')
if ($form_con_mod_tax) {
  $form_con_mod_tax.addEventListener('submit',async (event) => {
    event.preventDefault();
  });
  const $consultar_taxista = document.querySelector('#consultar_taxista');
  $consultar_taxista.addEventListener('click', async () => {
    const formDataConElTaxista = new FormData($form_con_mod_tax);
    const taxistaData = formDataToJSON(formDataConElTaxista);
    const $response_text = document.querySelector('#driver-get-response');
    const $error_text = document.querySelector('#driver-get-error-text');
    try {
      const res = await axios.get(`https://livecarapi.herokuapp.com/taxista/${taxistaData.ID || 'ced/'+taxistaData.cedula}`, {
        taxista: taxistaData
      });
      console.log(res);
      let taxistaPrint = '';
      for (const key in res.data.taxista) {
        taxistaPrint += key + ': ' + res.data.taxista[key] + ' ';
      }
      $response_text.innerHTML = taxistaPrint;
    } catch (error) {
      $error_text.innerHTML = error.response.data.message;
    }
  });
}

// MODIFICAR TAXISTA
const $form_mod_tax = document.querySelector('#form-mod-taxista')
if ($form_mod_tax) {
    $form_mod_tax.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModTaxista = new FormData(event.currentTarget);
        axios.put('/', {
            body: formDataModTaxista,
        });
    })
}