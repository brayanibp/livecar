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
