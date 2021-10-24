
const obtenerUsuarios = async () =>{
  const path = "api/v1/usuarios";
  const data = await fetch(path, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  return await data.json();
}

const obtenerUsuario = async (usuario_id) =>{
  const path = `api/v1/usuarios/${usuario_id}`;
  const data = await fetch(path,{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });

  console.log(data.json());

  return await data.json();
}

const crearUsuario = async (usuario) =>{
  const path = "api/v1/usuarios";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  });

  return await data.json();
}

const actualizarUsuario = async (usuario_id, usuario) =>{
  const path = `api/v1/usuarios/${usuario_id}`;
  const data = await fetch(path, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  });

  return await data.json();
}

const eliminarUsuario = async (usuario_id) =>{
  const path = `api/v1/usuarios/${usuario_id}`;
  const data = await fetch(path, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  return await data.json();
}


// Clientes


const obtenerClientes = async () =>{
  const path = "api/v1/clientes";
  const data = await fetch(path, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  return await data.json();
}

const obtenerCliente = async (cliente_id) =>{
  const path = `api/v1/clientes/${cliente_id}`;
  const data = await fetch(path,{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });

  console.log(data.json());

  return await data.json();
}

const crearCliente = async (cliente) =>{
  const path = "api/v1/clientes";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
  });

  return await data.json();
}

const actualizarCliente = async (cliente_id, cliente) =>{
  const path = `api/v1/clientes/${cliente_id}`;
  const data = await fetch(path, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
  });

  return await data.json();
}

const eliminarCliente = async (cliente_id) =>{
  const path = `api/v1/clientes/${cliente_id}`;
  const data = await fetch(path, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  return await data.json();
}


// Proveedores

const obtenerProveedores = async () =>{
  const path = "api/v1/proveedores";
  const data = await fetch(path, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  return await data.json();
}

const obtenerProveedor = async (proveedor_id) =>{
  const path = `api/v1/proveedores/${proveedor_id}`;
  const data = await fetch(path,{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });

  console.log(data.json());

  return await data.json();
}

const crearProveedor = async (proveedor) =>{
  const path = "api/v1/proveedores";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(proveedor)
  });

  return await data.json();
}

const actualizarProveedor = async (proveedor_id, proveedor) =>{
  const path = `api/v1/proveedores/${proveedor_id}`;
  const data = await fetch(path, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(proveedor)
  });

  return await data.json();
}

const eliminarProveedor = async (proveedor_id) =>{
  const path = `api/v1/proveedores/${proveedor_id}`;
  const data = await fetch(path, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  return await data.json();
}



export{
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  obtenerClientes,
  obtenerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerProveedores,
  obtenerProveedor,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor,
}
