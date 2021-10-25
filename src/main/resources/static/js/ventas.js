import {crearVenta, obtenerCliente, obtenerProducto, crearDetalleVenta} from './requests.js';

const btnObtenerCliente = document.querySelector("#btnGetClient");

const spanCedulaNoEncontrada = document.querySelector("#notCedula");

const inputNombreCliente = document.querySelector("#inputNombreCliente");

const btnConfirmar = document.querySelector("#btnConfirmar");

const allBtnBuscar = document.querySelectorAll("[data-product-btn]");

const allBtnValor = document.querySelectorAll("[data-product-cant]");

let objValores = {
  "1":0,
  "2":0,
  "3":0
}

let objProductos = {
  "1": {
    cantidad: 0,
    valor: 0,
    valorVenta: 0,
    iva:19,
    codigoVenta:0,
    codigoProducto:0
  },
  "2":{
    cantidad: 0,
    valor: 0,
    valorVenta: 0,
    iva:19,
    codigoVenta:0,
    codigoProducto:0
  },
  "3":{
    cantidad: 0,
    valor: 0,
    valorVenta: 0,
    iva:19,
    codigoVenta:0,
    codigoProducto:0
  }
}


let dataCliente = {}

const buscarCliente = async () =>{
  spanCedulaNoEncontrada.classList.add("hidden")
  
  const cedula = document.querySelector("#inputCedula").value;

  const data = await obtenerCliente(cedula);


  if(data.cedula != null){
    inputNombreCliente.value = data.nombre;
    dataCliente["cedulaCliente"] = cedula;
  }else{
    spanCedulaNoEncontrada.classList.remove("hidden")
    inputNombreCliente.value = "";
  }

}


const buscarProdcuto = async (event) =>{  
  const num = event.target.dataset.productBtn;

  const campoCodigo = document.querySelector(`[data-product-id = "${num}"]`).value;

  const campoNombre = document.querySelector(`[data-product-name = "${num}"]`);

  const campoCantidad = document.querySelector(`[data-product-cant = "${num}"]`);

  const campoValor = document.querySelector(`[data-product-val = "${num}"]`);

  const campoMensaje = document.querySelector(`[data-product-span = "${num}"]`);

  campoMensaje.classList.add("hidden");

  const data = await obtenerProducto(campoCodigo);
  
  if(data.codigo != null){
    campoNombre.value = data.nombre;
    campoCantidad.value = 1;
    campoValor.value = data.venta;

    objValores[num] =  data.venta;


    objProductos[num].codigoProducto = data.codigo;

  }else{
    campoMensaje.classList.remove("hidden")
  }

}

const actualizarValores = (event) =>{

  const num = event.target.dataset.productCant;
  const cantidad = event.target.value;

  const campoValor = document.querySelector(`[data-product-val="${num}"]`);
  const inputTotalVenta = document.querySelector("#inputTotalVenta");
  const inputIva = document.querySelector("#inputIva");
  const inputTotalIva = document.querySelector("#inputTotalIva");

  const cantidadPorValor = cantidad * objValores[num];

  objProductos[num].cantidad = cantidad;


  campoValor.value = cantidadPorValor;

  const allValores = document.querySelectorAll("[data-product-val]");

  let sumaValores = 0

  allValores.forEach(val =>{
    sumaValores += parseFloat(val.value); 
  });

  const porcentaje = (19 * sumaValores) / 100

  inputTotalVenta.value = sumaValores - porcentaje;

  inputIva.value = porcentaje;

  inputTotalIva.value = sumaValores + porcentaje; 

  objProductos[num].valor = cantidadPorValor;
  objProductos[num].valorVenta = cantidadPorValor - ((19* cantidadPorValor ) / 100);

  dataCliente["iva"] = 19;
  dataCliente["total"] = sumaValores + porcentaje;
  dataCliente["valor"] = sumaValores - porcentaje;
}


const enviarVenta = async () =>{

  dataCliente["cedulaUsuario"] = 1;

  const idVenta = await crearVenta(dataCliente);

  objProductos["1"].codigoVenta = idVenta;
  objProductos["2"].codigoVenta = idVenta;
  objProductos["3"].codigoVenta = idVenta;

  
  for(let i = 1; i<=3; i++){
    await crearDetalleVenta(objProductos[i]);
  }

  
  location.reload();

}



const validarFormulario = () =>{
  const valorVentas = document.querySelector("#inputTotalVenta").value;
  const valorIva = document.querySelector("#inputIva").value;
  const valorTotalIva = document.querySelector("#inputTotalIva").value;

  const valorCedula = document.querySelector("#inputCedula").value;
  const valorNombreCliente = document.querySelector("#inputNombreCliente").value;

  if(valorVentas > 0 &&  valorIva > 0 && valorTotalIva > 0 && valorCedula != "" && valorNombreCliente != "" ){
    btnConfirmar.addEventListener("click", enviarVenta);
    btnConfirmar.classList.remove("disabled");
  }else{
    btnConfirmar.removeEventListener("click", enviarVenta);
    btnConfirmar.classList.add("disabled");
  }
}





btnObtenerCliente.addEventListener("click", buscarCliente);


allBtnBuscar.forEach(btn =>{
  btn.addEventListener("click", buscarProdcuto );
});

allBtnValor.forEach(btn =>{
  btn.addEventListener("change", actualizarValores );
  btn.addEventListener("change", validarFormulario );
});


