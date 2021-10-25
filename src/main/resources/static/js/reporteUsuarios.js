import {obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario} from './requests.js';

const tableBodyUsers = document.querySelector("#tableBodyUsers");

tableBodyUsers.innerHTML = "";

let objUsuarios = {};

const completarTabla = async () => {
  objUsuarios = await obtenerUsuarios();
  
  if(objUsuarios.length != 0){
    objUsuarios.forEach( usuario =>{
      tableBodyUsers.innerHTML += `
      <tr data-user-content-id ="${usuario.cedula}">
        <td data-form="true" data-name-field ="cedula">${usuario.cedula}</td>
        <td data-form="true" data-name-field ="email">${usuario.email}</td>
        <td data-form="true" data-name-field ="nombre">${usuario.nombre}</td>
        <td data-form="true" data-name-field ="alias">${usuario.alias}</td>
        <td data-form="true" data-name-field ="password">${usuario.password}</td>
      </tr>
    `;
    
    });

    const allBtnUpdate = document.querySelectorAll(".btnActionUpdate");
    const allBtnDelete = document.querySelectorAll(".btnActionDelete");

    allBtnUpdate.forEach(btn =>{
      btn.addEventListener('click', editarUsuarioModal);
    });
    allBtnDelete.forEach(btn =>{
      btn.addEventListener('click', borrarUsuarioModal);
    });



  }else{
    tableBodyUsers.innerHTML  = `<tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No se encontraron usuarios</td></tr>`;
  }

  $('#dataTable').DataTable();

}




completarTabla();


