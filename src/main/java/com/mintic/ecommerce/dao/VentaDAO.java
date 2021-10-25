package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Venta;

import java.util.List;

public interface VentaDAO {
    List<Venta> obtenerVentas();
    Venta obtenerVentaPorId(Long id);
    Long crearVenta(Venta venta);
    boolean actualizarVenta(Venta venta);
    boolean eliminarVenta(Long id);
}
