export default {
  global: {
    Name: 'Gestión de requerimientos e indicadores de gestión',
    Description:
      'La acción del servicio en la atención al cliente está demarcada por diferentes acciones del colaborador o empleado encargado de esta actividad, de allí nace la importancia de que las organizaciones realicen un óptimo proceso de formación continua que brinde las herramientas necesarias y los conocimientos pertinentes en temas como la normatividad vigente, sistemas de calidad e indicadores de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
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
        titulo: 'Normativa y requerimientos en atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación y trazabilidad de requerimientos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Notificación de recepción',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trámite a requerimientos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolo del sistema de calidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Interpretación de los KPI',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicabilidad de los KPI',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reporte de los KPI',
            hash: 't_3_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Protección de datos personales',
      referencia:
        'Escuela de Privacidad. (2020). Legislación en protección de datos en Colombia. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvAH9ppBbbE',
    },
    {
      tema: 'Protección de datos personales',
      referencia:
        'Ministerio de Industria y Comercio. (2013). Decreto 1377 de 2013. ',
      tipo: 'Documento',
      descarga: '/downloads/DECRETO_1377_2013.pdf',
    },
    {
      tema: 'Protección de datos personales',
      referencia:
        'Superintendencia de Industria y Comercio. (2021). Sobre la protección de datos personales. ',
      tipo: 'Artículo',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
  ],
  glosario: [
    {
      termino: 'Evaluación de desempeño',
      significado:
        'instrumento de medición del desempeño laboral y/o profesional de una persona, respecto a las funciones y responsabilidades a su cargo.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'ejecución constante de acciones que mejoran los procesos en una organización, minimizando al máximo el margen de error y de pérdidas.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'es aquel en el que se informa, resuelve cualquier duda, o se facilita información al cliente que lo requiere.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mora, L. A. (2004). Indicadores de gestión logísticos. FESC. ',
    },
    {
      referencia:
        'Normas-iso.com. (s. f.). ISO. Normas ISO 9001: Sistemas de gestión de la calidad.',
      link: 'https://www.normas-iso.com/iso-9001/',
    },
    {
      referencia: 'RAE. (2020). Definición de expectativa.',
      link: 'https://dle.rae.es/expectativa?m=form',
    },
    {
      referencia: 'RAE. (2020). Definición de percepción.',
      link: 'https://dle.rae.es/percepci%C3%B3n',
    },
    {
      referencia: 'RAE. (2020). Definición de política.',
      link: 'https://dle.rae.es/pol%C3%ADtico',
    },
    {
      referencia: 'Revista Zona Logística. (2017). La logística del servicio.',
      link: 'https://zonalogistica.com/la-logistica-del-servicio/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los Servicios Regional - Huila ',
        },
        {
          nombre: 'Alex García',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Carlos Ándres Díaz Pinto',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Laura Ximena Hurtado Villalba',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Mayerly Pérez Jaimes',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Pedro Nel Calao Zabala',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yuli Marcela Gómez Tarazona',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
}
