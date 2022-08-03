let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

function calcula(operacion){
    var operando1 = document.calc.operando1.value
    var operando2 = 0.9
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

// PAGOS / CONSULTAR PAGO
const $form_consultar_pago = document.querySelector('#form-pago')
if ($form_consultar_pago) {
    $form_consultar_pago.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataConPago = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataConPago,
        })
    })
}


// SERVICIOS

// NUEVO SERVICIO
const $form_new_service = document.querySelector('#form-new-service')
if ($form_new_service) {
    $form_new_service.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataNewService = new formData(event.currentTarget)
        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataNewService,
        })
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


//REPORTE DE TAXISTAS
const $form_reporte_taxista = document.querySelector('#form-reporte-taxista')
if ($form_reporte_taxista) {
    $form_reporte_taxista.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataReporteTaxista = new formData(event.currentTarget)
        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataReporteTaxista,
        })
    })
}

//REPORTE DE CLIENTES
const $form_reporte_cliente = document.querySelector('#form-reporte-cliente')
if ($form_reporte_cliente) {
    $form_reporte_cliente.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataReporteCliente = new formData(event.currentTarget)
        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataReporteCliente,
        })
    })
}
//REPORTE DE PAGOS
const $form_reporte_pago = document.querySelector('#form-reporte-pago')
if ($form_reporte_pago) {
    $form_reporte_pago.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataReportePago = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataReportePago,
        })
    })
}
//REPORTE DE CARROS

const $form_reporte_carros = document.querySelector('#form-reporte-carro')
if ($form_reporte_carros) {
    $form_reporte_carros.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataReporteCarro = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataReporteCarro,
        })
    })
}



// MANTENIMIENTO 

// MODIFICAR PASSWORD
const $form_mod_password = document.querySelector('#form-mod-password')
if ($form_mod_password) {
    $form_mod_password.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataModPassword = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataModPassword,
        })
    })
}


// NUEVA PASSWORD

const $form_new_pass = document.querySelector('#form-new-password')
if ($form_new_pass) {
    $form_new_pass.addEventListener('submit', (event) => {
        event.preventDefault()
        const formDataNewPass = new formData(event.currentTarget)

        fetch('https://livecarapi.herokuapp.com/', {
            method: 'POST',
            body: formDataNewPass,
        })
    })
}
 