package com.mintic.ecommerce.models;


import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "ventas")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    @Getter
    @Setter
    @Column(name = "codigo_venta")
    private Long codigo;

    @Getter @Setter @Column(name = "iva_venta")
    private String iva;

    @Getter @Setter @Column(name = "total_venta")
    private String total;

    @Getter @Setter @Column(name = "valor_venta")
    private String valor;

    @Getter @Setter @Column(name = "cedula_cliente")
    private String cedulaCliente;

    @Getter @Setter @Column(name = "cedula_usuario")
    private String cedulaUsuario;
}
