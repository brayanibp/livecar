// CLIENTES

//ADD CLIENTE
const $create_client_form = document.querySelector('#form-add-client');
if ($create_client_form) {
    $create_client_form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const $error_text = document.querySelector('#client-error-text') || null;
        const formDataClient = new FormData(event.currentTarget);
        const client = formDataToJSON(formDataClient);
        console.log(client);
        try {
          const res = await axios.post('https://livecarapi.herokuapp.com/cliente/create', {
              client: client
          });
          console.log(res);
          $error_text.innerHTML = res.data.message;
        } catch (err) {
          console.log(err);
          const { response } = err;
          $error_text.innerHTML = response.data.message;
        }
    })
}

// COSULTAR / ELIMINAR CLIENTE 
const $form_get_client = document.querySelector('#form-get-client');
if ($form_get_client) {
    $form_get_client.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    const $get_client = document.querySelector('#get_client');
    const $delete_client = document.querySelector('#delete_client');
    const $error_text = document.querySelector('#client-get-error-text') || null;
    const $response_text = document.querySelector('#client-get-response') || null;
    $get_client.addEventListener('click', async ()=>{
      const formDataClient = new FormData($form_get_client);
      const clientIDs = formDataToJSON(formDataClient);
      try {
        const res = await axios.get(`https://livecarapi.herokuapp.com/cliente/${clientIDs.id_cliente || 'ced/'+clientIDs.cedula_cliente}`);
        let clientPrint = '';
        for (const key in res.data.client) {
          clientPrint += key + ': ' + res.data.client[key] + ' ';
        }
        $response_text.innerHTML = clientPrint;
      } catch (error) {
        $error_text.innerHTML = error.response.data.message;
      }
    });
    $delete_client.addEventListener('click',()=>{
      console.log("CLICK2")
    })
}

// MODIFICAR CLIENTE
const $form_mod_clien = document.querySelector('#form-mod-clien')
if ($form_mod_clien) {
  $form_mod_clien.addEventListener('submit', (event) => {
    event.preventDefault()
    const formDataModCliente = new FormData(event.currentTarget);
    const clientData = formDataToJSON(formDataModCliente);
    axios.put(`/cliente/update/${clientData.cedula}`, {
      client: clientData
    });
  });
}