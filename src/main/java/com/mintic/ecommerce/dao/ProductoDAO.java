package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Producto;

import java.util.List;

public interface ProductoDAO {
    List<Producto> obtenerProductos();
    Producto obtenerProductoPorId(Long id);
    boolean crearProducto(Producto producto);
    boolean actualizarProducto(Producto producto);
    boolean eliminarProducto(Long id);
}
