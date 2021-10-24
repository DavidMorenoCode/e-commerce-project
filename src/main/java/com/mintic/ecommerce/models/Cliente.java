package com.mintic.ecommerce.models;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @Getter @Setter @Column(name = "cedula_cliente")
    private Long cedula;

    @Getter @Setter @Column(name = "email_cliente")
    private String email;

    @Getter @Setter @Column(name = "nombre_cliente")
    private String nombre;

    @Getter @Setter @Column(name = "direccion_cliente")
    private String direccion;

    @Getter @Setter @Column(name = "telefono_cliente")
    private String telefono;
}
