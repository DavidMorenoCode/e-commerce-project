package com.mintic.ecommerce.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")

public class Usuario {

    @Id
    @Getter @Setter @Column(name = "cedula_usuario")
    private Long cedula;

    @Getter @Setter @Column(name = "email_usuario")
    private String email;

    @Getter @Setter @Column(name = "nombre_usuario")
    private String nombre;

    @Getter @Setter @Column(name = "password")
    private String password;

    @Getter @Setter @Column(name = "usuario")
    private String alias;

}


