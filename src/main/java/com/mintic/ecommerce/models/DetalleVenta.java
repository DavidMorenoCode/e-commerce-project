package com.mintic.ecommerce.models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "detalle_ventas")
public class DetalleVenta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    @Getter
    @Setter
    @Column(name = "codigo_detalle_venta")
    private Long codigo;

    @Getter @Setter @Column(name = "cantidad_producto")
    private String cantidad;

    @Getter @Setter @Column(name = "valor_total")
    private String valor;

    @Getter @Setter @Column(name = "valor_venta")
    private String valorVenta;

    @Getter @Setter @Column(name = "valor_iva")
    private String iva;

    @Getter @Setter @Column(name = "codigo_venta")
    private Long codigoVenta;

    @Getter @Setter @Column(name = "codigo_producto")
    private Long codigoProducto;
}
