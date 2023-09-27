export default {
  global: {
    componenteFormativo: 'Selección técnica de huevos de gallina',
    descripcionCurso:
      'La selección del huevo es la actividad que permite evaluar a las granjas y compañías avícolas, los manejos y procedimientos que se ejecutan a diario para ofrecer calidad en su producción al consumidor final. Por ello, es necesario conocer las condiciones de infraestructura y disposición de equipos para llevar a cabo la actividad a partir de la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Limpieza y desinfección de áreas de clasificación de huevo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Áreas de la clasificadora, máquinas y equipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desinfectantes y dosificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Alistamiento y planeación de labores de la clasificadora',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elementos de seguridad en el trabajo',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recepción y selección del huevo comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Recolección del huevo, almacenamiento y transporte a la clasificadora',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de huevo según su tamaño y peso',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Proceso de clasificación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Nombre de bandejas para el almacenamiento del huevo según tamaño',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Empaque y embalaje',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_09_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Áreas de clasificadora, máquinas y equipos.',
      referencia:
        'Italcol. (2019). ¿Cuáles son los requisitos de infraestructura para mi granja avícola? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qAnu7mdl3Ig',
    },
    {
      tema: 'Áreas de clasificadora, máquinas y equipos.',
      referencia:
        'YAMASA Industria de Máquinas. (2021). Clasificadora de Huevos CHSL-180.000 con empacadoras C-3.0 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LsS_vYpx3dM',
    },
    {
      tema: 'Áreas de clasificadora, máquinas y equipos.',
      referencia:
        'Clasificadora de Huevos Yemita. (2015). Clasificadora de Huevos Yemita (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TH7n37Lo-nw',
    },
    {
      tema: 'Elementos de seguridad en el trabajo.',
      referencia:
        'Entorno saludable. (2018). Equipos de protección personal básicos para la industria alimentaria.',
      tipo: 'Artículo',
      link:
        'https://entornosaludable.com/15/05/2018/equipos-de-proteccion-personal-basicos-para-la-industria-alimentaria/',
    },
    {
      tema: 'Tipos de huevo según su tamaño y peso.',
      referencia: 'docplayer.es. (2011). Norma Técnica Colombiana NTC 1240.',
      tipo: 'Norma',
      link: 'https://docplayer.es/54870550-Norma-tecnica-colombiana-1240.html',
    },
    {
      tema: 'Proceso de clasificación.',
      referencia:
        'Avícola Toscana. (2020). ¡Recolección y clasificación! (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3f5VBhI8JCM',
    },
    {
      tema: 'Proceso de clasificación.',
      referencia:
        'Soriano, M. (2020). Huevos sucios: causas y soluciones. Veterinaria digital.',
      tipo: 'Artículo',
      link:
        'https://www.veterinariadigital.com/articulos/huevos-sucios-causas-y-soluciones/',
    },
    {
      tema: 'Proceso de clasificación.',
      referencia:
        'La Finca de Hoy. (2019). Requisitos para certificar una granja avícola como biosegura (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bheJVrL4Njw',
    },
  ],
  glosario: [
    {
      termino: 'BPAV',
      significado: '<span>Buenas Prácticas Avícolas.</span>',
    },
    {
      termino: 'BPM',
      significado: '<span>Buenas Prácticas de Manufactura.</span>',
    },
    {
      termino: 'Concentración',
      significado: 'cantidad de soluto o principio activo de una sustancia.',
    },
    {
      termino: 'Dosificación',
      significado:
        'es el acto y el efecto de determinar la cantidad de uso de una sustancia.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'es la garantía de que los alimentos están libre de patógenos o microorganismos.',
    },
    {
      termino: 'Lejía',
      significado: 'término que se refiere al hipoclorito.',
    },
    {
      termino: 'Microorganismo',
      significado:
        'organismo que solo se puede ver bajo el microscopio; incluyen virus, bacterias, protozoos, algas, hongos.',
    },
    {
      termino: 'Ovoscopio',
      significado:
        'equipo que permite observar el huevo internamente para evaluar su calidad.',
    },
    {
      termino: 'pH',
      significado: 'medida del grado de acidez o alcalinidad de una sustancia',
    },
    {
      termino: 'Viricida',
      significado: 'es toda sustancia capaz de acabar con un virus.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel, J. (2016). Elaboración de productos a base de huevo (Ovoproductos) TvAgro. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=efCxBP3LHGM',
    },
    {
      referencia:
        'Norma técnica colombiana NTC 1240 Industrial Alimentaria. Huevos de Gallina Frescos para Consumo.',
      link:
        'https://www.huila.gov.co/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=53613',
    },
    {
      referencia:
        'Limpieza y desinfección en la industria alimentaria ¿cuál es la diferencia?. (2018).',
      link:
        'https://higieneambiental.com/higiene-alimentaria/limpieza-y-desinfeccion-en-la-industria-alimentaria-cual-es-la-diferencia',
    },
    {
      referencia:
        'Resolución 3651 del 2014 (Instituto Colombiano Agropecuario - ICA) Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      referencia: 'Soriano. (2020). Huevos sucios: causas y soluciones',
      link:
        'https://www.veterinariadigital.com/articulos/huevos-sucios-causas-y-soluciones/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
