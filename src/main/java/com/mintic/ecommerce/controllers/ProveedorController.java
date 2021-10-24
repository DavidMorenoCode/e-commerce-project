package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.ProveedorDAO;
import com.mintic.ecommerce.models.Proveedor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProveedorController {
    private final ProveedorDAO proveedorDAO;

    public ProveedorController(ProveedorDAO proveedorDAO) {
        this.proveedorDAO = proveedorDAO;
    }

    @RequestMapping(value = "api/v1/proveedores/{nit}", method = RequestMethod.GET)
    public Proveedor obtenerUsuario(@PathVariable Long nit){
        return proveedorDAO.obtenerProveedorPorId(nit);
    }

    @RequestMapping(value = "api/v1/proveedores", method = RequestMethod.GET)
    public List<Proveedor> obtenerProveedores(){
        return proveedorDAO.obtenerProveedores();
    }

    @RequestMapping(value = "api/v1/proveedores", method = RequestMethod.POST)
    public boolean crearProveedor(@RequestBody Proveedor proveedor){
        return proveedorDAO.crearProveedor(proveedor);
    }

    @RequestMapping(value = "api/v1/proveedores/{nit}", method = RequestMethod.PUT)
    public boolean actualizarProveedor(@RequestBody Proveedor proveedor){
        return proveedorDAO.actualizarProveedor(proveedor);
    }

    @RequestMapping(value = "api/v1/proveedores/{nit}", method = RequestMethod.DELETE)
    public boolean eliminarProveedor(@PathVariable long nit){
        return proveedorDAO.eliminarProveedor(nit);
    }
}
