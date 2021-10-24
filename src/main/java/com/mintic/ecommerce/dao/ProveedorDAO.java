package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Proveedor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface ProveedorDAO {
    List<Proveedor> obtenerProveedores();
    Proveedor obtenerProveedorPorId(Long id);
    boolean crearProveedor(Proveedor proveedor);
    boolean actualizarProveedor(Proveedor proveedor);
    boolean eliminarProveedor(Long id);
}
