package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Producto;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class ProductoDaoImp implements ProductoDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Producto> obtenerProductos() {
        String query = "FROM Producto";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Producto obtenerProductoPorId(Long id) {
        Producto producto = entityManager.find(Producto.class, id);

        if(producto.getCodigo() != null){
            return producto;
        }else{
            return null;
        }
    }

    @Override
    public boolean crearProducto(Producto producto) {
        try {
            entityManager.merge(producto);
            return true;
        }catch (Exception e){
            System.out.println("Error al crear producto: "+ e);
            return false;
        }
    }

    @Override
    public boolean actualizarProducto(Producto producto) {
        try{
            entityManager.merge(producto);
            return true;
        }catch (Exception e){
            System.out.println("Error al actualizar el producto: " + e);
            return false;
        }
    }

    @Override
    public boolean eliminarProducto(Long id) {
        try{
            Producto producto = entityManager.find(Producto.class, id);
            entityManager.remove(producto);
            return true;
        }catch (Exception e){
            System.out.println("Error al eliminar el producto: "+ e);
            return  false;
        }
    }
}
