package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.DetalleVenta;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class DetalleVentaDaoImp implements  DetalleVentaDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<DetalleVenta> obtenerDetalleVentas() {
        String query = "FROM DetalleVenta";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Long crearDetalleVenta(DetalleVenta detalleVenta) {
        try {
            return entityManager.merge(detalleVenta).getCodigo();
        }catch (Exception e){
            System.out.println("Error al crear detalleVenta: "+ e);
            return null;
        }
    }
}
