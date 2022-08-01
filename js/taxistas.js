//ADD TAXISTA
const $form_add_tax = document.querySelector('#form-add-tax')
if ($form_add_tax) {
    $form_add_tax.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataAddTaxista = new formData(event.currentTarget)

        fetch('/', {
            method: 'POST',
            body: formDataAddTaxista,
        })
    })
}



// COSULTAR / ELIMNAR TAXISTA 
const $form_con_mod_tax = document.querySelector('#form-con-mod-tax')
if ($form_con_mod_tax) {
    $form_con_mod_tax.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataConElTaxista = new formData(event.currentTarget)

        fetch('/', {
            method: 'POST',
            body: formDataConElTaxista,
        })
    })
}

// MODIFICAR TAXISTA
const $form_mod_tax = document.querySelector('#form-mod-taxista')
if ($form_mod_tax) {
    $form_mod_tax.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModTaxista = new formData(event.currentTarget)
        fetch('/', {
            method: 'POST',
            body: formDataModTaxista,
        })
    })
}