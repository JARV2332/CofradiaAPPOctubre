import { MysterySet, CommunityDocument, GalleryPhoto, PrayerIntention, Announcement, CofradeActivity } from '../types';

export const OFFICIAL_IMAGES = {
  crestColor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfNfl3cX7i5_ZYRq2H4GI_7WOKoWWKkRnRmozgYMAnqPm4GOjCv5_jPbVBOzsDU3W7wPPUAON_lxKZ0VP-4P0vv6ReaXZpYIv0AWskryjQPYaQv5FthMqLJDsqKQJKMznkCY7-REthVzc32BYwtFS21LWzsv3I-Lt5-RGyQfUJ0oL6w6fPU1uCX0-CU0fBeTQsUPxxL-cC0rhhHb6b9Z0IEIm7PiZGUmDoHaG0-oOmjUFlNyHv7cBXjR_RHdwV_hIHOIc',
  crestDetailed: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvqZy4I7TPS0Ad_sKYyf3YrvBgH3Thg6deW43WT9dp2AXAkIUv-ez__VYpd6S_FJtq_a9enIKzYU_cJFiY_4_g5RHngG_8zc_j0M5Q_9ZPsGppzwesmPB3ISWWsjPB46wtR7ZEsj8UcnfZA6Um7FjfPJwgLBI8bFcP4vXnPBPzn17SQyfSfNow99lVWCpOZOqE_yb8xK9x4kE3HokptjW4qrnltK3SRDsXY2PBP40qMkAsZLZt8r6mpgg2_om_TllesGo',
  crestSmall: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxtTpQSj1ki4BXrPE1GwzCeM-dxlJYF1phPnn0ltazDlJZB3Jb8LPek7UsmDiIVJSKbKXUebuXAzF3bDEMQ9iXylol4UCSjvibZkboVNvjLR2IfX60sdvFDKlHP0NYjr86On8B0NlVcEFbHygc5M816v6NuqZ_s_5wypnVWajLU2bTHha-6MB0sM0UvHJzD8DytRRx2xFrDfxVwlr5ykboIxI4ELeEYzTBy6pGqaI6nnf1ALsN0SwA77HPLt61Bppa0vc',
  crestNav: 'https://lh3.googleusercontent.com/aida/AEtjO1UquD6ForUXTJDtiswsoZQ7gmbRQEsih_z0vAXAOyrN_asr6NcDUZWlAOlCaWbM-AXQC535mmTyzW-zsIh9FpyUrjQPLoC1_8m3ys5tmZUBFsKYcFaQPQN3GFWAhcKOQldv4RIW6f42TDIxgimj8B5XGJn41pNwjaV2IaWcrgqfPyOFQ7xW-2ETv1HRAY_UzdJTC63ryjst7SjFzucKbwK82bEJkEcvOZDG3KxOkF2MaPhRitGz7j_SqrP2',
  altarMain: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiDRifQQD0-cWjKU3WEXDrEflSr2NZ3sJbX0hP7JiCDH7K73SJ9Mh_d-f2-e4ePiRKmdcyNbkQLpnI9wdhtcUigLvGxvQCKHGD4AaykgeSozVNqQU9A2Nf5Z-ZvrYZiFpL8Fzu1SIcthbBGqf9mCpDLKeAzaCM6R7R1DLsvzC7drwOCMNUHUUPVwQZF9Zh9kzEqTQUZx-vHj1swE3X9AdvOwqNk-Rwwliu5MfcbQEvmGicuqV6Tm_sFg',
  candles: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06xkMvWXpHThlVA66c3hgf7GLEc2Yju2xAhCvjSQk2YhnFuzLcx5oP2GAheE-kuOM_iSuYVH38OGMGaOAiagZM5iJ6w1AEUvh9CYa2DDbCSUT3E12CNdkuC8Mv1rxhsS4UqjrXkSlYvd4OnxaObo8x_WFEbjy9O7M7yerAzTvb2YiLkijI--YPOUlWLd22eXBZMQXW2pLJV-urPGX1HlMot1ga1mnVTumm1dFXdLhEKrrm_cQVql8FQ',
  cathedralNave: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAStLGTA8DD3JSQSCo0C8R6x-ScW1c_SbTwwsuacle-EphYxM5u6Vcqf_hjIlhs81B3tDuSjRtFwTUJGBWvWb-K5yJbNyqDv9Lq7gFYAzu6uwvYXVM7LnqiX1xFlQ5BnuHy8kBPar9vRRxiGfu_uxPKWmMGQ3s8z6Q5iIAfhTCuG7LFyFmL08kGab4ZPKXPcCoA78D_lv2GC3k2RZ-LtYHV4NjgIj2RenXyOXEehLollKsfQ-X8jfIQGQ',
  mysteryPainting: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJTzWD_5eXqR87VVuBkiQqX3LRAf2t01h_pSWfY6YrHtLX8a0uR008MJH_LELjUHCxnqU1H93YIOpRh0dRghByOn0n_Lt5NQwWkzfHOWn7pIzQtEEj4KgfauFo_JaXGqWZsaLxbEWjP_DtyZUsTvMKxSLveVo4svGFgT2ZpHoRJLK6F6tLYhw8fFbT8y5Lp5d9US8nas9w5-zwyz39XcojIMpkgyzcyvWpgZfF77T0cFZOOTg4dKPTdQ',
  templeVideoBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa8oANOA7rYnQNl_jqP2YHjPcZEgD3gPhhilg7APSNGl3uC6qENUYJ6iFQuKDIBm9AVECPlNOTfLT6tqL2-y-308Y7Xtp2uT0k87mdUPa7Iy_yldG69QX9ST07DtIqBTp4hCsydOeEqDbhoUthTJhwaHFr5FPMvHtZhlbpPJs04dLFaPQna1zZWTMYlZ7VewQQ-HBFl1pmWy0d2aq9ijuwUowqZ6Z9tdliaWlAv9yEuUJifs4ydRv4Gw',
  signLanguageInterpreter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9GEWD5CiwTWQ5buHiBbHIfKvMRjsIuzB5l7k0BfT_237Xo9ISKsBvBoqu35RuAc0W7w7YGGxfnuBSeHJ5sTkx7_khdCrPjwSB9ZtNGtQO1H1fjT7Knoap-sJkVULtUGw3KZA7zM4B83_8m-nC8DbOhdr_jgQh0rjE4hrQg-c0gckQI4S-p-h8_sG5UDXm7V_qs6jjqSH_Y71iCWXXdef2VxpYW0Y_GrwoWBepQsBzgtn-ELPt4K0dqQ',
};

export const MYSTERY_SETS: Record<string, MysterySet> = {
  gozosos: {
    type: 'gozosos',
    name: 'Misterios Gozosos',
    days: 'Lunes y Sábado',
    image: OFFICIAL_IMAGES.mysteryPainting,
    color: '#001b49',
    mysteries: [
      {
        id: 1,
        orderText: 'Primer Misterio Gozoso',
        title: 'La Anunciación del Ángel a María',
        scripture: 'Lc 1, 26-27',
        verse: '"Al sexto mes fue enviado por Dios el ángel Gabriel a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la casa de David; el nombre de la virgen era María."',
        reflection: 'Meditamos la humildad de la Santísima Virgen María al aceptar con amor ser la Madre del Salvador: "He aquí la esclava del Señor, hágase en mí según tu palabra".',
        prayer: 'Padre Nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo...',
        durationSeconds: 174,
      },
      {
        id: 2,
        orderText: 'Segundo Misterio Gozoso',
        title: 'La Visitación de Nuestra Señora a su prima Santa Isabel',
        scripture: 'Lc 1, 39-42',
        verse: '"En aquellos días, se levantó María y se fue con prontitud a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel."',
        reflection: 'La caridad fraterna de María que lleva a Jesús en su seno para bendecir el hogar de su pariente Isabel y al futuro Juan el Bautista.',
        prayer: 'Dios te salve, María, llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús...',
        durationSeconds: 160,
      },
      {
        id: 3,
        orderText: 'Tercer Misterio Gozoso',
        title: 'El Nacimiento del Hijo de Dios en Belén',
        scripture: 'Lc 2, 6-7',
        verse: '"Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre."',
        reflection: 'El misterio del desprendimiento material y la pobreza sagrada en que el Rey de reyes se manifiesta al mundo.',
        prayer: 'Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
        durationSeconds: 185,
      },
      {
        id: 4,
        orderText: 'Cuarto Misterio Gozoso',
        title: 'La Presentación del Niño Jesús en el Templo',
        scripture: 'Lc 2, 22-24',
        verse: '"Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor."',
        reflection: 'La obediencia a la Ley y la profecía de Simeón a la Virgen Madre: "Y a ti misma una espada te traspasará el alma".',
        prayer: 'Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
        durationSeconds: 165,
      },
      {
        id: 5,
        orderText: 'Quinto Misterio Gozoso',
        title: 'El Niño Jesús perdido y hallado en el Templo',
        scripture: 'Lc 2, 46-47',
        verse: '"Al cabo de tres días, lo encontraron en el templo sentado en medio de los maestros, escuchándoles y haciéndoles preguntas."',
        reflection: 'La búsqueda incansable de Jesús en nuestras vidas y el gozo de encontrarlo en las cosas del Padre Celestial.',
        prayer: 'Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas...',
        durationSeconds: 190,
      },
    ],
  },
  luminosos: {
    type: 'luminosos',
    name: 'Misterios Luminosos',
    days: 'Jueves',
    image: OFFICIAL_IMAGES.cathedralNave,
    color: '#7e5700',
    mysteries: [
      {
        id: 1,
        orderText: 'Primer Misterio Luminoso',
        title: 'El Bautismo de Jesús en el Jordán',
        scripture: 'Mt 3, 16-17',
        verse: '"Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de Dios que bajaba en forma de paloma y venía sobre él."',
        reflection: 'La manifestación de la Santísima Trinidad y el inicio de la vida pública de Nuestro Señor.',
        prayer: 'Padre Nuestro...',
        durationSeconds: 170,
      },
      {
        id: 2,
        orderText: 'Segundo Misterio Luminoso',
        title: 'La Autorrevelación en las Bodas de Caná',
        scripture: 'Jn 2, 1-11',
        verse: '"Dice su madre a los sirvientes: Haced lo que él os diga."',
        reflection: 'La intercesión materna de la Virgen y el primer milagro que transforma el agua en vino de salvación.',
        prayer: 'Dios te salve, María...',
        durationSeconds: 165,
      },
      {
        id: 3,
        orderText: 'Tercer Misterio Luminoso',
        title: 'El Anuncio del Reino de Dios y la llamada a la conversión',
        scripture: 'Mc 1, 14-15',
        verse: '"El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio."',
        reflection: 'El llamado perenne a la conversión de corazón y a la confianza en el perdón divino.',
        prayer: 'Gloria al Padre...',
        durationSeconds: 175,
      },
      {
        id: 4,
        orderText: 'Cuarto Misterio Luminoso',
        title: 'La Transfiguración en el Monte Tabor',
        scripture: 'Lc 9, 28-36',
        verse: '"Y se transfiguró delante de ellos, y sus vestidos se volvieron resplandecientes."',
        reflection: 'La visión de la gloria divina que fortalece a los discípulos para afrontar la prueba de la cruz.',
        prayer: 'Santa María, Madre de Dios...',
        durationSeconds: 180,
      },
      {
        id: 5,
        orderText: 'Quinto Misterio Luminoso',
        title: 'La Institución de la Santísima Eucaristía',
        scripture: 'Mt 26, 26-28',
        verse: '"Tomad, comed, este es mi cuerpo. Bebed de ella todos; porque esta es mi sangre de la Alianza."',
        reflection: 'El regalo infinito de su Cuerpo y Sangre como alimento de vida eterna para la Iglesia.',
        prayer: 'Oh Jesús mío...',
        durationSeconds: 195,
      },
    ],
  },
  dolorosos: {
    type: 'dolorosos',
    name: 'Misterios Dolorosos',
    days: 'Martes y Viernes',
    image: OFFICIAL_IMAGES.candles,
    color: '#450003',
    mysteries: [
      {
        id: 1,
        orderText: 'Primer Misterio Doloroso',
        title: 'La Oración de Jesús en el Huerto de Getsemaní',
        scripture: 'Mt 26, 36-39',
        verse: '"Padre mío, si es posible, que pase de mí este cáliz; pero no sea como yo quiero, sino como tú."',
        reflection: 'La agonía del Salvador asumiendo los pecados de toda la humanidad en total sumisión al Padre.',
        prayer: 'Padre Nuestro...',
        durationSeconds: 180,
      },
      {
        id: 2,
        orderText: 'Segundo Misterio Doloroso',
        title: 'La Flagelación del Señor atado a la columna',
        scripture: 'Jn 19, 1',
        verse: '"Pilato tomó entonces a Jesús y mandó azotarle."',
        reflection: 'La mortificación y los sufrimientos físicos ofrecidos por la purificación de nuestras ofensas.',
        prayer: 'Dios te salve, María...',
        durationSeconds: 165,
      },
      {
        id: 3,
        orderText: 'Tercer Misterio Doloroso',
        title: 'La Coronación de Espinas',
        scripture: 'Mt 27, 27-29',
        verse: '"Trenzaron una corona de espinas y se la pusieron sobre su cabeza, y una caña en su mano derecha."',
        reflection: 'Las burlas y ultrajes soportados con infinita mansedumbre por el Rey de la Gloria.',
        prayer: 'Gloria al Padre...',
        durationSeconds: 170,
      },
      {
        id: 4,
        orderText: 'Cuarto Misterio Doloroso',
        title: 'Jesús con la Cruz a cuestas camino al Calvario',
        scripture: 'Jn 19, 17',
        verse: '"Y cargando con su propia cruz, salió hacia el lugar llamado Calvario."',
        reflection: 'La paciencia infinita al abrazar el madero de la Redención y el consuelo de María en la calle de la Amargura.',
        prayer: 'Santa María, Madre de Dios...',
        durationSeconds: 185,
      },
      {
        id: 5,
        orderText: 'Quinto Misterio Doloroso',
        title: 'La Crucifixión y Muerte de Nuestro Señor',
        scripture: 'Jn 19, 25-30',
        verse: '"Junto a la cruz de Jesús estaban su madre y el discípulo a quien él amaba... Todo está cumplido."',
        reflection: 'El sacrificio supremo de amor y la entrega de María como Madre de toda la humanidad.',
        prayer: 'Oh Jesús mío...',
        durationSeconds: 210,
      },
    ],
  },
  gloriosos: {
    type: 'gloriosos',
    name: 'Misterios Gloriosos',
    days: 'Miércoles y Domingo',
    image: OFFICIAL_IMAGES.altarMain,
    color: '#7e5700',
    mysteries: [
      {
        id: 1,
        orderText: 'Primer Misterio Glorioso',
        title: 'La Triunfante Resurrección de Jesús',
        scripture: 'Mt 28, 5-6',
        verse: '"No está aquí, porque ha resucitado, tal como dijo. Venid, ved el lugar donde estaba puesto."',
        reflection: 'La victoria definitiva sobre el pecado y la muerte que abre las puertas del Cielo.',
        prayer: 'Padre Nuestro...',
        durationSeconds: 180,
      },
      {
        id: 2,
        orderText: 'Segundo Misterio Glorioso',
        title: 'La Ascensión del Señor a los Cielos',
        scripture: 'Hch 1, 9-11',
        verse: '"Fue elevado a la vista de ellos, y una nube le ocultó a sus ojos."',
        reflection: 'Jesús sentado a la derecha del Padre, intercediendo perpetuamente por nosotros.',
        prayer: 'Dios te salve, María...',
        durationSeconds: 165,
      },
      {
        id: 3,
        orderText: 'Tercer Misterio Glorioso',
        title: 'La Venida del Espíritu Santo en Pentecostés',
        scripture: 'Hch 2, 1-4',
        verse: '"Se les aparecieron unas lenguas como de fuego y quedaron todos llenos del Espíritu Santo."',
        reflection: 'La efusión divina que llena de celo apostólico a los Apóstoles reunidos en oración con María.',
        prayer: 'Gloria al Padre...',
        durationSeconds: 175,
      },
      {
        id: 4,
        orderText: 'Cuarto Misterio Glorioso',
        title: 'La Asunción de la Virgen María en cuerpo y alma al Cielo',
        scripture: 'Ct 2, 10-11',
        verse: '"¡Levántate, amada mía, hermosa mía, y ven! Porque mira, el invierno ya ha pasado."',
        reflection: 'La glorificación corporal de la Madre de Dios en la plenitud celestial.',
        prayer: 'Santa María, Madre de Dios...',
        durationSeconds: 170,
      },
      {
        id: 5,
        orderText: 'Quinto Misterio Glorioso',
        title: 'La Coronación de María como Reina de Cielos y Tierra',
        scripture: 'Ap 12, 1',
        verse: '"Una gran señal apareció en el cielo: una mujer vestida del sol, con la luna bajo sus pies y una corona de doce estrellas."',
        reflection: 'Nuestra Señora del Rosario entronizada como Abogada y Reina celestial de la Cofradía.',
        prayer: 'Dios te salve, Reina y Madre de misericordia...',
        durationSeconds: 200,
      },
    ],
  },
};

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    badge: 'Culto Solemne',
    badgeStyle: 'solemn',
    timeLabel: 'Hoy',
    title: 'Misa de la Rosa',
    description: 'Acompañemos a nuestra Madre en la tradicional Misa de la Rosa este domingo a las 10:00 AM en el Altar Mayor.',
    fullDetails: 'La tradicional Misa de la Rosa se celebrará con la bendición solemne de rosas dedicadas a Nuestra Señora del Rosario. Se invita a los cofrades a portar el distintivo oficial y medalla.',
    dateStr: 'Domingo 16 de Octubre, 10:00 hrs',
    location: 'Altar Mayor, Basílica de Santo Domingo',
  },
  {
    id: 'ann-2',
    badge: 'Informativo',
    badgeStyle: 'info',
    timeLabel: 'Ayer',
    title: 'Renovación de Cuotas',
    description: 'Recordatorio para todos los hermanos cofrades de acercarse a secretaría para la renovación anual y asignación de turnos.',
    fullDetails: 'La Secretaría de la Cofradía atenderá de martes a sábado de 09:00 a 17:00 hrs para la recepción de cuotas ordinarias y entrega del carné digital 2026-2027.',
    dateStr: 'Todo el mes de Octubre',
    location: 'Secretaría de la Cofradía (Claustro Mayor)',
  },
  {
    id: 'ann-3',
    badge: 'Convocatoria',
    badgeStyle: 'warning',
    timeLabel: 'Hace 3 días',
    title: 'Ensayo de Celadores y Cargadores',
    description: 'Convocatoria general para los miembros de las divisiones de honor para el orden de la procesión claustral.',
    fullDetails: 'Instrucciones prácticas de protocolo litúrgico y distribución de horarios para la guardia de honor ante el camarín de la Virgen.',
    dateStr: 'Viernes 21 de Octubre, 18:30 hrs',
    location: 'Nave Central de la Basílica',
  },
];

export const INITIAL_DOCUMENTS: CommunityDocument[] = [
  {
    id: 'doc-octubre',
    badge: 'Documento Oficial',
    title: 'Circular de Octubre',
    description: 'Descargue y lea la circular oficial correspondiente al mes de octubre, mes dedicado al Santo Rosario. Contiene información importante sobre nuestras próximas actividades y convocatorias.',
    date: 'Octubre 2026',
    fileSize: '1.8 MB (PDF)',
    content: `COFRADÍA DEL SANTO ROSARIO
Basílica de Nuestra Señora del Rosario, Templo de Santo Domingo
Guatemala, C.A.

CIRCULAR EXTRAORDINARIA - MES DEL SANTO ROSARIO

Estimados Hermanos en Cristo y devotos de Nuestra Santísima Madre:

Por medio de la presente, la Junta Directiva de la Cofradía del Santo Rosario les saluda fraternalmente en el amor de Dios Nuestro Señor.

1. CELEBRACIONES PRINCIPALES:
- Todos los días de Octubre: Rezo Solemne del Santo Rosario a las 05:30 hrs, 12:00 hrs y 19:00 hrs.
- Turnos de Velación Cofrade: Cada división mantendrá guardia de honor según el rol publicado en secretaría.
- Misa Mayor de la Rosa: Presidida por el Prior Provincial con procesión claustral del Santísimo Sacramento.

2. ACCESIBILIDAD LITÚRGICA (LSEG):
Reafirmamos nuestro compromiso con la inclusión. Todas las transmisiones y rezos contarán con intérprete en Lengua de Señas de Guatemala (LSEG) a través de la aplicación oficial.

3. DISPOSICIONES PARA COFRADES:
Es deber de todo cofrade activo mantener viva la devoción diaria al Santo Rosario, velar por el auxilio mutuo de los hermanos necesitados y participar con fervor en los cultos programados.

Dado en el Convento de Santo Domingo a los primeros días del mes del Santo Rosario.
Junta Directiva & Fraternidad Laical Dominica`,
  },
  {
    id: 'doc-estatutos',
    badge: 'Normativa',
    title: 'Compendio de Estatutos y Regla Cofrade',
    description: 'Normativa histórica y reglamentos vigentes para los miembros activos de la Cofradía del Santo Rosario.',
    date: 'Revisión 2026',
    fileSize: '3.4 MB (PDF)',
    content: `REGLA DE LA COFRADÍA DEL SANTO ROSARIO
Fundada en la Muy Noble y Leal Ciudad de Santiago de Guatemala.

CAPÍTULO I: De los Fines de la Cofradía
Fomentar la devoción a María Santísima bajo la advocación del Rosario, el rezo diario, las obras de misericordia y la vivencia fraterna dominicana.`,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: OFFICIAL_IMAGES.altarMain,
    title: 'Altar Mayor Dorado',
    subtitle: 'Solemnidad del Rosario',
    alt: 'Detalle del retablo mayor de Santo Domingo iluminado con cirios dorados.',
  },
  {
    id: 'photo-2',
    url: OFFICIAL_IMAGES.candles,
    title: 'Luz de Devoción',
    subtitle: 'Noche de Vigilia',
    alt: 'Velas encendidas en la capilla de la Virgen del Rosario durante la vigilia.',
  },
  {
    id: 'photo-3',
    url: OFFICIAL_IMAGES.cathedralNave,
    title: 'Nave Central de la Basílica',
    subtitle: 'Patrimonio y Espiritualidad',
    alt: 'Perspectiva arquitectónica de las bóvedas y vitrales del templo.',
  },
  {
    id: 'photo-4',
    url: OFFICIAL_IMAGES.mysteryPainting,
    title: 'Cuadro de la Anunciación',
    subtitle: 'Pinacoteca Sacra',
    alt: 'Lienzo clásico del Arcángel Gabriel y la Virgen María.',
  },
  {
    id: 'photo-5',
    url: OFFICIAL_IMAGES.templeVideoBg,
    title: 'Plegaria en el Coro',
    subtitle: 'Rezo Matutino',
    alt: 'Hermanos rezando devotamente el rosario frente a la capilla.',
  },
];

export const INITIAL_INTENTIONS: PrayerIntention[] = [
  {
    id: 'int-1',
    text: 'Por la pronta recuperación y salud de Doña María del Carmen.',
    author: 'Familia Morales C.',
    prayersCount: 42,
    hasPrayed: false,
    date: 'Hoy',
  },
  {
    id: 'int-2',
    text: 'Por las vocaciones sacerdotales, religiosas y laicales en nuestra arquidiócesis.',
    author: 'Comunidad Juvenil',
    prayersCount: 78,
    hasPrayed: true,
    date: 'Ayer',
  },
  {
    id: 'int-3',
    text: 'Por el eterno descanso del hermano cofrade José Luis Pérez.',
    author: 'Tercera División',
    prayersCount: 65,
    hasPrayed: false,
    date: '14 Oct',
  },
  {
    id: 'int-4',
    text: 'En acción de gracias por el nacimiento y bautismo de la pequeña Sofía.',
    author: 'Familia Estrada',
    prayersCount: 31,
    hasPrayed: false,
    date: '13 Oct',
  },
];

export const COFRADE_ACTIVITY: CofradeActivity = {
  id: 'act-1',
  division: 'Segunda División de Honor',
  title: 'Turno de Velación y Guardia de Honor',
  dateTime: 'Sábado, 15 de Octubre • 19:00 hrs',
  location: 'Capilla Mayor del Santísimo y Camarín de la Virgen',
  confirmed: false,
  duties: [
    'Guardia de honor durante el rezo solemne del Rosario de 19:00 hrs.',
    'Asistencia a los devotos en la entrega de intenciones y encendido de cirios.',
    'Relevo de guardia y oración comunitaria a las 21:00 hrs.',
  ],
};
