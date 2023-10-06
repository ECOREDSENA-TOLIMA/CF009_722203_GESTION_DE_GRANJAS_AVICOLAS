<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Limpieza y desinfección de áreas de clasificación de huevo

    p.mb-5 La limpieza y desinfección se realizan a diario al terminar las labores ejecutadas de la clasificación del huevo en la unidad o en las instalaciones para tal fin y se hace por medio de un cronograma y con registro de cada trabajo en un formato realizado y verificado por las personas responsables de ejecutar la labor, e incluyendo el control de plagas (moscas, roedores y animales rastreros). Frente a lo anterior, es importante tener en cuenta la siguiente información: 

    .col-xl-8.mx-auto.mb-5
      .row.mb-5
        .col-md-12
          //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="")
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/img-2.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                p.text-small La limpieza y la desinfección son procesos distintos y complementarios, puesto que, antes de aplicar una solución desinfectante, las superficies deben ser limpiadas correctamente con detergentes para permitir que el desinfectante pueda entrar en contacto directo con los microorganismos patógenos específicos, ya que la presencia de materia orgánica reduce significativamente la acción de los desinfectantes.

            .row(numero="2" titulo="")
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/img-3.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                p.text-small El objetivo de los procesos y prácticas de limpieza es eliminar los diferentes tipos de suciedad en equipos y superficies del establecimiento, ya sea restos de alimentos, grasa, polvo, suciedad, productos de desecho, entre otros. 

            .row(numero="3" titulo="")
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/img-4.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                p.text-small La desinfección, por su parte consiste en la eliminación de los microorganismos de superficies y equipos hasta un nivel adecuado para garantizar la inocuidad de los alimentos y evitar su alteración. Así pues, el objetivo de la desinfección es eliminar todos los microorganismos patógenos y reducir la presencia de microorganismos no patógenos hasta niveles que no puedan alterar la calidad y vida comercial de los productos. 

            .row(numero="4" titulo="")
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
              .col-md-8.mb-4.mb-md-0
                p.text-small La desinfección puede realizarse por métodos físicos, mediante temperaturas altas, desecación o irradiación o por métodos químicos, aplicando productos desinfectantes.
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Áreas de la clasificadora, máquinas y equipos

    p Las áreas estipuladas de una unidad de clasificadora de huevo están diseñadas para asegurar el bienestar de los operarios y de la labor que se realiza allí, con el objetivo de mantener las propiedades organolépticas del producto. Para no generar una contaminación cruzada de los procesos se describe a continuación su orden:
    ol.lista-ol.ps-md-4
      li 
        span.text-bold a.
        | Zona de recepción o descargue del producto.
      li 
        span.text-bold b.
        | Bodega de recibo e identificación del producto almacenado. 
      li  
        span.text-bold c.
        | Bodega de bandejas.
      li  
        span.text-bold d.
        | Área de equipo de clasificadora (transportador, ovos copio, zona de desechos, bandas clasificadoras, bandas de empaque).
      li  
        span.text-bold e.
        | Colecta de desechos (huevos rotos, picados) claras y yemas - cáscaras.
      li  
        span.text-bold f.
        | Bodega de almacenamiento huevo clasificado, refrigeraciones claras - yemas y despacho.
      li  
        span.text-bold g.
        | Cargue.

    p.mb-5 En la siguiente figura 1 se puede apreciar su distribución junto con una descripción de cada sección: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Plano de disposición de un área de clasificación de huevo de gallina</em>
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-6.svg', alt='En la figura 1 se aprecia el plano de disposición de un área de clasificación del huevo de gallina')

        .tarjeta.color-acento-botones1.p-3(x="32%" y="2.5%" numero="1")
          .h5.mb-2.text-center Descargue
          p Área donde se recibe el huevo recogido del galpón o transportado desde la granja.

        .tarjeta.color-acento-botones1.p-3(x="16%" y="2.5%" numero="2")
          .h5.mb-2.text-center Bodega de recibo e identificación del producto almacenado
          p Área donde se almacena el huevo recibido e identificando la granja, galpón, fecha de postura, número de lote de los animales.

        .tarjeta.color-acento-botones1.p-3(x="5%" y="18%" numero="3")
          .h5.mb-2.text-center Zona de recepción o descargue del producto
          p En esta zona se almacenan las bandejas que son utilizadas en el proceso de clasificación.

        .tarjeta.color-acento-botones1.p-3(x="25%" y="25%" numero="4")
          .h5.mb-2.text-center Área de equipo de clasificadora
          p Es la zona donde se encuentran la máquina encargada de clasificar bajo la inspección de operarios.

        .tarjeta.color-acento-botones1.p-3(x="43%" y="79.5%" numero="5")
          .h5.mb-2.text-center Transportador
          p Mecanismo de rodillos que transporta el huevo por toda la máquina clasificadora hasta las bandas de selección.

        .tarjeta.color-acento-botones1.p-3(x="50.5%" y="79.5%" numero="6")
          .h5.mb-2.text-center Ovoscopio
          p Equipo utilizado para observar el interior del huevo mediante el uso de la luz, para determinar que no haya presencia de sangre, fisuras en la cáscara.

        .tarjeta.color-acento-botones1.p-3(x="68%" y="91%" numero="7")
          .h5.mb-2.text-center Zona de desechos
          p Lugar donde se dispone el huevo no viable (roto o picado) separando cáscara de la clara y la yema. Posterior a ello se refrigera la yema y clara para enviar material a proceso de liofilización.

        .tarjeta.color-acento-botones1.p-3(x="66.5%" y="9%" numero="8")
          .h5.mb-2.text-center Bandas clasificadoras
          p Mecanismo que pesa el huevo y lo clasifica para dar sus categorías de C, B, A, AA, AAA, 4A o Jumbo. En este caso existen dos tipos de transportador: industriales y automatizados. En las automatizadas, el transportador de esta clase se encarga de llevar los huevos a las cucharas o al pesaje interno de la clasificadora para determinar el tipo de huevo según su peso para luego trasladarlo a la banda correspondiente y el operario llevarlo a bandeja o al empaque.

        .tarjeta.color-acento-botones1.p-3(x="53%" y="9%" numero="9")
          .h5.mb-2.text-center Banda de empaque
          p Esta banda es la encargada de llevar el huevo clasificado para el procedimiento de empaque y embalaje. Adicional se marca el huevo o la bandeja con los datos correspondiente de la postura.

        .tarjeta.color-acento-botones1.p-3(x="85%" y="1%" numero="10")
          .h5.mb-2.text-center Bodega de almacenamiento de huevo clasificado, refrigeración yemas-claras y despacho
          p Es la zona de la unidad de clasificación de producto donde se encuentra listo el huevo a comercializar en sus respectivas bandejas, colocadas en estanterías o estibas en torres de bandejas dependiendo la calidad de la cáscara e identificada por fecha de postura y selección para una correcta rotación. Se encuentra punto de refrigeración donde se mide el PH de la yema y la clara para poder enviar a proceso de liofilización.

        .tarjeta.color-acento-botones1.p-3(x="100%" y="97%" numero="11")
          .h5.mb-2.text-center Cargue
          p Zona dispuesta para embarcar los vehículos encargados de distribución y comercialización del huevo.

    p.mb-5 En las siguientes imágenes se muestran algunas de las secciones más importantes del área de clasificación del huevo (Ver figuras 2, 3, 4 y 5):

    .row.justify-content-center 
      .col-12.col-lg-10.col-md-11
        .row.mb-5
          .col-12.col-md-6.mb-5
            .titulo-sexto.color-primario
              p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Ovoscopio Industrial</i>
            img.mb-3(src='@/assets/curso/temas/tema2/img-01.png' alt="En la figura 2 se muestra un ovoscopio industrial automático.")
            figcaption Nota. Ovoscopio, modelo: 202A. Capacidad: 10000 huevos/hora. Tomada de ZENYER. (s.f.)
          .col-12.col-md-6
            .titulo-sexto.color-primario
              p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Banda clasificadora manual de huevos </i>
            img.mb-3(src='@/assets/curso/temas/tema2/img-02.png' alt="En la figura 3 se muestra un banda clasificadora de huevos.")
            figcaption Nota. Banda clasificadora manual #[em moba Type] 88 para capacidad de 4500 huevos por hora. JM. Alcantara. Tomada de PROultry. (s.f.)
        .row.mb-5
          .col-12.col-md-6.mb-5
            .titulo-sexto.color-primario
              p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Máquina seleccionadora y clasificadora de huevos automática</i>
            img(src='@/assets/curso/temas/tema2/img-03-2.png' alt="En la figura 4 se muestra una máquina seleccionadora y clasificadora de huevos automática.")
            figcaption Nota. Tomada de Hightop Avicultura.
            //- Nota. Banda clasificatoria de huevos para capacidad de 3500 a 4500 huevos por hora. Tomada de AgroLibre. (s.f.)
          .col-12.col-md-6
            .titulo-sexto.color-primario
              p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Banda clasificadora manual de huevos</i>
            img.mb-3(src='@/assets/curso/temas/tema2/img-04.png' alt="En la imagen 5 se muestra una banda manual de clasificación de huevos.")
            figcaption Nota. Banda clasificadora manual #[em moba Type] 68 para capacidad de 3000 huevos por hora. JM. Alcantara. Tomada de PROultry. (s.f.)

    p.mb-5 Para ampliar la información, se invita a ver el video <strong>Clasificadora de Huevos Yemita,</strong> que se encuentra en el material complementario, en el cual se puede apreciar el funcionamiento de una máquina clasificadora de huevo.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Desinfectantes y dosificación

    p.mb-5 Los desinfectantes son una variedad de sustancias químicas o de origen natural encargadas de eliminar en gran parte microorganismos (virus, bacterias, hongos) de superficie y ambientales que pueden afectar la inocuidad del producto que se está seleccionando. Los desinfectantes deben cumplir con unas propiedades que determinan su efectividad letal y que permitan elegir el principio activo adecuado para su uso. Estos son, ver figura 6: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 6.
        span <em>Principales propiedades de los desinfectantes</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-8.svg" data-aos="fade-left" alt="En la figura 6 se muestra las características del desinfectante.")

    p.mb-5 En el siguiente documento se conocerán las principales características de los desinfectantes y sustancias activas biocidas del proyecto <em>Food for Life-Spain.</em> 

    .row
      .col-xl-6.mx-auto.mb-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1_Principales_caracteristicas_de_los_desinfectantes_y_sustancias_activas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Principales características de los desinfectantes y sustancias activas biocidas del proyecto Food for Life-Spain.

    p Como complemento a lo anterior, es importante entender que la dosificación (graduación) de los desinfectantes debe ser precisa para su dilución, y pueda cumplir con el objetivo de eliminar microorganismos y no genere resistencia por no seguir las indicaciones del inserto o etiqueta del producto, esto depende de la concentración de la sustancia que recomienden los fabricantes. 
    p.mb-5 Como regla para utilizar los desinfectantes hay que disponer de las herramientas adecuadas para realizar el trabajo de manera adecuada, ya que de no ser así la efectividad de estos productos se verá limitada. Además, en el peor de los casos, los gérmenes se pueden fortalecer y volverse resistentes a los desinfectantes. Por esta razón, se debe ser cauto y cuidadoso. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-9.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Existen desinfectantes que están diseñados específicamente para luchar contra las bacterias y tienen un efecto limitado contra los virus (viricida limitado) y otros que luchan contra una gran variedad de virus (viricida) y débil para las bacterias; por tanto, hay que conocer los microorganismos a los que se está expuesto en la industria avícola en el momento de la selección del huevo comercial y así elegir el desinfectante ideal para la labor y poder cumplir las reglas de uso. 

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Alistamiento y planeación de labores de la clasificadora

    p Las actividades de limpieza y desinfección a ejecutar en las áreas de la clasificadora deben ser programadas generalmente por semana para ser ejecutadas a diario, realizando una distribución de los operarios a un nivel rotativo que permita conocer los procedimientos de la labor en cada etapa de los espacios físicos como de los equipos de la clasificadora. 
    p Esta labor de limpieza y desinfección diaria se realiza de la siguiente manera:

    .col-sm.mb-5.mb-sm-0
      ol.lista-ol.ms-md-3
        li 
          span.text-bold a) 
          | Bodega de almacenamiento de huevo seleccionado.
        li 
          span.text-bold b) 
          | Pisos y equipo de bandas de empaque y embalaje.
        li 
          span.text-bold c) 
          | Pisos y bandas de selección.
        li 
          span.text-bold d) 
          | Pisos y ovoscopio.
        li 
          span.text-bold e) 
          | Pisos y transportador.
        li 
          span.text-bold f) 
          | Bodega de recepción de huevo y descargue.

    p.mb-5 Lo anterior, con el fin de lograr que toda la limpieza y desinfección vaya desde una zona limpia y controlada hacia una zona sucia y de recibo para que no se quede en la instalación la contaminación. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-10.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las herramientas más utilizadas son mangueras para el agua, baldes, escobas, traperos, limpia telarañas, esponjas, recogedores y recipientes para la basura. 
        p.mb-0 De igual manera, se debe manejar un cronograma fácil de entender, para que ningún área se quede sin el aseo correspondiente. A continuación, se presenta un ejemplo de formato (ver tabla 1) para llevar el cronograma de limpieza y desinfección de las áreas de clasificación: 

    .col-sm.mb-5.mb-sm-0
      ol.lista-ol.mb-5.ms-md-3
        li 
          span.text-bold A. 
          | Inicialmente, se coloca el número de la semana, mes y año correspondiente.
        li 
          span.text-bold B. 
          | Posteriormente, en la casilla de operario se escribe el nombre del operario encargado de la limpieza y desinfección de un área en particular a lo largo de la semana. 
        li 
          span.text-bold C. 
          | Se sabrá cuál es el área seleccionada con base a la convención de color de estas. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Cronograma de limpieza y desinfección de áreas de clasificación</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-11.svg" data-aos="fade-left")
    
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Elementos de seguridad en el trabajo

    p.mb-5 Para la labor de limpieza y desinfección se debe cumplir con unos requisitos de seguridad en el manejo de los equipos, utensilios e insumos ya que son labores repetitivas a diario que pueden conllevar a una enfermedad o accidente laboral. Dentro de la industria avícola bajo normativa de Ministerio de Protección y Ministerio del Trabajo, adicional de resoluciones ICA y FENAVI, incurren en la protección del trabajador a partir de la conservación del producto inocuo. Por tanto, se deben tener en cuenta tres factores dentro de la clasificadora para determinar los diferentes elementos que conserven la seguridad del empleado como del producto, ver figura 7:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 7.
        span <em>Medidas de seguridad en el trabajo</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-12.svg" data-aos="fade-left" alt="En la figura 7 se muestran las medidas de seguridad en el trabajo de clasificación.")

    p.mb-5 A continuación, se presentan los aspectos necesarios que debe tener el trabajador para realizar labores de limpieza y desinfección en el área de clasificación del huevo.

    .tarjeta.tarjeta.color-primario1.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Exámenes médicos
            p El trabajador o manipulador del huevo, antes de ser vinculado a su labor debe pasar por exámenes médicos, el cual se repetirá como mínimo cada año o cuando este requiera, por presentar periodos de incapacidad para prevenir secuelas y una contaminación del producto o del resto de compañeros del área.

          .col-md-6.px-3
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Verificar afecciones en la piel
            p Se debe verificar periódicamente a los operarios de la clasificadora, si presentan afecciones en la piel a causa de la manipulación de desinfectantes, detergentes u otros productos químicos que afecten la salud; revisando especialmente lesiones en las manos, brazos y la cara con el fin de reubicarlos e investigar las causas para evitar contaminación del huevo.

          .col-md-6.px-3
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Disposición de un botiquín y brigadistas
            p Se debe contar en el área de clasificadora con un botiquín de primeros auxilios, para dar respuesta a una emergencia y un grupo de brigadistas capacitados que respondan a una necesidad de traslado de los lesionados.

          .col-md-6.px-3
            figure
              img(src='@/assets/curso/temas/tema1/img-15.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Notificación de enfermedades
            p El operario de una clasificadora que llegue a trabajar y presente enfermedad gastrointestinal, respiratoria o heridas, tiene la obligación de informar a su jefe inmediato de su condición para evitar que trabaje y haya la posibilidad de contaminar el huevo.

          .col-md-6.px-3
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Señalización
            p Es necesario el manejo de señalización o avisos, que indique al personal el cumplimiento de las diferentes prácticas de salubridad antes, durante, y después del manejo del producto.

          .col-md-6.px-3
            figure
              img(src='@/assets/curso/temas/tema1/img-17.png', alt='')

    p.mb-5 El grupo de operarios de la clasificadora deben cumplir con las siguientes prácticas y medidas de protección, ver figura 8:      
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 8.
          span <em>Prácticas y medidas de protección</em>
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-lg
              p.my-5(style="position:relative") <strong>Limpieza e higiene personal</strong>

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-18.svg', alt='').img125
          
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-19.svg', alt='').img125
            .col-lg
              p.my-3.parrafo_1(style="position:relative") <strong>Utilizar la dotación correspondiente al área y en su mayoría de color blanco</strong> 
              ul.lista-ul.mb-3.parrafo_1.ms-md-3
                li
                  i.lista-ul__vineta
                  | Cofia o gorro
                li 
                  i.lista-ul__vineta
                  | Tapabocas 
                li  
                  i.lista-ul__vineta
                  | Traje quirúrgico
                li  
                  i.lista-ul__vineta
                  | Botas
                li  
                  i.lista-ul__vineta
                  | Delantal plástico
                li  
                  i.lista-ul__vineta
                  | Guantes de nitrilo de seguridad
                li  
                  i.lista-ul__vineta
                  | Gafas industriales (si se requiere para labores de limpieza)
          .row
            .col-lg
              p.my-5(style="position:relative") Lavarse las manos con agua y jabón con frecuencia en el proceso, para luego desinfectarlas y minimizar el riesgo de contaminación de la zona de trabajo y del producto.
   
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-20.svg', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-21.svg', alt='').img125
            .col-lg
              p.my-5(style="position:relative") El personal de clasificadora debe estar afeitado, con uñas cortas y aseadas.

          .row
            .col-lg
              p.my-5(style="position:relative") No se puede utilizar en el área joyas o maquillaje.

            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-22.svg', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img-23.svg', alt='').img125
            .col-lg
              p.my-5(style="position:relative") En las instalaciones de la clasificadora se debe contar con espacios exclusivos para el consumo de alimentos y bebidas, ya que en área de clasificación no se debe consumir alimento debido a que se puede generar una contaminación cruzada.

    p Para otros aspectos sobre la disposición de elementos de seguridad en la operación de limpieza y desinfección en el área de clasificación del huevo, se invita a ver el enlace <strong>Equipos de protección personal básicos para la industria alimentaria,</strong> que se encuentra en el material complementario.

    








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
