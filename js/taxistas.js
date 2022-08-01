//ADD TAXISTA
const $form_add_tax = document.querySelector('#form-add-tax')
if ($form_add_tax) {
  $form_add_tax.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDataAddTaxista = new FormData(event.currentTarget);
    const taxistaData = formDataToJSON(formDataAddTaxista);
    axios.post('https://livecarapi.herokuapp.com/taxista/create', {
      taxista: taxistaData,
    });
  });
}



// COSULTAR / ELIMNAR TAXISTA 
const $form_con_mod_tax = document.querySelector('#form-con-mod-tax')
if ($form_con_mod_tax) {
  $form_con_mod_tax.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDataConElTaxista = new FormData(event.currentTarget);
    const taxistaData = formDataToJSON(formDataConElTaxista);
    axios.get(`https://livecarapi.herokuapp.com/taxista/${taxistaData.cedula}`, {
      taxista: taxistaData,
    });
  });
}

// MODIFICAR TAXISTA
const $form_mod_tax = document.querySelector('#form-mod-taxista')
if ($form_mod_tax) {
    $form_mod_tax.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModTaxista = new FormData(event.currentTarget)
        fetch('/', {
            method: 'POST',
            body: formDataModTaxista,
        })
    })
}