package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Venta;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class VentaDaoImp implements VentaDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Venta> obtenerVentas() {
        String query = "FROM Venta";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Venta obtenerVentaPorId(Long id) {
        Venta venta = entityManager.find(Venta.class, id);
        return venta;
    }

    @Override
    public Long crearVenta(Venta venta) {
        try {
            return entityManager.merge(venta).getCodigo();
        }catch (Exception e){
            System.out.println("Error al crear venta: "+ e);
            return null;
        }
    }

    @Override
    public boolean actualizarVenta(Venta venta) {
        try{
            entityManager.merge(venta);
            return true;
        }catch (Exception e){
            System.out.println("Error al actualizar el venta: " + e);
            return false;
        }
    }

    @Override
    public boolean eliminarVenta(Long id) {
        try{
            Venta venta = entityManager.find(Venta.class, id);
            entityManager.remove(venta);
            return true;
        }catch (Exception e){
            System.out.println("Error al eliminar el venta: "+ e);
            return  false;
        }
    }
}
