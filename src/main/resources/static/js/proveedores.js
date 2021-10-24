import {obtenerProveedores, crearProveedor, actualizarProveedor, eliminarProveedor} from './requests.js';

const tableBodyProviders = document.querySelector("#tableBodyProviders");
const btnAddProvider = document.querySelector("#btnAddProvider");
const btnEditProvider = document.querySelector("#btnEditProvider");
const btnDeleteProvider = document.querySelector("#btnDeleteProvider");

tableBodyProviders.innerHTML = "";

let objProveedores = {};

const completarTabla = async () => {
  objProveedores = await obtenerProveedores();
  
  if(objProveedores.length != 0){
    objProveedores.forEach( proveedor =>{
      tableBodyProviders.innerHTML += `
      <tr data-provider-content-id ="${proveedor.nit}">
        <td data-form="true" data-name-field ="nit">${proveedor.nit}</td>
        <td data-form="true" data-name-field ="nombre">${proveedor.nombre}</td>
        <td data-form="true" data-name-field ="direccion">${proveedor.direccion}</td>
        <td data-form="true" data-name-field ="ciudad">${proveedor.ciudad}</td>
        <td data-form="true" data-name-field ="telefono">${proveedor.telefono}</td>
        <td class="contenedorBotonesAcciones">
        <i class="fas fa-pencil-alt btnActionUpdate" data-provider-id="${proveedor.nit}" data-toggle="modal" data-target="#editProviderModal"></i>
        <i class="fas fa-trash-alt btnActionDelete" data-provider-id="${proveedor.nit}"data-toggle="modal" data-target="#deleteProviderModal"></i>
        </td>
      </tr>
    `;
    
    });

    const allBtnUpdate = document.querySelectorAll(".btnActionUpdate");
    const allBtnDelete = document.querySelectorAll(".btnActionDelete");

    allBtnUpdate.forEach(btn =>{
      btn.addEventListener('click', editarProveedorModal);
    });
    allBtnDelete.forEach(btn =>{
      btn.addEventListener('click', borrarProveedorModal);
    });



  }else{
    tableBodyProviders.innerHTML= `<tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No se encontraron proveedores</td></tr>`;
  }

  $('#dataTable').DataTable();

}

const enviarProveedor = async () =>{
  const nit = document.querySelector("#inputNit").value;
  const nombre = document.querySelector("#inputNombre").value;
  const direccion = document.querySelector("#inputDireccion").value;
  const ciudad = document.querySelector("#inputCiudad").value;
  const telefono = document.querySelector("#inputTelefono").value;

  const objProveedor = {
    nit,
    nombre,
    direccion,
    ciudad,
    telefono
  }

  console.log(objProveedor);

  await crearProveedor(objProveedor);

  location.reload();

}

const editarProveedorModal = (event) =>{

  const nit= event.target.dataset.providerId;

  const arrDatos = document.querySelectorAll(`[data-provider-content-id = "${nit}"] [data-form="true"]`);
  let objDatos = {};

  const campoNit = document.querySelector("#inputEditNit");
  const campoNombre = document.querySelector("#inputEditNombre");
  const campoDireccion = document.querySelector("#inputEditDireccion");
  const campoCiudad = document.querySelector("#inputEditCiudad");
  const campoTelefono = document.querySelector("#inputEditTelefono");

  arrDatos.forEach(element =>{
    objDatos[element.dataset.nameField] = element.outerText;
  });

  campoNit.value = objDatos["nit"];
  campoNombre.value = objDatos["nombre"];
  campoDireccion.value = objDatos["direccion"];
  campoCiudad.value = objDatos["ciudad"];
  campoTelefono.value = objDatos["telefono"];

}

const editarProveedor = async () =>{

  const nit = document.querySelector("#inputEditNit").value;
  const nombre = document.querySelector("#inputEditNombre").value;
  const direccion = document.querySelector("#inputEditDireccion").value;
  const ciudad = document.querySelector("#inputEditCiudad").value;
  const telefono = document.querySelector("#inputEditTelefono").value;

  const objProveedor = {
    nit,
    nombre,
    direccion,
    ciudad,
    telefono
  }

  console.log(objProveedor);

  await actualizarProveedor(nit,objProveedor);
  location.reload();

}


const borrarProveedorModal = (event) =>{
  const nit = event.target.dataset.providerId;
  const spanCedula = document.querySelector("#spanCedula");  
  btnDeleteProvider.dataset.providerId = nit;
  spanCedula.innerHTML = nit;
}


const borrarProveedor = async (event) =>{
  const nit = event.target.dataset.providerId;

  await eliminarProveedor(nit);

  location.reload();
}



completarTabla();

btnAddProvider.addEventListener("click", enviarProveedor);
btnEditProvider.addEventListener("click", editarProveedor);
btnDeleteProvider.addEventListener("click", borrarProveedor);



