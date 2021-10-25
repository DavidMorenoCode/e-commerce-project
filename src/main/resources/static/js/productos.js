import {obtenerProductos, crearProducto, actualizarProducto, eliminarProducto} from './requests.js';

const tableBodyProducts = document.querySelector("#tableBodyProducts");
const btnAddProduct = document.querySelector("#btnAddProduct");
const btnEditProduct = document.querySelector("#btnEditProduct");
const btnDeleteProduct = document.querySelector("#btnDeleteProduct");

tableBodyProducts.innerHTML = "";

let objProductos = {};

const completarTabla = async () => {
  objProductos = await obtenerProductos();
  
  if(objProductos.length != 0){
    objProductos.forEach( producto =>{
      tableBodyProducts.innerHTML += `
      <tr data-product-content-id ="${producto.codigo}">
        <td data-form="true" data-name-field ="codigo">${producto.codigo}</td>
        <td data-form="true" data-name-field ="nombre">${producto.nombre}</td>
        <td data-form="true" data-name-field ="iva">${producto.iva}</td>
        <td data-form="true" data-name-field ="precio">${producto.precio}</td>
        <td data-form="true" data-name-field ="venta">${producto.venta}</td>
        <td data-form="true" data-name-field ="nit">${producto.nit}</td>
        <td class="contenedorBotonesAcciones">
        <i class="fas fa-pencil-alt btnActionUpdate" data-product-id="${producto.codigo}" data-toggle="modal" data-target="#editProductModal"></i>
        <i class="fas fa-trash-alt btnActionDelete" data-product-id="${producto.codigo}"data-toggle="modal" data-target="#deleteProductModal"></i>
        </td>
      </tr>
    `;
    
    });

    const allBtnUpdate = document.querySelectorAll(".btnActionUpdate");
    const allBtnDelete = document.querySelectorAll(".btnActionDelete");

    allBtnUpdate.forEach(btn =>{
      btn.addEventListener('click', editarProductoModal);
    });
    allBtnDelete.forEach(btn =>{
      btn.addEventListener('click', borrarProductoModal);
    });



  }else{
    tableBodyProducts.innerHTML= `<tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No se encontraron productos</td></tr>`;
  }

  $('#dataTable').DataTable();

}

const enviarProducto = async () =>{
  const codigo = document.querySelector("#inputCodigo").value;
  const iva = document.querySelector("#inputIva").value;
  const nombre = document.querySelector("#inputNombre").value;
  const precio = document.querySelector("#inputCompra").value;
  const venta = document.querySelector("#inputVenta").value;
  const nit = document.querySelector("#inputNit").value;

  const objProducto = {
    codigo,
    iva,
    nombre,
    precio,
    venta,
    nit
  }

  console.log(objProducto);

  await crearProducto(objProducto);

  location.reload();

}

const editarProductoModal = (event) =>{

  const codigo= event.target.dataset.productId;

  const arrDatos = document.querySelectorAll(`[data-product-content-id = "${codigo}"] [data-form="true"]`);
  let objDatos = {};

  const campoCodigo = document.querySelector("#inputEditCodigo");
  const campoNombre = document.querySelector("#inputEditNombre");
  const campoIva = document.querySelector("#inputEditIva");
  const campoCompra = document.querySelector("#inputEditCompra");
  const campoVenta = document.querySelector("#inputEditVenta");
  const campoNit = document.querySelector("#inputEditNit");

  arrDatos.forEach(element =>{
    objDatos[element.dataset.nameField] = element.outerText;
  });

  campoCodigo.value = objDatos["codigo"];
  campoIva.value = objDatos["iva"];
  campoNombre.value = objDatos["nombre"];
  campoCompra.value = objDatos["precio"];
  campoVenta.value = objDatos["venta"];
  campoNit.value = objDatos["nit"];

}

const editarProducto = async () =>{

  const codigo = document.querySelector("#inputEditCodigo").value;
  const nombre = document.querySelector("#inputEditNombre").value;
  const iva = document.querySelector("#inputEditIva").value;
  const compra = document.querySelector("#inputEditCompra").value;
  const venta = document.querySelector("#inputEditVenta").value;
  const nit = document.querySelector("#inputEditNit").value;

  const objProducto = {
    codigo,
    iva,
    nombre,
    compra,
    venta,
    nit
  }

  console.log(objProducto);

  await actualizarProducto(codigo,objProducto);
  location.reload();

}


const borrarProductoModal = (event) =>{
  const codigo = event.target.dataset.productId;
  const spanCedula = document.querySelector("#spanCedula");  
  btnDeleteProduct.dataset.productId = codigo;
  spanCedula.innerHTML = codigo;
}


const borrarProducto = async (event) =>{
  const codigo = event.target.dataset.productId;

  await eliminarProducto(codigo);

  location.reload();
}



completarTabla();

btnAddProduct.addEventListener("click", enviarProducto);
btnEditProduct.addEventListener("click", editarProducto);
btnDeleteProduct.addEventListener("click", borrarProducto);



