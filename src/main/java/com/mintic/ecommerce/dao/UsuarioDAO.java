package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Usuario;

import java.util.List;

public interface UsuarioDAO {
    List<Usuario> obtenerUsuarios();
    Usuario obtenerUsuarioPorId(Long id);
    boolean crearUsuario(Usuario usuario);
    boolean actualizarUsuario(Usuario usuario);
    boolean eliminarUsuario(Long id);
}
