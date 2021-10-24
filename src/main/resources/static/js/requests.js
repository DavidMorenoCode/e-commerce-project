
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

const crearCliente = async (clientes) =>{
  const path = "api/v1/clientes";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clientes)
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
}
