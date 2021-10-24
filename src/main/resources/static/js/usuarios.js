import {obtenerUsuarios, obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} from './requests.js';

const tableBodyUsers = document.querySelector("#tableBodyUsers");
const btnAddUser = document.querySelector("#btnAddUser");

tableBodyUsers.innerHTML = "";

let objUsuarios = {};

const completarTabla = async () => {
  objUsuarios = await obtenerUsuarios();
  
  if(objUsuarios != null){
    objUsuarios.forEach( usuario =>{
      tableBodyUsers.innerHTML += `
      <tr data-user-content-id ="${usuario.cedula}">
        <td data-form="true" data-name-field ="cedula">${usuario.cedula}</td>
        <td data-form="true" data-name-field ="email">${usuario.email}</td>
        <td data-form="true" data-name-field ="nombre">${usuario.nombre}</td>
        <td data-form="true" data-name-field ="alias">${usuario.alias}</td>
        <td data-form="true" data-name-field ="password">${usuario.password}</td>
        <td class="contenedorBotonesAcciones">
        <i class="fas fa-pencil-alt btnActionUpdate" data-user-id="${usuario.cedula}"></i>
        <i class="fas fa-trash-alt btnActionDelete" data-user-id="${usuario.cedula}"></i>
        </td>
      </tr>
    `;
    
    });

    const allBtnUpdate = document.querySelectorAll(".btnActionUpdate");
    const allBtnDelete = document.querySelectorAll(".btnActionDelete");

    allBtnUpdate.forEach(btn =>{
      btn.addEventListener('click', editarUsuario);
    });

    // allBtnDelete.forEach(btn =>{
    //   btn.addEventListener('click', borrarUsuario);
    // });


  }else{
    tableBodyUsers  = `<tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>`;
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

}

const editarUsuario = async (event) =>{

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




completarTabla();

btnAddUser.addEventListener("click", enviarUsuario);



