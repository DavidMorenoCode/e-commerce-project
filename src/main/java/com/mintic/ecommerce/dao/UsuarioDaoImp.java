package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements  UsuarioDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Usuario> obtenerUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Usuario obtenerUsuarioPorId(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        return usuario;
    }

    @Override
    public boolean crearUsuario(Usuario usuario) {
        try {
            entityManager.merge(usuario);
            return true;
        }catch (Exception e){
            System.out.println("Error al crear usuario: "+ e);
            return false;
        }
    }

    @Override
    public boolean actualizarUsuario(Usuario usuario) {
        try{
            entityManager.merge(usuario);
            return true;
        }catch (Exception e){
            System.out.println("Error al actualizar el usuario: " + e);
            return false;
        }
    }

    @Override
    public boolean eliminarUsuario(Long id) {
        try{
            Usuario usuario = entityManager.find(Usuario.class, id);
            entityManager.remove(usuario);
            return true;
        }catch (Exception e){
            System.out.println("Error al eliminar el usuario: "+ e);
            return  false;
        }
    }
}
