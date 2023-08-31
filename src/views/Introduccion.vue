<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La selección del huevo ha permitido crear procedimientos y pautas para mejorar la calidad del producto final, iniciando desde la alimentación de las aves, que garantiza las características del huevo y su cáscara que permite ofrecer al consumidor una alternativa nutricional e inocua desde la colecta del huevo dentro del galpón hasta llegar a la mesa. Esto conlleva que los pequeños, medianos y grandes productores de huevos manejen unos estándares de calidad y buenas prácticas avícolas para responder a los diferentes retos del consumo que se encuentran en el mercado. Por tal motivo, es importante conocer cómo realizar esta acción y quiénes intervienen en ella.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7qt-swqnLGE" title="Selección técnica de huevos de gallina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
