package com.mintic.ecommerce.controllers;

import com.mintic.ecommerce.dao.ClienteDAO;
import com.mintic.ecommerce.models.Cliente;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientesController {
    private final ClienteDAO clienteDAO;

    public ClientesController(ClienteDAO clienteDAO) {
        this.clienteDAO = clienteDAO;
    }

    @RequestMapping(value = "api/v1/clientes/{cedula}", method = RequestMethod.GET)
    public Cliente obtenerCliente(@PathVariable Long cedula){
        return clienteDAO.obtenerClientePorId(cedula);
    }

    @RequestMapping(value = "api/v1/clientes", method = RequestMethod.GET)
    public List<Cliente> obtenerClientes(){
        return clienteDAO.obtenerClientes();
    }

    @RequestMapping(value = "api/v1/clientes", method = RequestMethod.POST)
    public boolean crearCliente(@RequestBody Cliente cliente){
        return clienteDAO.crearCliente(cliente);
    }

    @RequestMapping(value = "api/v1/clientes/{cedula}", method = RequestMethod.PUT)
    public boolean actualizarCliente(@RequestBody Cliente cliente){
        return clienteDAO.actualizarCliente(cliente);
    }

    @RequestMapping(value = "api/v1/clientes/{cedula}", method = RequestMethod.DELETE)
    public boolean eliminarCliente(@PathVariable long cedula){
        return clienteDAO.eliminarCliente(cedula);
    }
}
