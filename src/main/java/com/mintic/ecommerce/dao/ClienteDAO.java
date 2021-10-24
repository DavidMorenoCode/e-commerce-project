package com.mintic.ecommerce.dao;

import com.mintic.ecommerce.models.Cliente;

import java.util.List;

public interface ClienteDAO {
    List<Cliente> obtenerClientes();
    Cliente obtenerClientePorId(Long id);
    boolean crearCliente(Cliente cliente);
    boolean actualizarCliente(Cliente cliente);
    boolean eliminarCliente(Long id);
}
