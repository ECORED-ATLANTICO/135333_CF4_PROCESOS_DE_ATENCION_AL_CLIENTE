<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/img01.svg", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") En términos de gestión de requerimientos, los requisitos del proceso se refieren a uno de los cuatro tipos de requisitos del proyecto que se identifican así: determinar, recopilar, analizar y registrar. Estos, junto con los requisitos de negocio, producto y recursos, sirven de base para obtener, analizar, especificar y validar las necesidades y expectativas de las partes interesadas para una Atención integral del cliente.

        p.mb-0(data-aos="fade-right") La política de atención pluralista y diferencial está dirigida a poblaciones en condición de vulnerabilidad por razones económicas, sociales, étnicas, territoriales, de género y que son sujetas de especial protección por parte del Estado.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
