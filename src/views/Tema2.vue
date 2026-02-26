<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema de calidad

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        p.mb-0 La política de atención con enfoque pluralista y diferencial completo de los lineamientos orientaciones y requerimientos del sistema integrado de gestión de calidad para satisfacer expectativas de las poblaciones en un marco de mejora continua.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La norma ISO 9001: 2015 es la norma de Sistemas de Gestión de la Calidad (SGC) más reconocida e implantada en el mundo. Especifica los requisitos para un SGC que las organizaciones pueden utilizar para desarrollar sus propios programas.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10.mb-4
        p.mb-0 El valor de la aplicación de la regla ISO 9001 radica primordialmente en tres aspectos:

      .col-md-12.col-lg-10.mb-4
        .row.justify-content-center
          .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
            .tarjeta-numerada.color-primario.p-5.h-100
              .tarjeta-numerada__numero.posit_8
                .h2 A
              p.mt-2.mb-0.text-center La confianza de los consumidores y la diferenciación de la marca.
          .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-down")
            .tarjeta-numerada.color-primario.p-5.h-100
              .tarjeta-numerada__numero.posit_8
                .h2 B
              p.mt-2.mb-0.text-center El crecimiento de seguridad en el desarrollo.
          .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero.posit_8
                .h2 C
              p.mb-0.text-center El impulso de la colaboración y liderazgo de los trabajadores de la compañía u organización.
      
      .col-md-12.col-lg-10
        p.mb-0 Una vez que los sistemas de administración de la calidad son implementados y gestionados correctamente, tienen la posibilidad de contribuir a las empresas a incrementar el nivel de satisfacción de los consumidores, pues las metas que se establecen toman presente las necesidades y expectativas de estos y las empresas orientan todo su esfuerzo en exponer productos o servicios que cumplan con los reglamentos aplicables y que cubran los requerimientos y demandas que el comprador logre tener o necesitar en el futuro.

    //- figura
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10
        //- Figura
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 2. 
            span Sistema de calidad
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img02.svg', alt='').mx-auto.d-none.d-md-block.d-sm-none
          img(src='@/assets/curso/temas/tema2/img03.svg', alt='').mx-auto.d-block.d-md-none.d-sm-block

        figcaption 
          b Nota. 
          | SENA 2026

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        p.mb-3 La identificación sistemática y la administración de los diferentes procesos empleados en la compañía, y especialmente las colaboraciones entre tales procesos tienen la posibilidad de referir como “gestión por procesos” en su entorno de aplicación. La regla ISO 9001 estimula la adopción de la administración por procesos como medio de detectar evidentemente y gestionar el Sistema de Administración de la Calidad y las oportunidades para la optimización.
        p.mb-0 La atención de los requerimientos del cliente y de otras necesidades interesadas de manera en el servicio al cliente, son importantes y se usan como retroalimentación para poder evaluar y validar si se han logrado las metas previstas por la dirección de la empresa.
      
    .row.justify-content-center.align-items-center.mb-1
      .col-md-12.col-lg-12.bg-color-10.p-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/img05.svg", data-aos="zoom-in")
          .col-lg-8
              h4.mb-3 ¡Atención!
              ul.lista-ul
                li 
                  i.fas.fa-check.bg-color-5
                  | Las reglas de la serie ISO 9000 “no son prescriptivas”.
                li 
                  i.fas.fa-check.bg-color-5
                  | Permiten utilizar cualquier práctica o herramienta que se considere idónea para el tipo de producto, servicio o consumidores al que se sirve.
                li 
                  i.fas.fa-check.bg-color-5
                  | No pretende obligar ni “recetar” metodologías (los cómo), sino afirmar que el hincapié se dé en el cumplimiento de los requisitos exigidos de forma obligatoria referenciados en la norma.

    separador
    
    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-12
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Características


    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/img06.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        p.mb-4(data-aos="fade-right") Conforme a las necesidades de los distintos sectores en atención al cliente, el sistema de calidad contribuye de forma integral con pertinencia y calidad sin distinción de ninguna clase y organiza, desarrolla, administra y ejecuta acciones de forma integral en coordinación y en función de las necesidades sociales y del sector productivo acorde la actividad de la empresa.
        p.mb-0(data-aos="fade-right") La inserción de las poblaciones sujetas de especial protección por parte del Estado en diferentes escenarios sociales, económicos, productivos, culturales, formativos, entre otros, se facilita brindando a estos colectivos poblaciones de atención con un enfoque participativo y pluralista para fortalecer competencias con fundamento en particularidades para lograr la inclusión social y un mayor grado de pertinencia en la atención.

    .row.mb-5.justify-content-center.align-items-center

      .col-md-12.col-lg-10.mb-4
        p.mb-0(data-aos="fade-right") Las principales características del sistema de calidad se resume en:

      .col-md-12.col-lg-10.mb-4
        .row.align-items-center
          .col-lg-6.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Eficiencia en los procesos u ocupaciones de la organización (mejora de costos).

          .col-lg-6.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Mejora importante en la satisfacción de los consumidores.

          .col-lg-6.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img09.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Herramienta de comunicación para optimización de la Imagen de la organización.

          .col-lg-6.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Aumento del ingreso al mercado, sin parámetros de fronteras.

          .col-lg-6.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Incremento de la comunicación interna, satisfacción de los trabajadores.

      .col-md-12.col-lg-10
        p.mb-3 La norma ISO 9001 mira el pro y el contra en el personal la esencia de la organización, y promueve su formación, colaboración y liderazgo en todos los niveles, además, los motiva y permite que sus capacidades sean utilizadas para el beneficio de la organización.
        p.mb-0 Los pasos a seguir para que la empresa sea certificada con ISO 9001 son:

    //- figura
    .row.justify-content-center.mb-0
      .col-12.col-md-12.col-lg-10.mb-4
        //- Figura
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 3. 
            span Pasos a seguir para que la empresa sea certificada con ISO 9001
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img12.png', alt='').mx-auto.d-none.d-md-block.d-sm-none
          img(src='@/assets/curso/temas/tema2/img13.png', alt='').mx-auto.d-block.d-md-none.d-sm-block

        figcaption 
          b Nota. 
          | SENA 2026

      .col-md-12.col-lg-10
        p.mb-0(data-aos="fade-right") Se puede decir, entonces, que disponer de un sistema de administración de la calidad bajo la ISO 9001 es una virtud competitiva y debe ser una elección estratégica tenida presente por cada una de las empresas.

    separador
    
    .row.justify-content-center.align-items-center
      .col-12.col-md-12.col-lg-10
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Protocolo del sistema de calidad

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10.mb-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/img14.png", data-aos="zoom-in")
          .col-md-12.col-lg-7
            p.mb-3(data-aos="fade-right") Un protocolo es el grupo de métodos para asegurar que un producto o servicio cumpla con ciertos criterios. Para el caso del protocolo del sistema de gestión tales criterios serían la calidad o los requisitos del comprador.
            p.mb-3(data-aos="fade-right") Los ANS (Acuerdos de Niveles de Servicio), también conocidos como SLA, establecen la relación entre el cliente y el proveedor.
            p.mb-0(data-aos="fade-right") Estos ANS identifican y definen las necesidades del cliente a la vez que controla sus expectativas de servicio en relación a la capacidad del proveedor, proporciona un marco de entendimiento, simplifica asuntos complicados, reduce las áreas de conflicto y favorece el diálogo ante la disputa.
          
      .col-12.col-md-12.col-lg-10
        p.mb-0 Los Acuerdos de Niveles de Servicio como generadores de valor se definen así:
    
    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              p.mb-0 Es un protocolo plasmado normalmente en un documento por el que una compañía que presta un servicio a otra se compromete a prestar el mismo bajo unas determinadas condiciones y con unas prestaciones mínimas o que se realiza entre los empleados de una empresa.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imagen de acompañamiento', style="max-width: 200px;").mx-auto


          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              p.mb-0 Un ANS tratará de mantener y garantizar la calidad de un servicio brindado a un cliente.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imagen de acompañamiento', style="max-width: 200px;").mx-auto


          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              p.mb-0 El Acuerdo de Nivel de Servicio es el mantenimiento de la disponibilidad de un determinado servicio basado en un compromiso del nivel de cumplimiento en su ejecución, que puede ser medido y demostrado.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', alt='Imagen de acompañamiento', style="max-width: 200px;").mx-auto


          .row.justify-content-center.align-items-center.p-4
            .col-lg-8.mb-4
              p.mb-0 En los ANS se pueden establecer tantos indicadores como se estimen necesarios y de su evaluación se obtienen, por ejemplo, penalizaciones a la empresa suministradora, identificación de puntos débiles del proceso e indicaciones para procesos de mejora continua en determinadas actividades.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img18.svg', alt='Imagen de acompañamiento', style="max-width: 200px;").mx-auto
        
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10.mb-1
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 2. 
            span PQR
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
            thead
              tr
                th(colspan="2") Normas y entidades de importancia para la implementación de los ANS
            tbody
              tr
                td <b>ISO 9001.</b>	
                td Capítulo 7 numeral 5: Control de la producción y la prestación del servicio, dice que se debe asegurar la implementación del seguimiento y la medición así como la implementación de actividades de entrega del producto. De igual manera, en el capítulo 8, numeral 1 se hace mención de la satisfacción del cliente y en el capítulo 8, numeral 5 de la mejora continua.
              
              tr
                td <b>ITIL Information Technology Infrastructure Library ITIL V3. 2011.</b>	
                td Considera dentro del módulo de diseño del servicio los ANS como pilares del marco de trabajo, donde se encuentra la biblioteca de buenas prácticas de manejo de las tecnologías de la información.
              
              tr
                td <b>Superintendencia Financiera de Colombia.</b>	
                td Circular externa 042 de 2012 - requerimientos mínimos de seguridad y calidad para la realización de operaciones: Para procesos de tercerización outsourcing.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        p.mb-0(data-aos="fade-right") A continuación, se invita a observar un video sobre los aspectos más relevantes de los ANS.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        figure
          .video
            iframe(width="100%" height="450" src="https://www.youtube.com/embed/t8Y-8216i9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen) 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
