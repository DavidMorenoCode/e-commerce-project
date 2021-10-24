import {obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario} from './requests.js';

const tableBodyUsers = document.querySelector("#tableBodyUsers");
const btnAddUser = document.querySelector("#btnAddUser");
const btnEditUser = document.querySelector("#btnEditUser");
const btnDeleteUser = document.querySelector("#btnDeleteUser");

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
        <td class="contenedorBotonesAcciones">
        <i class="fas fa-pencil-alt btnActionUpdate" data-user-id="${usuario.cedula}" data-toggle="modal" data-target="#editUserModal"></i>
        <i class="fas fa-trash-alt btnActionDelete" data-user-id="${usuario.cedula}"data-toggle="modal" data-target="#deleteUserModal"></i>
        </td>
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

const enviarUsuario = async () =>{
  const cedula = document.querySelector("#inputCedula").value;
  const email = document.querySelector("#inputEmail").value;
  const nombre = document.querySelector("#inputNombre").value;
  const password = document.querySelector("#inputPassword").value;
  const alias = document.querySelector("#inputUsuario").value;

  const objUsuario = {
    cedula,
    email,
    nombre,
    password,
    alias
  }

  console.log(objUsuario);

  await crearUsuario(objUsuario);

  location.reload();

}

const editarUsuarioModal = (event) =>{

  const cedula= event.target.dataset.userId;

  const arrDatos = document.querySelectorAll(`[data-user-content-id = "${cedula}"] [data-form="true"]`);
  let objDatos = {};

  const campoCedula = document.querySelector("#inputEditCedula");
  const campoemail = document.querySelector("#inputEditEmail");
  const camponombre = document.querySelector("#inputEditNombre");
  const campopassword = document.querySelector("#inputEditPassword");
  const campoalias = document.querySelector("#inputEditUsuario");

  arrDatos.forEach(element =>{
    objDatos[element.dataset.nameField] = element.outerText;
  });

  campoCedula.value = objDatos["cedula"];
  campoemail.value = objDatos["email"];
  camponombre.value = objDatos["nombre"];
  campopassword.value = objDatos["password"];
  campoalias.value = objDatos["alias"];

}

const editarUsuario = async () =>{

  const cedula = document.querySelector("#inputEditCedula").value;
  const email = document.querySelector("#inputEditEmail").value;
  const nombre = document.querySelector("#inputEditNombre").value;
  const password = document.querySelector("#inputEditPassword").value;
  const alias = document.querySelector("#inputEditUsuario").value;

  const objUsuario = {
    cedula,
    email,
    nombre,
    password,
    alias
  }

  console.log(objUsuario);

  await actualizarUsuario(cedula,objUsuario);
  location.reload();

}


const borrarUsuarioModal = (event) =>{
  const cedula = event.target.dataset.userId;
  const spanCedula = document.querySelector("#spanCedula");  
  btnDeleteUser.dataset.userId = cedula;
  spanCedula.innerHTML = cedula;
}


const borrarUsuario = async (event) =>{
  const cedula = event.target.dataset.userId;

  await eliminarUsuario(cedula);

  location.reload();
}



completarTabla();

btnAddUser.addEventListener("click", enviarUsuario);
btnEditUser.addEventListener("click", editarUsuario);
btnDeleteUser.addEventListener("click", borrarUsuario);



