package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.DetalleVenta;

import java.util.List;

public interface DetalleVentaDAO {
    List<DetalleVenta> obtenerDetalleVentas();
    Long crearDetalleVenta(DetalleVenta detalleVenta);
}
