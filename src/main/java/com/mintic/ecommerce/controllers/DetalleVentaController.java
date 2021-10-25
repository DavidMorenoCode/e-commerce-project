package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.DetalleVentaDAO;
import com.mintic.ecommerce.models.DetalleVenta;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DetalleVentaController {

    private final DetalleVentaDAO detalleVentaDAO;

    public DetalleVentaController(DetalleVentaDAO detalleVentaDAO) {
        this.detalleVentaDAO = detalleVentaDAO;
    }

    @RequestMapping(value = "api/v1/detalleVentas", method = RequestMethod.GET)
    public List<DetalleVenta> obtenerDetalleVentas(){
        return detalleVentaDAO.obtenerDetalleVentas();
    }

    @RequestMapping(value = "api/v1/detalleVentas", method = RequestMethod.POST)
    public Long crearDetalleVenta(@RequestBody DetalleVenta detalleVenta){
        return detalleVentaDAO.crearDetalleVenta(detalleVenta);
    }
}
