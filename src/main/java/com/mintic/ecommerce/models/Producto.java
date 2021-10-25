package com.mintic.ecommerce.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @Getter
    @Setter
    @Column(name = "codigo_producto")
    private Long codigo;

    @Getter @Setter @Column(name = "iva_compra")
    private String iva;

    @Getter @Setter @Column(name = "nombre_producto")
    private String nombre;

    @Getter @Setter @Column(name = "precio_compra")
    private String precio;

    @Getter @Setter @Column(name = "precio_venta")
    private String venta;

    @Getter @Setter @Column(name = "nit_proveedor")
    private Long nit;
}
