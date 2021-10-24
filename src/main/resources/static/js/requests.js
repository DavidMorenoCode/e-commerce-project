
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







export{
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
}
