
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


// Productos

const obtenerProductos = async () =>{
  const path = "api/v1/productos";
  const data = await fetch(path, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  return await data.json();
}

const obtenerProducto = async (producto_id) =>{
  const path = `api/v1/productos/${producto_id}`;
  const data = await fetch(path,{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });

  return await data.json();
}

const crearProducto = async (producto) =>{
  const path = "api/v1/productos";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
  });

  return await data.json();
}

const actualizarProducto = async (producto_id, producto) =>{
  const path = `api/v1/productos/${producto_id}`;
  const data = await fetch(path, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
  });

  return await data.json();
}

const eliminarProducto = async (producto_id) =>{
  const path = `api/v1/productos/${producto_id}`;
  const data = await fetch(path, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  return await data.json();
}

// Ventas

const crearVenta = async (venta) =>{
  const path = "api/v1/ventas";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(venta)
  });

  return await data.json();
}


// DetalleVentas

const obtenerDetalleVentas = async () =>{
  const path = "api/v1/detalleVentas";
  const data = await fetch(path, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  return await data.json();
}

const crearDetalleVenta = async (DetalleVenta) =>{
  const path = "api/v1/detalleVentas";
  const data = await fetch(path, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(DetalleVenta)
  });

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
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  crearVenta,
  obtenerDetalleVentas,
  crearDetalleVenta
}
