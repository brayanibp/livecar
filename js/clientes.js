// CLIENTES
//ADD CLIENTE
const $create_client_form = document.querySelector('#form-add-clien');
if ($create_client_form) {
    $create_client_form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formDataClient = new FormData(event.currentTarget);
        const client = formDataToJSON(formDataClient);
        try {
          const res = await fetch('/cliente/create', {
              method: 'POST',
              body: client,
          });
          console.log(res);
        } catch (error) {
          console.log(error);
        }
    })
}

// COSULTAR / ELIMNAR CLIENTE 
const $form_con_el_clientes = document.querySelector('#form-con-mod-clientes')
if ($form_con_el_clientes) {
    $form_con_el_clientes.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataConElCliente = new formData(event.currentTarget)
        fetch('/', {
            method: 'POST',
            body: formDataConElCliente,
        })
    })
}

// MODIFICAR CLIENTE
const $form_mod_clien = document.querySelector('#form-mod-clien')
if ($form_mod_clien) {
    $form_mod_clien.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModCliente = new formData(event.currentTarget)
        fetch('/', {
            method: 'POST',
            body: formDataModCliente,
        })
    })
}