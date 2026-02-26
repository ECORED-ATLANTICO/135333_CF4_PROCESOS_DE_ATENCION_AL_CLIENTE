<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión


    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los indicadores de gestión son herramientas que permiten medir el desempeño de los procesos y actividades de una organización. Son fundamentales para evaluar el cumplimiento de los objetivos y metas establecidos, así como para identificar áreas de mejora.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12.col-lg-12.bg-color-10.p-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/img02.svg", data-aos="zoom-in")
          .col-lg-9
              h4.mb-3 De acuerdo con lo anterior, un KPI
              p.mb-0 Es una medida que evalúa cómo una empresa ejecuta su visión estratégica. Este término se refiere a cómo una estrategia interactiva, se integra en la estrategia de la empresa en su conjunto, por ello es importante que todos los implicados en ella estén de acuerdo en lo que representa la estrategia y cómo se interpretan.
    
    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        p.mb-3 Es necesario destacar el hecho de que hay un límite en la forma en que cada uno de los puntos de optimización puede mejorar. También se han visto los efectos de la anulación donde el aumento de la eficacia de una acción concreta parecía producirse solo a favor de otra acción.
        p.mb-0 Se puede reconocer los elementos de un indicador de gestión, de acuerdo con el siguiente esquema:

    //- figura
    .row.justify-content-center.mb-4
      .col-12.col-md-12.col-lg-10
        //- Figura
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 2. 
            span Sistema de calidad
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img03.svg', alt='').mx-auto.d-none.d-md-block.d-sm-none
          img(src='@/assets/curso/temas/tema3/img04.svg', alt='').mx-auto.d-block.d-md-none.d-sm-block

        figcaption 
          b Nota. 
          | SENA 2026

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10.mb-5
        p.mb-0 En una organización también se debe contar con el mínimo número posible de indicadores que garanticen contar con información constante, real y precisa sobre aspectos tales como:

      .col-md-12.col-lg-10.mb-4
        .row.justify-content-center
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img05.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Efectividad.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img06.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Eficiencia.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img07.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Eficacia.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img08.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Productividad.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img09.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Calidad.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Ejecución presupuestal.
          .col-lg-3.mb-3
            .tarjeta-avatar-b(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop', style="max-width: 120px;")
              .tarjeta.bg-color-3
                .p-3
                  p.mb-0 Incidencia de la gestión.

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        p.mb-3 Todo lo anterior constituye el conjunto de signos vitales de la organización (Mora, 2004).
        p.mb-0 Las siguientes son las características generales de los indicadores que pueden ayudar a garantizar sean útiles y eficaces: 

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Relevante")
            .row.justify-content-center.align-items-center
              .col-lg-12.order-lg-1
                p.mb-0 Relacionar los indicadores de rendimiento con las metas y objetivos la organización. Lo ideal es que sean relevantes para las personas que proporcionan los datos y para los usuarios, pero puede que no sea posible que un solo indicador sea relevante para todos los usuarios, esto debido a las diferencias de perspectivas e intereses.
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Definición clara")
            .row.justify-content-center.align-items-center
              .col-lg-12.order-lg-1
                p.mb-3 Un indicador de rendimiento debe tener una definición clara e inteligible para garantizar una recopilación coherente y una comparación justa.    
                p.mb-0 Las descripciones vagas pueden dar lugar a interpretaciones erróneas y a confusión. Las definiciones demasiado estrictas o demasiado amplias también pueden crear problemas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fácil de entender y utilizar")
            .row.justify-content-center.align-items-center
              .col-lg-12.order-lg-1
                p.mb-0 Es importante que los indicadores se describan en términos que los usuarios de la información puedan entender, incluso si la propia definición tiene que utilizar terminología técnica. Los indicadores dirigidos al público deben evitar la jerga de gestión o los conceptos abstractos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Comparable")
            .row.justify-content-center.align-items-center
              .col-lg-12.order-lg-1
                p.mb-0 Lo ideal es que los indicadores sean comparables de forma coherente tanto entre organizaciones como a lo largo del tiempo. Un aspecto esencial de la comparabilidad de los indicadores de rendimiento es la inclusión del contexto en el que se realiza la comparación. Las circunstancias externas e internas pueden diferir hasta tal punto que la comparación no sea válida.
         
    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .bg-fondo-5.tarjeta
          .p-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  h4 Verificable
                  p.mb-0 El indicador también debe recogerse y calcularse de forma que permita verificar la información y los datos. El indicador debe basarse en sistemas sólidos de recogida de datos, y los gestores deben poder verificar la exactitud de la información y la coherencia de los métodos utilizados.
            
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  h4 Rentable
                  p.mb-0 Otro criterio importante es equilibrar el costo de la recogida de información con su utilidad. Siempre que sea posible, un indicador debe basarse en información ya disponible y vinculada a la actividad de recogida de datos existente.

              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  h4 Permitir la innovación
                  p.mb-0 La definición de un indicador no debe disuadir a las organizaciones de desarrollar procesos innovadores o idear métodos, sistemas o procedimientos alternativos para mejorar la prestación de servicios. Lo ideal es que los indicadores de rendimiento se construyan para que se produzcan tales innovaciones.

              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  h4 Validez estadística
                  p.mb-0 Los indicadores deben ser estadísticamente válidos.

              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  h4 Oportunos
                  p.mb-0 Debe basarse en datos que estén disponibles en un plazo razonable. Esta escala temporal dependerá del uso que se haga de los datos. Algunos datos se recogen semanalmente o incluso a diario, ya que son necesarios en la gestión operativa de los servicios, mientras que otros están disponibles una vez al año para fines más estratégicos y a largo plazo.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10.mb-0
        p.mb-5 Durante la formulación de los indicadores hay que plantearse las siguientes preguntas:

        .row.justify-content-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/img12.png", data-aos="zoom-in")
          .col-md-12.col-lg-8
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-5(titulo="¿Qué?")
                h4 ¿Qué?
                p.m-0 Lluvia de ideas sobre las variables, que pueden proporcionar medios para medir los objetivos.
              .tarjeta.color-acento-botones--borde.p-5(titulo="¿Cuánto?")
                h4 ¿Cuánto?
                p.m-0 Para definir la magnitud del cambio que queremos conseguir.
              .tarjeta.color-acento-botones--borde.p-5(titulo="¿Quiénes?")
                h4 ¿Quiénes?
                p.m-0 Para aclarar quién pertenece al grupo objetivo.
              .tarjeta.color-acento-botones--borde.p-5(titulo="¿Dónde?")
                h4 ¿Dónde?
                p.m-0 Información específica sobre la zona de intervención.
              .tarjeta.color-acento-botones--borde.p-5(titulo="¿Cuándo?")
                h4 ¿Cuándo?
                p.m-0 Definición del marco temporal.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10.mb-4
        p.mb-0 Entre los indicadores de gestión para medir el nivel de servicio se pueden utilizar los siguientes:

      .col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 3. 
            span Indicadores de gestión para medir el nivel de servicio
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
            thead
              tr
                th(colspan="2") Indicadores de gestión para medir el nivel de servicio
            tbody
              tr
                td Órdenes completas
                td Órdenes entregadas completas / Órdenes totales surtidas.
              tr
                td Órdenes a tiempo
                td Órdenes entregadas a tiempo / Órdenes totales despachadas.
              tr
                td Órdenes en cantidad
                td Unidades recibidas orden / Unidades entregadas orden.
              tr
                td Precisión facturación
                td Facturas aceptadas / Facturas generadas.
              tr
                td Ciclo de orden
                td Sumatoria de fechas (recepción – fechas de solicitud).
              tr
                td Ordenes con devolución
                td Órdenes devueltas / Órdenes totales generadas.
              tr
                td Quejas de clientes
                td Órdenes con quejas / Órdenes totales generadas.
              tr
                td Resolución de quejas de clientes
                td Quejas con resolución a tiempo / Quejas recibidas.




</template>

<script>
export default {
  name: 'Tema3',
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
