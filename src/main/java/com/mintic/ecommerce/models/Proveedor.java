package com.mintic.ecommerce.models;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "proveedores")
public class Proveedor {

    @Id
    @Getter
    @Setter
    @Column(name = "nit_proveedor")
    private Long nit;

    @Getter @Setter @Column(name = "nombre_proveedor")
    private String nombre;

    @Getter @Setter @Column(name = "direccion_proveedor")
    private String direccion;

    @Getter @Setter @Column(name = "ciudad_proveedor")
    private String ciudad;

    @Getter @Setter @Column(name = "telefono_proveedor")
    private String telefono;
}
