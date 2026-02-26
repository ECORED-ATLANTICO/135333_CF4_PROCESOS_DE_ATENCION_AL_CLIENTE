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

    .container
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

    separador
    
    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Características

    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/img01.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-3(data-aos="fade-right") Interpretar un indicador de gestión es indicar lo que está ocurriendo en un proceso específico o actividad, para ello se procede a la toma de decisiones que son, generalmente, opciones de mejora para corregir cuando su resultado se desvía de lo esperado y mejorar los resultados en el menor tiempo posible.
            p.mb-0(data-aos="fade-right") En la cultura de la medición del desempeño de las organizaciones y cuando se interpretan o se leen los indicadores de gestión, es muy importante realizar el ejercicio planteado en la gráfica, que son los niveles de tolerancia de los indicadores y que nos envían señales de alerta.

    separador
    
    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Interpretación de indicadores de gestión (KPI)

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10
        p.mb-3 Los KPI permiten revisar los resultados y la trazabilidad de las variables escogidas para el indicador, además de entender el nivel del objetivo propuesto desde el punto de vista de las políticas establecidas por la compañía. En ellos se reflejan las fortalezas, debilidades oportunidades y las amenazas por lo tanto es importante clarificar y precisar las condiciones necesarias para construir aquellos realmente útiles para medir el desempeño de las organizaciones en sus diferentes áreas.
        p.mb-0 Una regla ampliamente usada en la interpretación de los KPI es que el objetivo debe ser SMART; las cinco letras significan:

    .container
      .row.justify-content-center.align-items-center.mb-5()
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center.bg-color-10
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/img17.svg", data-aos="zoom-in")
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/img18.svg", data-aos="zoom-in", style="max-width: 60%;")

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Medible")
            p El objetivo debe ser específico y estar muy claramente definido.

          div(titulo="Alcanzable")
            p El progreso hacia el objetivo debe ser medible. En la mayoría de los casos significa que puede cuantificarse. Sin embargo, a veces puede ser difícil; y es más sencillo, sin dejar de ser eficaz, tener, al menos, una definición clara de cómo evaluar el nivel de rendimiento. Como regla general, el 80% de los objetivos deberían estar cuantificados.

          div(titulo="Relevante")
            p El objetivo debe ser alcanzable. Si el objetivo es demasiado ambicioso, puede desmotivar al equipo. Por el contrario, si es demasiado fácil, no supondrá un reto y no contribuirá al crecimiento de la empresa.

          div(titulo="A tiempo")
            p El plazo para alcanzar el objetivo debe ser claro.

    separador
    
    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Aplicabilidad de los KPI

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10.mb-4
        p.mb-0(data-aos="fade-right") La gestión basada en los indicadores de gestión se aplica a todas las áreas de la organización, tanto a nivel estratégico, táctico y operativo.

      .col-md-12.col-lg-10.mb-4(data-aos="fade-right")
        .cajon.bg-primario.p-4
          p.mb-0 Los indicadores de gestión se deben diseñar para monitorear resultado de variable de acuerdo a la necesidad de cada nivel organizacional y su resultado está expresado de manera numérica que nos indica el nivel de desempeño o el cumplimiento de los objetivos trazados. Es indispensable que toda empresa desarrolle habilidades alrededor del manejo de los indicadores de gestión logística, con el fin de poder utilizar la información resultante de manera oportuna tomar decisiones (Mora, 2004).

      .col-md-12.col-lg-10.mb-4
        p.mb-3(data-aos="fade-right") Para aplicar y/o establecer los indicadores de gestión (KPI) es importante tener claridad sobre cómo hacerlo correctamente, de dónde son las fuentes de información, responsables, recursos, frecuencia de la medición y presentación de los informes.

        p.mb-0(data-aos="fade-right") Se deben desarrollar indicadores para aquellas actividades o procesos relevantes al objetivo específico del área de la empresa, para lo anterior, se deben tener en cuenta los siguientes pasos:


    .container
      .row.justify-content-center.align-items-center.mb-4()
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-7.bg-color-11.mb-2.mb-lg-0.p-5
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  | Identificar el proceso, área o la actividad a medir.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  | Responsable del indicador.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  | Conceptualizar cada paso del proceso.
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  | Definir el objetivo del indicador y cada variable a medir.
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  | Recolectar información inherente al proceso.
                li 
                  .lista-ol--cuadro__vineta
                    span F
                  | Cuantificar y medir las variables.
                li 
                  .lista-ol--cuadro__vineta
                    span G
                  | Establecer el indicador a controlar.
                li 
                  .lista-ol--cuadro__vineta
                    span H
                  | Comparar con el indicador global y el de la competencia interna.
                li 
                  .lista-ol--cuadro__vineta
                    span I
                  | Seguir y retroalimentar las mediciones periódicamente.
                li 
                  .lista-ol--cuadro__vineta
                    span J
                  | Mejorar continuamente el indicador.
                li 
                  .lista-ol--cuadro__vineta
                    span K
                  | Proyección y benchmarking externos.

            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/img20.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10.mb-4
        p.mb-3(data-aos="fade-right") Los indicadores de servicio al cliente son considerados muy sensibles y se deben administrar en todas las organizaciones, porque son los resultados directos de la labor relacionada con su principal objetivo: el cliente, y se evalúan de acuerdo con la política establecida para la variable y con la frecuencia indicada para determinar resultados en tiempos de intervalos más cortos, se puede decir que es a diario y permanente.
        p.mb-0 A continuación, se presentan los KPI más efectivos para medir el servicio al cliente.

      .col-md-12.col-lg-6
    
        div.bg-color-3.p-3.mb-3
          h4.m-0 ¿Cuáles son los KPI de servicio al cliente más efectivos?
          
        PasosA.color-acento-contenido.mb-5.justify-content-right(tipo="n")
          div(data-aos="fade-left").text-start
            h3 Satisfacción general
            p Ayudará a comprender la satisfacción  de los clientes en todos los aspectos  de la compañía.
          div(data-aos="fade-right").text-start
            h3 Número de quejas recibidas
            p Permite comprender las áreas de  negocio que son un problema y  cómo resolverlo. 
          div(data-aos="fade-left").text-start
            h3 Tasa de quejas no resueltas
            p Ayuda a optimizar los recursos y  ofrecer un horario flexible para la  atención al cliente.
          div(data-aos="fade-right").text-start
            h3 Tiempo para solucionar quejas
            p Permite mejorar los tiempos de  atención al cliente y aumenta la  posibilidad de mantenerlos fieles a  la empresa.
          div(data-aos="fade-left").text-start
            h3 Tasa de conversión
            p Ayuda a descubrir la probabilidad  de que un cliente compre de  nuevo, renueve el contrato, llene  un formulario, etc.
          div(data-aos="fade-right").text-start
            h3 Indicador <em>Net Promoter Score</em>
            p Ofrece la posibilidad de conocer si el  cliente está satisfecho con tu servicio  y recomendará la empresa con  alguien más.
          div(data-aos="fade-left").text-start
            h3 Tasa de retención de clientes
            p Ayuda a conocer si los clientes  se encuentran contentos con un servicio y si se mantendrán fieles  a la marca.
          div(data-aos="fade-right").text-start
            h3 Tasa de desempeño de  los empleados
            p Permite medir la productividad de los  empleados en cuanto a la solución de  problemas y servicio al cliente.
  
      .col-md-12.col-lg-10
        p Estas son algunas áreas relacionadas en la siguiente tabla y que están comprometidas directamente con el servicio al cliente y que deben ser medidas y evaluadas de manera periódica, especialmente todo lo relacionado con la logística de servicio al cliente.
    
    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 4. 
            span Servicio al cliente
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
            thead
              tr
                th Indicador
                th Descripción
                th Fórmula
                th Impacto (comentarios)
            tbody
              tr
                td Nivel de cumplimiento entregas a clientes.
                td Consiste en calcular el porcentaje real de las entregas oportunas y efectivas a los clientes.
                td 
                  .text-center
                    p.mb-2 Total de pedidos no entregados a tiempo.
                    .hr-line
                    p.mt-2 Total de pedidos despachados.
                td Sirve para controlar los errores que se presentan en la empresa y que no permiten entregar los pedidos a los clientes. Sin duda, esta situación impacta fuertemente al servicio al cliente y el recaudo de la cartera.
              tr
                td Calidad de la facturación.
                td Número y porcentaje de facturas con error por cliente, y agregación de los mismos.
                td 
                  .text-center
                    p.mb-2 Facturas emitidas con errores.
                    .hr-line
                    p.mt-2 Total de facturas emitidas.
                td Generación de retrasos en los cobros e imagen de mal servicio al cliente, con la consiguiente pérdida de ventas.
              tr
                td Causales de notas crédito.
                td Consiste en calcular el porcentaje real de las facturas con problemas.
                td 
                   .text-center
                    p.mb-2 Total notas crédito.
                    .hr-line
                    p.mt-2 Total de facturas generadas.
                td Sirve para controlar los errores que se presentan en la empresa por errores en la generación de la facturación de la empresa y que inciden negativamente en las finanzas y la reputación de la misma.
              tr
                td Pendientes por facturar.
                td Consiste en calcular el número de pedidos no facturados dentro del total de facturas.
                td 
                  .text-center
                    p.mb-2 Total pedidos pendientes por facturar.
                    .hr-line
                    p.mt-2 Total pedidos facturados.
                td Se utiliza para medir el impacto del valor de los pendientes por facturar y su incidencia en las finanzas de la empresa.

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10
        p.mb-3 En la tabla anterior se ven ejemplos de indicadores de gestión de servicio al cliente con su respectiva descripción técnica, de igual forma es importante resaltar que varían los indicadores (KPI) que se aplican o se construyen dependiendo el tipo de empresa, industrial, comercial, servicios y pública.
        p.mb-3 Los indicadores de gestión aplicados al desarrollo de los procesos logísticos son los de la mayor importancia, porque están relacionados de la mano con el servicio al cliente, y el mejoramiento continuo de los procesos solo es posible si se tiene una métrica o medición continua y exhaustiva en cada eslabón de la cadena.
        p.mb-0 A continuación, se relaciona la estructura técnica que se debe tener en cuenta al momento de elaborarse los indicadores de gestión (KPI):

    .container
      .row.justify-content-center.align-items-center.mb-4()
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center.bg-color-13
            .col-lg-10.mb-2.mb-lg-0.p-5.order-md-2
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span A
                  | Nombre: el nombre que se va a dar al indicador dependiendo la actividad a medir.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span B
                  | Objetivo del indicador: con qué objetivo se plantea el indicador.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span C
                  | Forma de cálculo del indicador: la fórmula para calcular los resultados del indicador.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span D
                  | Periodicidad: el periodo de tiempo que se toma para medir el indicador.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span E
                  | Responsable: todo indicador debe tener un responsable.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span F
                  | Área que recibe el indicador.

                li 
                  .lista-ol--cuadro__vineta.bg-color-14
                    span G
                  | Impacto: se mide el resultado del mismo y el impacto que tiene sobre las áreas que se le aplican.

            .col-md-6.col-lg-2.mb-2.mb-lg-0.order-md-1.mt-md-4
              figure
                img(src="@/assets/curso/temas/tema3/img21.svg", data-aos="zoom-in")

    separador

    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Reporte de los KPI

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/img22.png", data-aos="zoom-in")
          .col-md-12.col-lg-8
            p.mb-3(data-aos="fade-right") Estos reportes e informes de gestión basados en los indicadores de gestión, deben centrarse en las estrategias de valor que se han diseñado para la satisfacción del cliente y en las áreas organizacionales comprometidas en la atención, colaboración con el cliente y oportunidades de negocio. Los reportes o informes inherentes al desempeño de las áreas se deben presentar por cada uno de los responsables con su respectivo análisis de los resultados arrojados; pero antes de lo anterior es necesario establecer los KPI en cada área o actividad.
            p.mb-0(data-aos="fade-right") Estos se presentan de acuerdo con la necesidad y periodicidad de las organizaciones de medir sus procesos, cuando se construye un indicador de gestión en el mismo se indican los periodos de tiempo de la medición y reporte de los mismos.

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 5. 
            span Informes perspectiva de los clientes
        .tabla-a.color-acento-contenido
          table
            caption Nota. Tomada de Revista Española de Financiación y Contabilidad (2005)
            thead
              tr.bg-color-3
                th(colspan="4").text-center Informes perspectiva de los clientes
              tr
                th Informe
                th Plazo
                th Destinatario
                th Característica
            tbody
              tr.bg-color-white
                td(colspan="4").text-center
                  b Informes sobre oportunidad de atención
              tr
                td Propuestas solicitadas por clientes.
                td Semanal.
                td Producción, ventas y dirección.
                td De la semana y acumulado.
              tr
                td Propuestas adjudicadas.
                td Semanal.
                td Producción, ventas y dirección.
                td De la semana y acumulado.
              tr
                td Plazo despacho propuestas adjudicadas.
                td Semanal.
                td Producción, ventas y dirección.
                td De la semana y acumulado.
              tr
                td Propuestas, pérdidas y causas.
                td Semanal.
                td Producción, ventas y dirección.
                td De la semana y acumulado.
              tr
                td Precios de ventas por clientes.
                td Mensual.
                td Producción, ventas y dirección.
                td Comparativo mensual y anual.
              tr.bg-color-white
                td(colspan="4").text-center
                  b Informes sobre colaboración con cliente
              tr
                td Nivel de conectividad e información compartida.
                td Mensual.
                td Producción, ventas, contabilidad y dirección.
                td Por cliente.

    .row.justify-content-center.align-items-center.mb-4()
      .col-md-12.col-lg-10
        p.mb-3 Una vez que se haya medido un indicador clave de rendimiento, es posible presentar su progreso en un informe de KPI. Esto suele ser útil para que los jefes de proyecto, jefes de equipo, gerentes y supervisores lo comuniquen a la dirección de la empresa, a los jefes de departamento o a otras partes interesadas.
        p.mb-0 Hay tres categorías principales de informes de KPI que se pueden crear en función de la información que necesita el público y de sus objetivos:
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema3/img24.svg")
          h4.text-center.mb-3 Informe analítico
          p.text-center.mb-0 Detalla el KPI y trabaja para explicar qué fue lo que más impactó en sus resultados. Se pueden incluir datos históricos de los KPI para su comparación.

      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema3/img25.svg")
          h4.text-center.mb-3 Informe operativo
          p.text-center.mb-0 Proporciona datos sobre cómo los KPI miden las operaciones diarias de una organización para que la dirección pueda tomar decisiones bien informadas.

      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              figure
                img.img-120(src="@/assets/curso/temas/tema3/img26.svg")
          h4.text-center.mb-3 Informe estratégico
          p.text-center.mb-0 Refleja la salud de la organización y su progreso para que las partes interesadas puedan determinar si la empresa está cumpliendo los objetivos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center.bg-color-10
          .col-auto.col-lg-4.mb-3.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img27.svg", data-aos="zoom-in", style="max-width: 75%;").mx-auto
          .col-lg-7
            h4.mb-3 ¿Qué incluir en un informe de KPI?
            p.mb-0 Aunque el informe debe redactarse para responder a las necesidades de atención al cliente de forma que refleje adecuadamente sus objetivos o proyectos, hay algunos datos clave que puede ser útil incluir.

    .row.justify-content-center.mb-0
      .col-md-12.col-lg-10
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4.h-auto(titulo="Meta")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img28.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
              
                p.mb-0 Identifique claramente qué objetivo está evaluando el KPI.
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Métrica")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img29.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Indique el indicador clave de rendimiento cuantificable, relevante y procesable que está utilizando para la medición.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Justificación")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img30.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Explique por qué usted o su equipo han elegido este KPI y cómo los datos resultantes contribuyen al éxito de la empresa.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Frecuencia")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img31.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Indique con qué frecuencia ha medido su indicador clave de rendimiento y con qué frecuencia lo reexaminará.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Fuente")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img32.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Identifique dónde recopiló los datos y considere la posibilidad de compartir una fórmula para calcularlos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Material visual")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img33.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Utilice un cuadro, una tabla o una gráfica para facilitar la comprensión. Si procede, compárelo con los anteriores visuales del mismo tipo para hacer un seguimiento del progreso a lo largo del tiempo.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Comentarios")
            .row.justify-content-center.align-items-center
              .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/temas/tema3/img34.svg", data-aos="zoom-in")
              .col-lg-9.order-lg-2
                p.mb-0 Aquí puedes añadir brevemente cualquier otra información relevante o interpretación de las métricas obtenidas.
          

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
