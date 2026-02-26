<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa y requerimientos en atención al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Según la Constitución Política de Colombia (1991), todas las personas tienen derecho a la intimidad, tanto familiar como personal, al buen nombre y, además, a la protección de datos personales y a conocer, rectificar, actualizar y/o cancelar toda la información y datos personales que se hayan recolectado y se tengan en cualquier base de datos.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-8
        .row.align-items-center
          .col-12.col-md-6.col-lg-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img02.png', alt='Texto que describa la imagen')
          .col-12.col-md-6.col-lg-7
            p A continuación, se verá un poco más de las leyes que protegen el derecho a los datos personales, en su orden cronológico.

            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img33.png', alt='Texto que describa la imagen')

            p El siguiente video resume los aspectos más relevantes de la ley que rige los estatutos para la protección de datos personales, así como los decretos ya mencionados, que la reglamentan o modifican.

    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-12
        figure.mb-5(data-aos="fade-up")
          .video-mb-2
            iframe(width="100%" height="450" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          //- figcaption Video: Leyenda del video
 
    //- Subtitulo
    .align-items-center.justify-content-star.mb-2
      .div(data-aos="fade-left")
        h3.subtitle.position-relative Pero… ¿Qué son los datos personales?
          img.image(src='@/assets/curso/temas/img0.svg', alt='Imagen decorativa')

    p Los datos personales son información de un individuo, la cual se utiliza para identificarlo. Estos datos pueden estar almacenados en bases de datos, ya sean físicas o digitales. Dentro de los datos personales se maneja información como:

    .row.justify-content-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Edad.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Nombre.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Documento de identidad.

      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Números telefónicos de contacto.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Correo electrónico.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img09.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Número de seguridad social.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Dirección de domicilio.
      
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.bg-color-2
            .p-3
              p.mb-0 Entre otros.

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        p.mb-3 Todas las empresas colombianas que manejan clientes y colaboradores deben dar cumplimiento a la normativa de protección de datos y garantizar el derecho constitucional que tienen las personas para el manejo del tratamiento de datos personales.
        p.mb-0 La política que establezcan las organizaciones para la protección de datos debe cobijar la responsabilidad del manejo de la información por parte de:

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center

          .col-lg-4.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Colaboradores.

          .col-lg-4.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Terceros que presten servicios a la empresa.

          .col-lg-4.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Contratistas.

          .col-lg-4.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Operadores.

          .col-lg-8.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop', style="max-width: 100px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Toda persona natural o jurídica que tenga acceso a la información para realizar las labores contratadas por la empresa.


    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10.mb-4
        p La protección de datos que manejan las empresas se enmarca en categorías, a saber:

      .col-md-12.col-lg-10
        //- Subtitulo
        .align-items-center.justify-content-star
          .div(data-aos="fade-left")
            h3.subtitle.position-relative Categoría de datos
              img.image(src='@/assets/curso/temas/img0.svg', alt='Imagen decorativa')

    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              h4 Datos sensibles
              p.mb-0 Son aquellos que pueden llegar a afectar la intimidad del titular.
              p.mb-0 El uso indebido de la información puede generar riesgos, incluso discriminación. La revelación de datos del titular como pertenencia a organizaciones, sindicatos, agremiaciones, orientación política, datos relativos a la salud y datos biométricos son datos de alta sensibilidad y se debe garantizar la protección de estos en pro de la garantía del bienestar de su propietario.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen de acompañamiento')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              h4 Datos sensibles - excepciones
              p.mb-3 En el tratamiento de los datos sensibles se tiene algunas excepciones, como son:
              ul.lista-ul
                li 
                  i.fas.fa-check.color-5
                  | El titular entrega autorización explícita en el tratamiento de los datos.
                li 
                  i.fas.fa-check.color-5
                  | Cuando los datos son requeridos en procesos judiciales o para reconocimientos.
                li 
                  i.fas.fa-check.color-5
                  | Los datos tengan una finalidad estadística, científica o histórica.
                li 
                  i.fas.fa-check.color-5
                  | Los datos son necesarios para salvaguardar el interés del titular y este se encuentra incapacitado, sea física o jurídicamente, para esto se requiere autorización del representante legal.
            
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/img18.png", alt="Imagen")

          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              h4 Derechos de niñas, niños y adolescentes
              p.mb-3 El tratamiento de datos de este grupo poblacional está prohibido.
              p.mb-0 Es de anotar que para el tratamiento de datos de las niñas, niños y adolescentes se debe contar con la autorización del representante legal y el cumplimiento de otros parámetros definidos por la ley, según la necesidad o requerimiento.
              
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/img19.png", alt="Imagen")

          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              h4 Derechos de niñas, niños y adolescentes – excepción
              p.mb-3 Se exceptúa cuando el tratamiento cumpla con los siguientes requisitos o parámetros:
              ul.lista-ul
                li 
                  i.fas.fa-check.color-5
                  | Cuando los datos respondan al interés superior de los niños, niñas y adolescentes, en un ámbito de respeto (entiéndase interés superior como: la obligatoriedad de todas las personas a garantizar la integralidad y los derechos humanos universales, interdependientes y prevalentes de los niños, niñas y adolescentes).
                li 
                  i.fas.fa-check.color-5
                  | Cuando se aseguren los derechos fundamentales.
                  
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/img20.png", alt="Imagen")

          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4
              h4 Autorización especial de datos personales sensibles

              p.mb-0 Se refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares. Es decir, el manejo de los datos sensibles. No obstante, la Ley 1581 de 2012, los decretos y normas reglamentarias, faculta el manejo de los datos; por lo tanto, no se tiene la obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles.
              
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/img21.png", alt="Imagen")

    .row.justify-content-center.align-items-center
      p A continuación, se verán las razones y funciones de las leyes de protección de datos.
     
      .col-md-12.col-lg-12.mb-3
        TabsB.color-acento-contenido.mb-4
          .p-3.p-md-4(titulo="Finalidad")
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0
                p.p-4 El propósito de la política de protección de datos es estandarizar procesos de recolección y tratamiento de datos personales, según la normativa establecida, así como crear esquemas organizados que salvaguarden información privada e información sensible de los titulares.
                
              .col-md-6.col-lg-2.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen').d-none.d-lg-block.d-md-block

          .p-3.p-md-4(titulo="Derechos")
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0
                p.p-4 Todo titular de la información tiene derechos y condiciones de legalidad para el tratamiento de los datos, el habeas data. Este derecho consagrado en el artículo 15 de la Constitución Política de Colombia de 1991, se refiere al derecho a la intimidad familiar, personal y al buen nombre, y designa al Estado como el ente garantista de que el artículo se cumpla.
                
              .col-md-6.col-lg-2.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen').d-none.d-lg-block.d-md-block

          .p-3.p-md-4(titulo="Condiciones")
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0
                p.p-4 El propietario de la información puede conocer, actualizar, rectificar y modificar la información recolectada en archivos de entidades públicas y privadas o en bancos de datos. La organización debe generar herramientas para que el propietario de la información pueda consultar de forma gratuita los datos, al menos, una vez al mes y cuando se presenten modificaciones a las políticas de tratamiento de datos.

              .col-md-6.col-lg-2.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img25.svg', alt='Texto que describa la imagen').d-none.d-lg-block.d-md-block
      
          .p-3.p-md-4(titulo="Autorización")
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0
                p.p-4 La autorización especial de datos personales sensibles refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares, es decir, el manejo de los datos sensibles. No obstante, la Ley 1581 de 2012 –decretos y normas reglamentarias– faculta el manejo de los datos. Por tanto, no se tiene la obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles.
                
              .col-md-6.col-lg-2.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img26.svg', alt='Texto que describa la imagen').d-none.d-lg-block.d-md-block

      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-10
          .posit_5.bg-color-10.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema1/img27.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.m-0.text-small Apreciado aprendiz, para ampliar la información sobre este tema, en el material complementario encontrará el video, "Legislación en protección de datos personales en Colombia" o bien puede visualizarlo dando clic en el botón.
                  .col-sm-auto.p-lg-4
                    a.boton.bg-color-4.texto-blanco(href="https://www.youtube.com/embed/n4GaN2DuI9Q" target="_blank")
                      span ver video
                      i.fas.fa-file-download

        .col-md-12.col-lg-10.mb-5
          p.mb-0 Ahora, se relacionan otras normas que están relacionadas con Atención al cliente, donde los ciudadanos pueden basarse para someter PQR (peticiones, quejas y reclamos) son las que aparecen a continuación:

        .col-md-12.col-lg-10.mb-1
          .titulo-sexto.color-acento-contenido
            h5 
              b Tabla 1. 
              span PQR
          .tabla-a.color-acento-contenido
            table
              caption Fuente: SENA 2026
              thead
                tr
              tbody
                tr
                  td <b>Artículo 23 de la Constitución Política de Colombia (1991)</b>
                  td Concerniente a las peticiones que puede realizar cada ciudadano.
                tr
                  td <b>Ley 1755 de 2015</b>
                  td Por medio de la cual se regula el derecho fundamental de petición.
                tr
                  td <b>Ley 1437 2011</b>
                  td Código de Procedimiento Administrativo y de lo Contencioso Administrativo.
                tr
                  td <b>Ley 1474 de 2011</b>
                  td Actos de corrupción.
                tr
                  td <b>Decreto 19 de 2012</b>
                  td Antitrámites.
          
    separador
    
    .row.justify-content-center.align-items-center
      .col-12.col-md-12.col-lg-10
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Clasificación y trazabilidad de requerimientos

    
      .col-md-12.col-lg-10.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img28.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0 En la cadena de suministro, la trazabilidad es una cuestión tanto reglamentaria como ética o medioambiental. La trazabilidad es un criterio fundamental para los esfuerzos de sostenibilidad relacionados con las cadenas de suministro, en las que conocer al productor, a los trabajadores y a otros eslabones es un factor necesario que subyace a las afirmaciones acertadas sobre el impacto social, económico o medioambiental. Los minoristas respetuosos con el medioambiente pueden optar por poner a disposición de los clientes la información relativa a su cadena de suministro, ilustrando el hecho de que los productos que venden se fabrican en fábricas con condiciones laborales seguras, por trabajadores que ganan un salario justo y con métodos que no dañan el medio ambiente.

      .col-md-12.col-lg-10
        p La trazabilidad total ofrece ventajas para múltiples acciones a lo largo de la cadena de suministro, más allá de los sistemas de información, entre ellas se resaltan:

      .col-md-12.col-lg-10
        .bg-color-10.mb-5
          .row.p-5.justify-around
            .col-12.col-lg-6
              ul.lista-ul
                li 
                  i.fas.fa-check.bg-color-5
                  | Mecanismo para cumplir con las políticas y normativas locales e internacionales.
                li 
                  i.fas.fa-check.bg-color-5
                  | Reducción del riesgo de que entren materiales ilegales o no conformes en las cadenas de suministro.
                li 
                  i.fas.fa-check.bg-color-5
                  | Facilitar la coordinación entre las autoridades y los organismos pertinentes.
                li 
                  i.fas.fa-check.bg-color-5
                  | Permitir la conciliación automática de lotes y volúmenes disponibles.
                li 
                  i.fas.fa-check.bg-color-5
                  | Ofrecer un método de control y seguimiento de las existencias.
            .col-12.col-lg-4
              ul.lista-ul
                li 
                  i.fas.fa-check.bg-color-5
                  | Activar las alertas de incumplimiento en tiempo real.
                li 
                  i.fas.fa-check.bg-color-5
                  | Reducir la probabilidad de errores de registro.
                li 
                  i.fas.fa-check.bg-color-5
                  | Mejorar la eficacia y la eficiencia.
                li 
                  i.fas.fa-check.bg-color-5
                  | Aumentar la transparencia.
                li 
                  i.fas.fa-check.bg-color-5
                  | Promover la integridad de la empresa.

      
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img29.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-3 En logística, la trazabilidad se refiere a la capacidad de rastrear las mercancías a lo largo de la cadena de distribución, sobre la base de un número de lote o de serie.
            p.mb-3 La definición de los objetivos estratégicos, las metas, los proyectos y los indicadores es un factor determinante para establecer el calendario y el flujo de las cadenas de suministro. Siempre es necesario tener un plan B y C en caso de que la alternativa falle y ofrecer un buen servicio.
            p.mb-0 Para estar informado sobre el inventario de mercancías en almacén, es necesario implementar un sistema de información debido a que ofrecen en tiempo real un estado de entradas y salidas de los productos.


      .col-md-12.col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Normalmente, la logística se ocupa de los eventos que llevan el producto hacia el cliente. En el caso de la logística inversa, el recurso retrocede, al menos, un paso en la cadena de suministro. Por ejemplo, la mercancía pasa del cliente al distribuidor o al fabricante. Cualquier proceso o gestión posterior a la venta del producto implica una logística inversa. Si el producto es defectuoso, el cliente lo devolvería. La empresa fabricante tendría entonces que organizar el envío del producto defectuoso, probar el producto, desmontarlo, repararlo, reciclarlo o eliminarlo.


      .col-md-12.col-lg-10.mb-4
        p El mismo proceso se podría utilizar para la reutilización/reenvío de productos y mercancías perecederas para evitar que se estropeen si el transporte no está disponible o supone un reto. Por ejemplo, en el momento álgido de la pandemia el deterioro de los alimentos era un gran problema; pero ahora, con la vista puesta en la logística completa hacia delante y hacia atrás, esos residuos pueden ser redirigidos para evitar el deterioro y reducir los costes totales de transporte.

      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img31.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-3 Un aspecto importante para el éxito de las organizaciones es asegurar que la gestión del proceso logístico esté adecuadamente alineada con la implementación de la dirección estratégica como requisito previo para obtener resultados en términos de valor añadido percibido por los clientes internos y externos como condición de eficiencia y competitividad.
            p.mb-0 A continuación, se verán los cinco principales componentes de gestión de la cadena de suministro.

      .col-md-12.col-lg-12.mb-4
        figure(data-aos="fade-up")
          .video-mb-2
            iframe(width="100%" height="450" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          //- figcaption Video: Leyenda del video
 
      .col-md-12.col-lg-10
        p En resumen, estos fueron los elementos de la gestión de la cadena de suministro que los líderes tienen en cuenta a la hora de tomar decisiones estratégicas. Por lo tanto, cada componente de la gestión de la cadena de suministro es vital para tomar decisiones estratégicas, ya sea en términos de diversificación de productos o vertical en una organización. Con la tendencia actual a la transformación digital, se han tomado muchas iniciativas digitales para la cadena de suministro, lo que puede ser utilizado por la empresa como una ventaja competitiva.

    separador

    .row.justify-content-center.align-items-center.mb-2
      .col-12.col-md-12.col-lg-10
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Notificación de recepción

    //- video
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure(data-aos="fade-up")
          .video-mb-2
            iframe(width="100%" height="450" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          //- figcaption Video: Leyenda del video

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img32.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3 Peticiones, quejas, reclamos, sugerencias, felicitaciones (PQRSF): estos componentes constituyen la mayor composición dentro de los requerimientos de los usuarios, ya que la mayoría de sus solicitudes hacia la empresa están enfocadas en ellas. A nivel general, las PQR hacen alusión a inconformidades o dificultades con la empresa, su personal o los productos adquiridos, mientras que las felicitaciones aluden a un reconocimiento de cliente hacia la empresa y las sugerencias una visión de mejora desde una perspectiva propositiva.

        p.mb-0 Para la atención de las solicitudes y/o comunicados de peticiones, quejas y reclamos (PQR) se usa un mismo canal administrativo, pero tiene un tratamiento y un seguimiento particular; por esta razón, el primer paso del proceso de PQR es el formato de recepción que debe, de manera clara y definida, determinar en cuál de las tres tipologías se clasifica la inquietud del cliente respecto del servicio prestado.

    .row.justify-content-center.align-items-center.mb-5
      .bgr_6
        .row.justify-center
          .col-12.col-lg-12
            .row.bgr_7
              .col-12.col-lg-5
                figure
                  img.posit_3(src='@/assets/curso/temas/tema1/img35.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-6.align-items-center
                p Al igual una petición, queja o reclamo, la respuesta debe ser clara y <b>emitirse dentro de los tiempos estipulados por la ley</b>, en caso de no ser posible cumplir los tiempos de debe informar al peticionario, informando los tiempos de respuesta y causales de la mora.
        .row.justify-center
          .col-12.col-lg-10.align-items-center
            p La notificación o respuestas, según lo previsto en la Ley 1480 del 2011 (Estatuto del Consumidor) y en el Decreto 1074 del 2015, <b>deberá proporcionarse durante los 15 días hábiles siguientes a la recepción de la reclamación</b>, deben ser escritas ya sea en carta o email certificado y describir las causas por las cuales se dictamina en tal sentido y con las pruebas que sean soporte de sustento para la misma.
          .col-12.col-lg-2
            figure
              img.img130.posit_4(src='@/assets/curso/temas/tema1/img36.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema1/img37.svg")
          h4.text-center.mb-3 Proceso
          p.text-center El proceso de PQR es importante. Cumplir los tiempos establecidos reduce la posibilidad de que se interpongan sanciones por entidades de control, como lo es la Superintendencia de Industria y Comercio.

      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema1/img38.svg")
          h4.text-center.mb-3 Canales
          p.text-center.mb-3 Los canales para la presentación de una PQR más usados son:
          p.mb-1.text-center Oficinas de servicio al cliente.
          p.mb-1.text-center Call center.
          p.mb-1.text-center Página web.

      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema1/img39.svg")
          h4.text-center.mb-3 Sistema
          p.text-center Un sistema de PQR es el instrumento para el control y mejoramiento constante de los servicios y procesos, así como el responsable de crear la fidelización para los clientes.

    .row.justify-content-center.align-items-center.mb-1
      .col-md-12.col-lg-10
        .posit_5.bg-color-10.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema1/img40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.m-0.text-small En los anexos de este componente, se podrá encontrar material en video que amplía y ejemplifica la recepción de una reclamación y documenta la trazabilidad del requerimiento de acuerdo con la normativa y procedimientos técnicos.

                .col-sm-auto.p-lg-4
                  a.boton.bg-color-4.texto-blanco(href="https://www.youtube.com/embed/n4GaN2DuI9Q" target="_blank")
                    span ver video
                    i.fas.fa-file-download

      .col-md-12.col-lg-10
        p Para un mejor entendimiento en relación con la atención y seguimiento de PQR, cada organización por norma tendrá que fijar un aviso en sitio visible de atención de servicios con el nombre de la persona designada para atender inquietudes y reclamos o, en caso de que persista la inconformidad, el del responsable empresarial.

    separador
    
    .row.justify-content-center.align-items-center
      .col-12.col-md-12.col-lg-10
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Trámite a requerimientos


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        p.mb-3 Los requisitos para trámites del proceso se refieren a la documentación de las necesidades que una organización empresarial pretende satisfacer mediante la identificación de metodologías, enfoques y técnicas que deben aplicarse para producir un determinado resultado (producto o servicio) que materialice o realice las necesidades inicialmente establecidas. Los requisitos de los procesos establecen reglas y normas para planificar y realizar actividades (flujos de trabajo, procesos, procedimientos, tareas).
        p.mb-0 Determinar los requisitos de un proceso implica pasar por la siguiente secuencia de tareas:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img41.png")
          .crd_hover_txt--body
            h4.mb-3 Recopilar
            p.mb-0 La primera tarea consiste en determinar y recoger las necesidades y expectativas iniciales de los clientes.


      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img42.png")
          .crd_hover_txt--body
            h4.mb-3 Analizar
            p.mb-0 La segunda tarea se trata de revisar los datos recogidos y asegurarse de que son claros, completos, inequívocos y coherentes.


      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img43.png")
          .crd_hover_txt--body
            h4.mb-3 Registrar
            p.mb-0 La última tarea es crear un documento de especificación de requisitos y presentarlo a los clientes para su validación.

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-md-12.col-lg-7
            p.mb-3(data-aos="fade-right") Ya definido con claridad la petición, queja y reclamo, las estrategias de atención al cliente deben enfocarse como mínimo en los siguientes objetivos:

            .row.justify-content-center
              .col-lg-6.mb-3
                .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/img48.svg' alt='AvatarTop', style="max-width: 120px;")
                  .tarjeta.bg-color-3
                    .p-3
                      p.mb-0 Confianza

              .col-lg-6.mb-3
                .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/img49.svg' alt='AvatarTop', style="max-width: 120px;")
                  .tarjeta.bg-color-3
                    .p-3
                      p.mb-0 Confianza

              .col-lg-6.mb-3
                .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/img50.svg' alt='AvatarTop', style="max-width: 120px;")
                  .tarjeta.bg-color-3
                    .p-3
                      p.mb-0 Confianza

              .col-lg-6.mb-3
                .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/img51.svg' alt='AvatarTop', style="max-width: 120px;")
                  .tarjeta.bg-color-3
                    .p-3
                      p.mb-0 Confianza

          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img44.png", data-aos="zoom-in")

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10
        p.mb-3 Para lograr desarrollar cada uno de los objetivos anteriores, las organizaciones están obligadas a implementar el mecanismo de PQR, no solamente para lograr mejora continua de la atención al cliente, sino, en no menor importancia, recabar los datos y evidencias de forma permanente que permitan ser tabuladas y analizadas, convirtiéndolas en indicadores e información de garantía de mejora continua del servicio.
        p.mb-0 Un ciclo básico de PQR es el siguiente:

    //- figura
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10
        //- Figura
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 1. 
            span Ciclo básico de PQR
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img45.png', alt='').mx-auto.d-none.d-md-block.d-sm-none
          img(src='@/assets/curso/temas/tema1/img46.png', alt='').mx-auto.d-block.d-md-none.d-sm-block

        figcaption 
          b Nota. 
          | SENA 2026

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10
        p.mb-0(data-aos="fade-right") Los procesos de desarrollo de información requieren de datos constantes, fiables y medibles. Para ello, es necesario su verificación de forma permanente y en ciclo. Este proceso permite la depuración y brinda garantía de certeza de las tendencias detectadas en cada análisis practicado.

    .row.justify-content-center.mb-0
      .col-12.col-md-12.col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img47.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los PQR se deben solucionar o responder siguiendo los principios, términos y métodos dispuestos en el Código Contencioso Administrativo y su incumplimiento dará sitio a la imposición de las sanciones previstas en el mismo.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
