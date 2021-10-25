package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.VentaDAO;
import com.mintic.ecommerce.models.Venta;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VentaController {
    private final VentaDAO ventaDAO;

    public VentaController(VentaDAO ventaDAO) {
        this.ventaDAO = ventaDAO;
    }

    @RequestMapping(value = "api/v1/ventas/{codigo}", method = RequestMethod.GET)
    public Venta obtenerVenta(@PathVariable Long codigo){
        return ventaDAO.obtenerVentaPorId(codigo);
    }

    @RequestMapping(value = "api/v1/ventas", method = RequestMethod.GET)
    public List<Venta> obtenerVentas(){
        return ventaDAO.obtenerVentas();
    }

    @RequestMapping(value = "api/v1/ventas", method = RequestMethod.POST)
    public Long crearVenta(@RequestBody Venta venta){
        return ventaDAO.crearVenta(venta);
    }

    @RequestMapping(value = "api/v1/ventas/{codigo}", method = RequestMethod.PUT)
    public boolean actualizarVenta(@RequestBody Venta venta){
        return ventaDAO.actualizarVenta(venta);
    }

    @RequestMapping(value = "api/v1/ventas/{codigo}", method = RequestMethod.DELETE)
    public boolean eliminarVenta(@PathVariable long codigo){
        return ventaDAO.eliminarVenta(codigo);
    }

}
