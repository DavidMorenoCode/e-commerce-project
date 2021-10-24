package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.UsuarioDAO;
import com.mintic.ecommerce.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {
    private final UsuarioDAO usuarioDAO;

    public UsuarioController(UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    @RequestMapping(value = "api/v1/usuarios/{cedula}", method = RequestMethod.GET)
    public Usuario obtenerUsuario(@PathVariable Long cedula){
        return usuarioDAO.obtenerUsuarioPorId(cedula);
    }

    @RequestMapping(value = "api/v1/usuarios", method = RequestMethod.GET)
    public List<Usuario> obtenerUsuarios(){
        return usuarioDAO.obtenerUsuarios();
    }

    @RequestMapping(value = "api/v1/usuarios", method = RequestMethod.POST)
    public boolean crearUsuario(@RequestBody Usuario usuario){
        return usuarioDAO.crearUsuario(usuario);
    }

    @RequestMapping(value = "api/v1/usuarios/{cedula}", method = RequestMethod.PUT)
    public boolean actualizarUsuario(@RequestBody Usuario usuario){
        return usuarioDAO.actualizarUsuario(usuario);
    }

    @RequestMapping(value = "api/v1/usuarios/{cedula}", method = RequestMethod.DELETE)
    public boolean eliminarUsuario(@PathVariable long cedula){
        return usuarioDAO.eliminarUsuario(cedula);
    }

}
