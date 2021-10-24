package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Proveedor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class ProveedorDaoImp implements ProveedorDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Proveedor> obtenerProveedores() {
        String query = "FROM Proveedor";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Proveedor obtenerProveedorPorId(Long id) {
        Proveedor proveedor = entityManager.find(Proveedor.class, id);
        return proveedor;
    }

    @Override
    public boolean crearProveedor(Proveedor proveedor) {
        try {
            entityManager.merge(proveedor);
            return true;
        }catch (Exception e){
            System.out.println("Error al crear proveedor: "+ e);
            return false;
        }
    }

    @Override
    public boolean actualizarProveedor(Proveedor proveedor) {
        try{
            entityManager.merge(proveedor);
            return true;
        }catch (Exception e){
            System.out.println("Error al actualizar el proveedor: " + e);
            return false;
        }
    }

    @Override
    public boolean eliminarProveedor(Long id) {
        try{
            Proveedor proveedor = entityManager.find(Proveedor.class, id);
            entityManager.remove(proveedor);
            return true;
        }catch (Exception e){
            System.out.println("Error al eliminar el proveedor: "+ e);
            return  false;
        }
    }
}
