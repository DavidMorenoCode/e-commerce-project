import {obtenerClientes, crearCliente, actualizarCliente, eliminarCliente} from './requests.js';

const tableBodyClients = document.querySelector("#tableBodyClients");
const btnAddClient = document.querySelector("#btnAddClient");
const btnEditClient = document.querySelector("#btnEditClient");
const btnDeleteClient = document.querySelector("#btnDeleteClient");

tableBodyClients.innerHTML = "";

let objClientes = {};

const completarTabla = async () => {
  objClientes = await obtenerClientes();
  
  if(objClientes.length != 0){
    objClientes.forEach( cliente =>{
      tableBodyClients.innerHTML += `
      <tr data-client-content-id ="${cliente.cedula}">
        <td data-form="true" data-name-field ="cedula">${cliente.cedula}</td>
        <td data-form="true" data-name-field ="email">${cliente.email}</td>
        <td data-form="true" data-name-field ="nombre">${cliente.nombre}</td>
        <td data-form="true" data-name-field ="direccion">${cliente.alias}</td>
        <td data-form="true" data-name-field ="telefono">${cliente.password}</td>
        <td class="contenedorBotonesAcciones">
        <i class="fas fa-pencil-alt btnActionUpdate" data-client-id="${cliente.cedula}" data-toggle="modal" data-target="#editClientModal"></i>
        <i class="fas fa-trash-alt btnActionDelete" data-client-id="${cliente.cedula}"data-toggle="modal" data-target="#deleteClientModal"></i>
        </td>
      </tr>
    `;
    
    });

    const allBtnUpdate = document.querySelectorAll(".btnActionUpdate");
    const allBtnDelete = document.querySelectorAll(".btnActionDelete");

    allBtnUpdate.forEach(btn =>{
      btn.addEventListener('click', editarClienteModal);
    });
    allBtnDelete.forEach(btn =>{
      btn.addEventListener('click', borrarClienteModal);
    });



  }else{
    tableBodyClients.innerHTML= `<tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No se encontraron clientes</td></tr>`;
  }

  $('#dataTable').DataTable();

}

const enviarCliente = async () =>{
  const cedula = document.querySelector("#inputCedula").value;
  const email = document.querySelector("#inputEmail").value;
  const nombre = document.querySelector("#inputNombre").value;
  const direccion = document.querySelector("#inputDireccion").value;
  const telefono = document.querySelector("#inputTelefono").value;

  const objCliente = {
    cedula,
    email,
    nombre,
    direccion,
    telefono
  }

  console.log(objCliente);

  await crearCliente(objCliente);

  location.reload();

}

const editarClienteModal = (event) =>{

  const cedula= event.target.dataset.clientId;

  const arrDatos = document.querySelectorAll(`[data-client-content-id = "${cedula}"] [data-form="true"]`);
  let objDatos = {};

  const campoCedula = document.querySelector("#inputEditCedula");
  const campoEmail = document.querySelector("#inputEditEmail");
  const campoNombre = document.querySelector("#inputEditNombre");
  const campoDireccion = document.querySelector("#inputEditDireccion");
  const campoTelefono = document.querySelector("#inputEditTelefono");

  arrDatos.forEach(element =>{
    objDatos[element.dataset.nameField] = element.outerText;
  });

  campoCedula.value = objDatos["cedula"];
  campoEmail.value = objDatos["email"];
  campoNombre.value = objDatos["nombre"];
  campoDireccion.value = objDatos["direccion"];
  campoTelefono.value = objDatos["telefono"];

}

const editarCliente = async () =>{

  const cedula = document.querySelector("#inputEditCedula").value;
  const email = document.querySelector("#inputEditEmail").value;
  const nombre = document.querySelector("#inputEditNombre").value;
  const direccion = document.querySelector("#inputEditDireccion").value;
  const telefono = document.querySelector("#inputEditTelefono").value;

  const objCliente = {
    cedula,
    email,
    nombre,
    direccion,
    telefono
  }

  console.log(objCliente);

  await actualizarCliente(cedula,objCliente);
  location.reload();

}


const borrarClienteModal = (event) =>{
  const cedula = event.target.dataset.clientId;
  const spanCedula = document.querySelector("#spanCedula");  
  btnDeleteClient.dataset.clientId = cedula;
  spanCedula.innerHTML = cedula;
}


const borrarCliente = async (event) =>{
  const cedula = event.target.dataset.clientId;

  await eliminarCliente(cedula);

  location.reload();
}



completarTabla();

btnAddClient.addEventListener("click", enviarCliente);


btnEditClient.addEventListener("click", editarCliente);
btnDeleteClient.addEventListener("click", borrarCliente);



