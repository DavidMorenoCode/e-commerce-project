package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Cliente;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class ClienteDaoImp implements ClienteDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Cliente> obtenerClientes() {
        String query = "FROM Cliente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Cliente obtenerClientePorId(Long id) {
        Cliente cliente = entityManager.find(Cliente.class, id);
        return cliente;
    }

    @Override
    public boolean crearCliente(Cliente cliente) {
        try {
            entityManager.merge(cliente);
            return true;
        }catch (Exception e){
            System.out.println("Error al crear cliente: "+ e);
            return false;
        }
    }

    @Override
    public boolean actualizarCliente(Cliente cliente) {
        try{
            entityManager.merge(cliente);
            return true;
        }catch (Exception e){
            System.out.println("Error al actualizar el cliente: " + e);
            return false;
        }
    }

    @Override
    public boolean eliminarCliente(Long id) {
        try{
            Cliente cliente = entityManager.find(Cliente.class, id);
            entityManager.remove(cliente);
            return true;
        }catch (Exception e){
            System.out.println("Error al eliminar el cliente: "+ e);
            return  false;
        }
    }
}
