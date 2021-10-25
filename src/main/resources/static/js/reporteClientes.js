import {obtenerClientes, crearCliente, actualizarCliente, eliminarCliente} from './requests.js';

const tableBodyClients = document.querySelector("#tableBodyClients");

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
        <td data-form="true" data-name-field ="direccion">${cliente.direccion}</td>
        <td data-form="true" data-name-field ="telefono">${cliente.telefono}</td>
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

completarTabla();




