let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

let goUp = ()=>{
    window.scrollTo(0,0);
}

window.addEventListener('scroll',(ev)=>{
    console.log(ev.path[1].scrollY);
})




// TAXISTAS

//ADD TAXISTA
const $form_add_tax = document.querySelector('#form-add-tax')
if ($form_add_tax) {
$form_add_tax.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }

// COSULTAR / ELIMNAR TAXISTA 
const $form_con_mod_tax = document.querySelector('#form-con-mod-tax')
if ($form_con_mod_tax) {
$form_con_mod_tax.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }

// MODIFICAR TAXISTA
const $form_mod_tax = document.querySelector('#form-mod-taxista')
if ($form_mod_tax) {
$form_mod_tax.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }


// CLIENTES
//ADD CLIENTE
const $form_add_clie = document.querySelector('#form-add-clien')
if ($form_add_clie) {
$form_add_clie.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }

// COSULTAR / ELIMNAR CLIENTE 
const $form_con_el_clientes = document.querySelector('#form-con-mod-clientes')
if ($form_con_el_clientes) {
$form_con_el_clientes.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }

// MODIFICAR CLIENTE
const $form_mod_clien = document.querySelector('#form-mod-clien')
if ($form_mod_clien) {
$form_mod_clien.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }



// CARROS 
// CONSULTAR / ELIMINAR CARRO 

const $form_con_el_car = document.querySelector('#form-con-el-car')
if ($form_con_el_car) {
$form_con_el_car.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }

const $form_mod_car = document.querySelector('#form-mod-car')
if ($form_mod_car) {
$form_mod_car.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
}) }



// PAGOS / CONSULTAR PAGO
const $form_consultar_pago = document.querySelector('#form-pago')
if($form_consultar_pago) {
$form_consultar_pago.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}


// SERVICIOS

// NUEVO SERVICIO
const $form_new_service = document.querySelector('#form-new-service')
if($form_new_service) {
$form_new_service.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}


//CONSULTAR Y ANULAR SERVICIO

const $form_con_anu_servicio = document.querySelector('#form-con-anu')
if($form_con_anu_servicio) {
$form_con_anu_servicio.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}






//REPORTES

//REPORTE DE SERVICIOS 
const $form_reporte_servicio = document.querySelector('#form-reporte-servicio')
if($form_reporte_servicio) {
$form_reporte_servicio.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}


//REPORTE DE TAXISTAS
const $form_reporte_taxista = document.querySelector('#form-reporte-taxista')
if($form_reporte_taxista) {
$form_reporte_taxista.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}

//REPORTE DE CLIENTES
const $form_reporte_cliente = document.querySelector('#form-reporte-cliente')
if($form_reporte_cliente) {
$form_reporte_cliente.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}
//REPORTE DE PAGOS
const $form_reporte_pago = document.querySelector('#form-reporte-pago')
if($form_reporte_pago) {
$form_reporte_pago.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}
//REPORTE DE CARROS

const $form_reporte_carros = document.querySelector('#form-reporte-carro')
if($form_reporte_carros) {
$form_reporte_carros.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}



// MANTENIMIENTO 

// MODIFICAR PASSWORD
const $form_mod_password = document.querySelector('#form-mod-password')
if($form_mod_password) {
$form_mod_password.addEventListener('submit', (event)=> {
    event.preventDefault()
    const formData = new formData(event.currentTarget)
})}


// NUEVA PASSWORD

const $form_new_pass = document.querySelector('#form-new-password')
if($form_new_pass) {
    $form_new_pass.addEventListener('submit', (event)=> {
        event.preventDefault()
        const formData = new formData(event.currentTarget)
    })}

// BAJAR RESPALDO
const $form_bajar_respaldo = document.querySelector('#form-bajar-respaldo')
if($form_bajar_respaldo) {
    $form_bajar_respaldo.addEventListener('submit', (event)=> {
        event.preventDefault()
        const formData = new formData(event.currentTarget)
    })}


// SUBIR RESPALDO

const $form_subir_respaldo = document.querySelector('#form-subir-respaldo')
if($form_subir_respaldo) {
    $form_subir_respaldo.addEventListener('submit', (event)=> {
        event.preventDefault()
        const formData = new formData(event.currentTarget)
    })}
