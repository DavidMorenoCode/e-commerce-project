package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.ProductoDAO;
import com.mintic.ecommerce.models.Cliente;
import com.mintic.ecommerce.models.Producto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductoController {
    private final ProductoDAO productoDAO;

    public ProductoController(ProductoDAO productoDAO) {
        this.productoDAO = productoDAO;
    }

    @RequestMapping(value = "api/v1/productos/{codigo}", method = RequestMethod.GET)
    public Producto obtenerProducto(@PathVariable Long codigo){
        return productoDAO.obtenerProductoPorId(codigo);
    }

    @RequestMapping(value = "api/v1/productos", method = RequestMethod.GET)
    public List<Producto> obtenerProducto(){
        return productoDAO.obtenerProductos();
    }

    @RequestMapping(value = "api/v1/productos", method = RequestMethod.POST)
    public boolean crearProducto(@RequestBody Producto producto){
        return productoDAO.crearProducto(producto);
    }

    @RequestMapping(value = "api/v1/productos/{codigo}", method = RequestMethod.PUT)
    public boolean actualizarProducto(@RequestBody Producto producto){
        return productoDAO.actualizarProducto(producto);
    }

    @RequestMapping(value = "api/v1/productos/{codigo}", method = RequestMethod.DELETE)
    public boolean eliminarProducto(@PathVariable long codigo){
        return productoDAO.eliminarProducto(codigo);
    }

}
