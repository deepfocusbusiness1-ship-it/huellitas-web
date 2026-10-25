// ============================================================
// ARCHIVO DE PRODUCTOS — Huellitas Pets Shop
// Solo editá este archivo para agregar o modificar productos.
// No necesitás tocar ningún otro archivo de diseño.
// ============================================================

export type Categoria =
  | "perros"
  | "gatos"
  | "juguetes"
  | "camas"
  | "ropa"
  | "accesorios"
  | "higiene";

export interface VarianteImagen {
  url: string;
  etiqueta?: string;
  nombre?: string;
  descripcion?: string;
}

export interface Producto {
  id: number;
  nombre: string;
  categoria: Categoria;
  subcategoria?: string;
  descripcion: string;
  imagen: string; // ruta relativa a /public/assets/images/
  imagenes?: (string | VarianteImagen)[];
  destacado?: boolean;
}

// ── Número de WhatsApp ─────────────────────────────────────
export const WHATSAPP_NUMERO = "5493425492412";

export function whatsappProducto(nombreProducto: string): string {
  const mensaje = encodeURIComponent(
    `Hola Huellitas Pets! 🐾 Me interesa el producto: *${nombreProducto}*. ¿Me podés dar más info y el precio? Gracias!`,
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

export function whatsappEncargue(detalle: string): string {
  const mensaje = encodeURIComponent(
    `Hola Huellitas Pets! 🐾 Quiero hacer un encargue de ropa personalizada: *${detalle}*. ¿Me podés dar más info y el precio? Gracias!`,
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

export function whatsappGeneral(): string {
  const mensaje = encodeURIComponent(
    `Hola Huellitas Pets! 🐾 Quiero hacer una consulta.`,
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

// ── Productos ──────────────────────────────────────────────
export const productos: Producto[] = [
  // NOVEDADES OCTUBRE (TANDA 25-10)
  {
    id: 125,
    nombre: "Catit Creamy – Pack surtido",
    categoria: "gatos",
    subcategoria: "Snacks & Premios",
    descripcion:
      "Snack cremoso para gatos, ideal para ofrecer como premio o complemento. Pack surtido con sabores pollo, salmón con camarones y atún.",
    imagen: "/assets/images/catit-creamy-pack-surtido.jpg",
  },
  {
    id: 126,
    nombre: "No Va – Repelente concentrado",
    categoria: "higiene",
    subcategoria: "Repelentes & Educación",
    descripcion:
      "Repelente para perros y gatos en formato líquido concentrado. Ayuda a mantenerlos alejados de zonas no deseadas. Rinde hasta 15 litros.",
    imagen: "/assets/images/repelente-no-va-concentrado.jpg",
  },
  {
    id: 127,
    nombre: "No Va – Repelente de interiores",
    categoria: "higiene",
    subcategoria: "Repelentes & Educación",
    descripcion:
      "Repelente en aerosol para perros y gatos, indicado para superficies y espacios interiores según las instrucciones del envase. Presentación de 350 cm³.",
    imagen: "/assets/images/repelente-no-va-interiores.jpg",
  },
  {
    id: 128,
    nombre: "Elmer No Acá – 500 ml",
    categoria: "higiene",
    subcategoria: "Repelentes & Educación",
    descripcion:
      "Solución repelente concentrada para ayudar a evitar que las mascotas se acerquen a lugares no deseados. Presentación de 500 ml.",
    imagen: "/assets/images/repelente-elmer-no-aca.jpg",
  },
  {
    id: 129,
    nombre: "Porta Limpia Lágrimas",
    categoria: "higiene",
    subcategoria: "Higiene & Cuidado",
    descripcion:
      "Producto para la limpieza de manchas de lágrimas en el pelaje de perros y gatos. Ideal para complementar su higiene habitual.",
    imagen: "/assets/images/porta-limpia-lagrimas.jpg",
  },
  {
    id: 130,
    nombre: "Master Pet – Toallitas con aloe vera",
    categoria: "higiene",
    subcategoria: "Baño & Cuidado",
    descripcion:
      "Toallitas húmedas para perros y gatos, ideales para limpiar patas y lagrimales. Fórmula con aloe vera y pH neutro. Contiene 70 unidades.",
    imagen: "/assets/images/toallitas-master-pet-aloe-vera.jpg",
  },
  {
    id: 131,
    nombre: "Cepillo masajeador diseño panda",
    categoria: "higiene",
    subcategoria: "Baño & Cuidado",
    descripcion:
      "Cepillo para el cuidado del pelaje, con puntas de masaje y un simpático diseño de panda. Práctico para incorporar a la rutina de cepillado.",
    imagen: "/assets/images/cepillo-masajeador-panda.jpg",
  },
  {
    id: 132,
    nombre: "ModaPet – Correa retráctil 3 m",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Correa extensible de 3 metros para paseos con mayor libertad de movimiento y control. Diseño compacto con mango de agarre cómodo.",
    imagen: "/assets/images/modapet-correa-retractil-3m.jpg",
  },
  {
    id: 133,
    nombre: "Comedero elevado con lunares",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Comedero con recipiente metálico y base elevada con patas. Diseño blanco con lunares de colores para acompañar la alimentación diaria.",
    imagen: "/assets/images/comedero-elevado-lunares.jpg",
  },
  {
    id: 134,
    nombre: "Comedero elevado con carita",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Comedero elevado con recipiente metálico y base decorativa con carita sonriente. Una opción práctica y original para las comidas.",
    imagen: "/assets/images/comedero-elevado-carita.jpg",
  },
  {
    id: 135,
    nombre: "Correa retráctil diseño huella 3 m",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Correa extensible de 3 metros con diseño de huella y mango ergonómico. Ideal para los paseos cotidianos con tu mascota.",
    imagen: "/assets/images/correa-retractil-huella-3m.jpg",
  },
  {
    id: 136,
    nombre: "Bebedero portátil naranja",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Botella con recipiente integrado para ofrecer agua a tu mascota durante paseos y viajes. Con sistema de apertura y correa de transporte.",
    imagen: "/assets/images/bebedero-portatil-naranja.jpg",
  },
  {
    id: 137,
    nombre: "Comedero con base de colores",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Recipiente metálico con soporte de colores, disponible en distintas tonalidades. Práctico para servir agua o alimento.",
    imagen: "/assets/images/comedero-base-colores.jpg",
  },
  {
    id: 138,
    nombre: "Bolso transportador verde",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Bolso de transporte para mascotas pequeñas, con ventanas de malla para ventilación, cierre con cremallera y correas para trasladarlo.",
    imagen: "/assets/images/bolso-transportador-verde.jpg",
  },
  {
    id: 139,
    nombre: "ModaPet – Bebedero portátil",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Bebedero para paseos y viajes, con botella y recipiente integrado. Diseño fácil de transportar, disponible en rosa y turquesa.",
    imagen: "/assets/images/modapet-bebedero-portatil.jpg",
  },
  {
    id: 140,
    nombre: "ModaPet – Comedero con diseño de huellas",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Comedero con recipiente metálico y base decorativa con huellas. Disponible en celeste y rosa para combinar con los accesorios de tu mascota.",
    imagen: "/assets/images/modapet-comedero-huellas.jpg",
  },

  // SEGUNDA TANDA DE PRODUCTOS (NOVEDADES)
  {
    id: 115,
    nombre: "Paños sanitarios Paño Pet Max Compact",
    categoria: "higiene",
    subcategoria: "Higiene & Entrenamiento",
    descripcion:
      "Paños sanitarios educativos para mascotas. Presentación de 10 unidades de 60 × 90 cm, diseñados para absorber y retener líquidos.",
    imagen: "/assets/images/pano-pet-max-compact.jpg",
  },
  {
    id: 116,
    nombre: "Shampoo Osspret Tradicional",
    categoria: "higiene",
    subcategoria: "Baño & Cuidado",
    descripcion:
      "Shampoo Osspret Tradicional para el cuidado e higiene de tu mascota. Presentación de 250 ml.",
    imagen: "/assets/images/osspret-shampoo-tradicional.jpg",
  },
  {
    id: 117,
    nombre: "Shampoo Osspret Groomers Expert Belleza",
    categoria: "higiene",
    subcategoria: "Baño & Cuidado",
    descripcion:
      "Shampoo Osspret Groomers Expert Belleza para el cuidado e higiene del pelaje. Presentación de 250 ml.",
    imagen: "/assets/images/osspret-groomers-expert-belleza.jpg",
  },
  {
    id: 118,
    nombre: "Rascador de cartón para gatos",
    categoria: "gatos",
    subcategoria: "Rascadores",
    descripcion:
      "Rascador horizontal de cartón para que tu gato pueda rascar y disfrutar de un espacio pensado para su entretenimiento cotidiano.",
    imagen: "/assets/images/rascador-carton-gatos.jpg",
  },
  {
    id: 119,
    nombre: "Ratones de juguete para gatos",
    categoria: "juguetes",
    subcategoria: "Juguetes para gatos",
    descripcion:
      "Ratones de juguete multicolor pensados para estimular el juego y la interacción de los gatos.",
    imagen: "/assets/images/ratones-juguete-gatos.jpg",
  },
  {
    id: 120,
    nombre: "Comedero con base elevada",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Comedero con recipiente y base elevada, disponible en diferentes colores. Una opción práctica para el espacio de alimentación de tu mascota.",
    imagen: "/assets/images/comedero-base-elevada.jpg",
  },
  {
    id: 121,
    nombre: "Cochecito plegable para mascotas",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Cochecito para transportar a tu mascota durante paseos y traslados, con diseño plegable para facilitar su guardado.",
    imagen: "/assets/images/cochecito-plegable-mascotas-01.jpg",
    imagenes: [
      {
        url: "/assets/images/cochecito-plegable-mascotas-01.jpg",
        etiqueta: "Vista abierta",
      },
      {
        url: "/assets/images/cochecito-plegable-mascotas-02.jpg",
        etiqueta: "Vista plegada",
      },
    ],
  },
  {
    id: 122,
    nombre: "Bolso transportador para mascotas",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Bolso transportador para acompañar a tu mascota durante paseos y traslados. Diseño estampado con correa para transporte.",
    imagen: "/assets/images/bolso-transportador-mascotas-01.jpg",
    imagenes: [
      "/assets/images/bolso-transportador-mascotas-01.jpg",
      "/assets/images/bolso-transportador-mascotas-02.jpg",
    ],
  },
  {
    id: 123,
    nombre: "Comedero plástico para mascotas",
    categoria: "accesorios",
    subcategoria: "Alimentación",
    descripcion:
      "Comedero para mascotas disponible en diferentes colores, pensado para el uso cotidiano con alimento o agua.",
    imagen: "/assets/images/comedero-plastico-mascotas.jpg",
  },
  {
    id: 124,
    nombre: "InterPets Suspensión 15 ml",
    categoria: "higiene",
    subcategoria: "Cuidado veterinario",
    descripcion:
      "Antiparasitario interno de uso veterinario para caninos y felinos en suspensión oral. Presentación de 15 ml.",
    imagen: "/assets/images/interpets-suspension-15ml.jpg",
  },
  // NOVEDADES RECIENTES (TANDA 1)
  {
    id: 111,
    nombre: "Rascador de pared para gatos",
    categoria: "gatos",
    subcategoria: "Rascadores",
    descripcion:
      "Rascador de pared pensado para que tu gato pueda rascar, estirarse y disfrutar de su espacio sin ocupar lugar en el piso. Su diseño con forma de gato también suma un detalle decorativo al ambiente.",
    imagen: "/assets/images/rascador-pared-gato.jpg",
  },
  {
    id: 112,
    nombre: "Cochecito para mascotas",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Una opción cómoda y práctica para salir de paseo con tu mascota. Su diseño permite transportarla de forma protegida y mantenerla cerca durante el recorrido.",
    imagen: "/assets/images/cochecito-mascotas-01.jpg",
    imagenes: [
      "/assets/images/cochecito-mascotas-01.jpg",
      "/assets/images/cochecito-mascotas-02.jpg",
    ],
  },
  {
    id: 113,
    nombre: "Rampa regulable con rascador",
    categoria: "accesorios",
    subcategoria: "Movilidad & Bienestar",
    descripcion:
      "Rampa regulable para mascotas con superficie que también puede utilizarse como rascador. Permite adaptar la inclinación y ofrece una superficie de apoyo durante el ascenso y descenso.",
    imagen: "/assets/images/rampa-regulable-rascador.jpg",
  },
  {
    id: 114,
    nombre: "Mochila transportadora para mascotas",
    categoria: "accesorios",
    subcategoria: "Paseo & Transporte",
    descripcion:
      "Transportadora tipo mochila para llevar a tu mascota de manera práctica durante paseos y traslados. Diseño celeste con estampado de ositos.",
    imagen: "/assets/images/mochila-transportadora-ositos.jpg",
  },
  // NOVEDADES & ACCESORIOS DE ALTA DEMANDA
  {
    id: 107,
    nombre: "Comedero Ergonómico Inclinado con Acero Inoxidable",
    categoria: "accesorios",
    subcategoria: "Ergonomía & Salud",
    descripcion:
      "Comedero elevado con postura anatómica inclinada que favorece la digestión y protege el cuello. Incluye cuenco de acero inoxidable desmontable de fácil limpieza.",
    imagen: "/assets/images/comedero-ergonomico-gato-negro.jpg",
    imagenes: [
      {
        url: "/assets/images/comedero-ergonomico-gato-negro.jpg",
        etiqueta: "Diseño Gato Negro con Manija de Colita",
        descripcion:
          "Cuenco de acero inoxidable inclinado en base de gato con colita ergonómica de agarre. Ideal para gatos y perros pequeños.",
      },
      {
        url: "/assets/images/comedero-gato-amarillo.jpg",
        etiqueta: "Diseño Gato Amarillo & Negro",
        descripcion:
          "Comederos elevados anti-reflujo con cuenco inoxidable removible. Disponibles en tonos amarillo pastel y negro brillante.",
      },
      {
        url: "/assets/images/comedero-pastel-elevado.jpg",
        etiqueta: "Modelo Pastel Elevado",
        descripcion:
          "Base elevada anatómica en tonos pastel suave (rosa y azul) para una postura cómoda durante la comida.",
      },
    ],
    destacado: true,
  },
  {
    id: 108,
    nombre: "Moisés Nido Acolchado Estampado",
    categoria: "camas",
    subcategoria: "Camas & Descanso",
    descripcion:
      "Cama tipo nido ultra mullida con bordes de contención suaves. Relleno acolchado de alta densidad y estampados exclusivos.",
    imagen: "/assets/images/moises-bulldog-frances.jpg",
    imagenes: [
      {
        url: "/assets/images/moises-bulldog-frances.jpg",
        etiqueta: "Edición Bulldog Francés (Violeta)",
        descripcion:
          "Moisés nido violeta con patrón geométrico y estampados de Bulldog Francés. Relleno suave y reconfortante.",
      },
      {
        url: "/assets/images/moises-gatos-ilustrados.jpg",
        etiqueta: "Edición Gatitos Ilustrados (Beige)",
        descripcion:
          "Moisés rectangular beige con ilustración de gatitos en tonos turquesa y naranja. Bordes acolchados.",
      },
    ],
    destacado: true,
  },
  {
    id: 109,
    nombre: "Manta Térmica Soft Fleece Patitos",
    categoria: "camas",
    subcategoria: "Accesorios de Descanso",
    descripcion:
      "Manta de abrigo ultra suave en corderito/fleece celeste con estampado de patitos amarillos. Liviana, cálida e hipoalergénica.",
    imagen: "/assets/images/manta-soft-fleece-patitos.jpg",
  },
  {
    id: 110,
    nombre: "Almohadón Decorativo 3D Gatito",
    categoria: "accesorios",
    subcategoria: "Decoración & Confort",
    descripcion:
      "Almohadón con impresión fotorrealista de alta definición en 3D. Relleno mullido de vellón siliconado, ideal para decorar o consentir a tu mascota.",
    imagen: "/assets/images/almohadon-gatito-3d.jpg",
  },
  // ALIMENTOS — PERROS
  {
    id: 106,
    nombre: "Yenú Adultos Alimento Balanceado Completo",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Alimento balanceado completo de origen nacional para perros adultos de todas las razas. Formulado para brindar nutrición equilibrada, salud digestiva y energía diaria.",
    imagen: "/assets/images/yenu-adultos.jpg",
  },
  {
    id: 105,
    nombre: "Royal Canin Health Nutrition Perros",
    categoria: "perros",
    subcategoria: "Super Premium",
    descripcion:
      "Nutrición de alta precisión adaptada a la talla, edad y necesidades específicas de tu perro.",
    imagen: "/assets/images/royal-canin-mini-adult.jpg",
    imagenes: [
      {
        url: "/assets/images/royal-canin-mini-adult.jpg",
        etiqueta: "Mini Adult 8+ (Perros Pequeños)",
        descripcion:
          "Nutrición especial para perros de talla pequeña (hasta 10 kg) a partir de los 8 años. Mantenimiento del peso ideal y soporte para preservar la vitalidad en su madurez.",
      },
      {
        url: "/assets/images/royal-canin-medium-adult.jpg",
        etiqueta: "Medium Adult (Perros Medianos)",
        descripcion:
          "Fórmula para perros adultos de razas medianas (11 a 25 kg) mayores de 12 meses. Refuerza defensas naturales, alta digestibilidad y enriquecido con Omega 3 (EPA-DHA).",
      },
      {
        url: "/assets/images/royal-canin-maxi-adult.jpg",
        etiqueta: "Maxi Adult (Perros Grandes)",
        descripcion:
          "Alimento completo para perros de talla grande (26 a 44 kg) de 15 meses a 5 años. Soporte osteoarticular para cuidar sus articulaciones y máxima digestibilidad.",
      },
    ],
    destacado: true,
  },
  {
    id: 101,
    nombre: "Livra Equilibrio Nutricional Perros",
    categoria: "perros",
    subcategoria: "Nutrición Premium",
    descripcion:
      "Alimentación consciente formulada con pollo & cordero, arroz integral, batata, arvejas y huevo. Alta digestibilidad y salud integral.",
    imagen: "/assets/images/livra-adultos-minis.webp",
    imagenes: [
      {
        url: "/assets/images/livra-adultos-minis.webp",
        etiqueta: "Adultos Minis y Pequeños (30% Proteína)",
        descripcion:
          "Nutrición balanceada 30% proteína. Pollo & cordero, arroz integral, batata, arvejas y huevo. Favorece la salud digestiva y el control de peso.",
      },
      {
        url: "/assets/images/livra-cachorros.jpeg",
        etiqueta: "Cachorros Todos los Tamaños (32% Proteína)",
        descripcion:
          "Fórmula 32% proteína ideal para el desarrollo óptimo del cachorro. Desarrollo cognitivo, salud digestiva y funcionalidad.",
      },
      {
        url: "/assets/images/livra-adultos-medianos.webp",
        etiqueta: "Adultos Medianos y Grandes (28% Proteína)",
        descripcion:
          "Alimentación consciente 28% proteína. Croquetas adaptadas para razas medianas y grandes, con ingredientes de máxima calidad.",
      },
    ],
    destacado: true,
  },
  {
    id: 1,
    nombre: "Excellent Adultos Razas Medianas",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Alimento balanceado completo para perros adultos de razas medianas. Rico en proteínas y vitaminas esenciales.",
    imagen: "/assets/images/excellent-adulto.jpg",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Excellent Cachorros",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Fórmula especial para cachorros en etapa de crecimiento. Calcio y fósforo para huesos fuertes.",
    imagen: "/assets/images/excellent-cachorro.jpg",
  },
  {
    id: 3,
    nombre: "Agility Gold Adultos",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Nutrición premium con ingredientes naturales. Ideal para perros activos. Alta digestibilidad.",
    imagen: "/assets/images/agility-adulto.jpg",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Agility Gold Cachorros",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Desarrollo óptimo para cachorros. Con DHA para el desarrollo cerebral y visual.",
    imagen: "/assets/images/agility-cachorro.jpg",
  },
  {
    id: 5,
    nombre: "Pro Plan Adulto Pollo y Arroz",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Fórmula avanzada Purina con pollo como primer ingrediente. Sistema inmunológico fuerte.",
    imagen: "/assets/images/proplan-adulto.jpg",
    destacado: true,
  },
  {
    id: 6,
    nombre: "Pro Plan Cachorro Razas Grandes",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion:
      "Diseñado para cachorros de razas grandes. Controla el crecimiento óseo saludable.",
    imagen: "/assets/images/proplan-cachorro-grande.jpg",
  },

  // ALIMENTOS — GATOS
  {
    id: 7,
    nombre: "Excellent Gatos Adultos",
    categoria: "gatos",
    subcategoria: "Nutrición",
    descripcion:
      "Alimento balanceado para gatos adultos. Con taurina para la salud cardíaca y visual.",
    imagen: "/assets/images/excellent-gatos.jpg",
  },
  {
    id: 8,
    nombre: "Pro Plan Gatos Castrados",
    categoria: "gatos",
    subcategoria: "Nutrición",
    descripcion:
      "Fórmula específica para gatos castrados. Controla el peso y cuida el tracto urinario.",
    imagen: "/assets/images/proplan-gatos.jpg",
    destacado: true,
  },

  // JUGUETES
  {
    id: 9,
    nombre: "Pelota de goma resistente",
    categoria: "juguetes",
    descripcion:
      "Goma natural resistente a mordidas. Para perros de todas las razas. Flotan en el agua.",
    imagen: "/assets/images/pelota-goma.jpg",
  },
  {
    id: 10,
    nombre: "Mordedor de cuerda",
    categoria: "juguetes",
    descripcion:
      "Cuerda trenzada multicolor. Limpia los dientes mientras juega. Ideal para jugar a tirar.",
    imagen: "/assets/images/mordedor-cuerda.jpg",
    destacado: true,
  },
  {
    id: 11,
    nombre: "Varita con plumas para gato",
    categoria: "juguetes",
    descripcion:
      "Varita interactiva con plumas naturales. Estimula el instinto cazador. Horas de diversión.",
    imagen: "/assets/images/varita-plumas.jpg",
  },
  {
    id: 12,
    nombre: "Pelotas con cascabel para gato",
    categoria: "juguetes",
    descripcion:
      "Pelotas livianas con sonido interior. Pack de 3 unidades en colores variados.",
    imagen: "/assets/images/pelota-cascabel.jpg",
  },
  {
    id: 13,
    nombre: "Kong relleable",
    categoria: "juguetes",
    descripcion:
      "Juguete de goma que se rellena con premios. Mantiene al perro entretenido por horas.",
    imagen: "/assets/images/kong.jpg",
  },
  {
    id: 21,
    nombre: "Rascador para gato",
    categoria: "juguetes",
    descripcion:
      "Rascador de sisal natural con plataforma. Cuida las garras y entretiene. Base antideslizante.",
    imagen: "/assets/images/rascador-gato.jpg",
    destacado: true,
  },

  // CAMAS E IGLÚES
  {
    id: 14,
    nombre: "Iglú térmico pequeño",
    categoria: "camas",
    descripcion:
      "Relleno térmico de alta densidad, lavable. Cubierta premium suave. Para mascotas pequeñas.",
    imagen: "/assets/images/iglu-chico.jpg",
    destacado: true,
  },
  {
    id: 15,
    nombre: "Cama redonda para gato",
    categoria: "camas",
    descripcion:
      "Cama tipo nido con bordes altos. El gato se siente seguro y abrigado. Relleno antialérgico.",
    imagen: "/assets/images/cama-gato.jpg",
  },
  {
    id: 16,
    nombre: "Cama rectangular grande",
    categoria: "camas",
    descripcion:
      "Para perros grandes. Base firme con acolchado de alta densidad. Funda removible y lavable.",
    imagen: "/assets/images/cama-grande.jpg",
  },
  {
    id: 17,
    nombre: "Iglú térmico mediano",
    categoria: "camas",
    descripcion:
      "Diseño exclusivo con relleno térmico premium. Cubierta lavable. Para perros medianos.",
    imagen: "/assets/images/iglu-mediano.jpg",
  },

  // ROPA
  {
    id: 18,
    nombre: "Campera polar abrigada",
    categoria: "ropa",
    descripcion:
      "Abrigo de polar suave para los días fríos de Santa Fe. Disponible en varios talles.",
    imagen: "/assets/images/campera-polar.jpg",
    destacado: true,
  },
  {
    id: 19,
    nombre: "Buzo con capucha",
    categoria: "ropa",
    descripcion:
      "Cómodo y abrigado con capucha. Apertura inferior para hembras. Varios colores disponibles.",
    imagen: "/assets/images/buzo-capucha.jpg",
  },
  {
    id: 20,
    nombre: "Impermeable para lluvia",
    categoria: "ropa",
    descripcion:
      "Capa liviana con capucha. Tu mascota sale al paseo sin mojarse. Cierre velcro fácil.",
    imagen: "/assets/images/impermeable.jpg",
  },
  {
    id: 22,
    nombre: "Sweater Argentina hipoalergénico",
    categoria: "ropa",
    subcategoria: "Edición especial",
    descripcion:
      "Sweater con los colores de la Selección Argentina. Tela hipoalergénica, ideal para pieles sensibles. Disponible en varios talles.",
    imagen: "/assets/images/sweater-argentina.jpg",
    destacado: true,
  },

  // ACCESORIOS
  {
    id: 23,
    nombre: "Mochila para trasladar mascotas",
    categoria: "accesorios",
    descripcion:
      "Mochila resistente con ventilación y ventana. Cómoda para el dueño y segura para la mascota. Apta para perros y gatos.",
    imagen: "/assets/images/mochila-traslado.jpg",
    destacado: true,
  },
  {
    id: 27,
    nombre: "Collar Selección Argentina",
    categoria: "accesorios",
    subcategoria: "Edición especial",
    descripcion:
      "Collar sublimado con el diseño de la bandera argentina. Sol de Mayo bordado, hebilla y argolla metálica. Disponible en varios talles.",
    imagen: "/assets/images/collar-argentina.jpg",
    destacado: true,
  },

  // HIGIENE
  {
    id: 24,
    nombre: "Shampoo para perros",
    categoria: "higiene",
    subcategoria: "Baño",
    descripcion:
      "Shampoo suave con pH balanceado para la piel del perro. Deja el pelaje brillante y sin irritaciones.",
    imagen: "/assets/images/shampoo-perros.jpg",
  },
  {
    id: 25,
    nombre: "Shampoo para gatos",
    categoria: "higiene",
    subcategoria: "Baño",
    descripcion:
      "Fórmula especial para gatos. Sin fragancia agresiva, respeta la sensibilidad felina. Fácil enjuague.",
    imagen: "/assets/images/shampoo-gatos.jpg",
  },
  {
    id: 26,
    nombre: "Piedras higiénicas para gato",
    categoria: "higiene",
    subcategoria: "Sanitario",
    descripcion:
      "Arena aglomerante de alta absorción. Neutraliza olores al instante. Bajo nivel de polvo.",
    imagen: "/assets/images/piedras-higienicas.jpg",
    destacado: true,
  },
  {
    id: 28,
    nombre: "Cortador de uñas 3 en 1 con luz LED",
    categoria: "higiene",
    subcategoria: "Cuidado",
    descripcion:
      "Alicate ergonómico con corte preciso y seguro para mantener las uñas de tu mascota saludables sin dañar su sensibilidad.",
    imagen: "/assets/images/alicate-unas-3en1.jpg",
  },
  {
    id: 29,
    nombre: "Juguete rodillo dispensador de alimento",
    categoria: "juguetes",
    descripcion:
      "Estimula la mente de tu mascota con este dispensador interactivo que libera premios mientras rueda. Diseño divertido de oso.",
    imagen: "/assets/images/juguete-dispensador-comida.jpg",
  },
  {
    id: 30,
    nombre: "Botella de agua portátil AutoDogMug",
    categoria: "accesorios",
    descripcion:
      "Práctica botella portátil de 500ml con plato integrado. Presiona para llenar el plato y tu mascota beberá cómodamente durante el paseo.",
    imagen: "/assets/images/botella-portatil-autodogmug.jpg",
    destacado: true,
  },
  {
    id: 31,
    nombre: "Buzo de corderito Bear con capucha",
    categoria: "ropa",
    descripcion:
      "Buzo extra suave y abrigado confeccionado en polar corderito premium con capucha y tierno bordado de oso. Varios talles.",
    imagen: "/assets/images/buzo-bear-corderito.jpg",
    destacado: true,
  },
  {
    id: 32,
    nombre: "Alfombra acolchada Beagle durmiendo",
    categoria: "camas",
    descripcion:
      "Original colchoneta térmica con diseño realista de un Beagle descansando. Muy suave, ideal para colocar en el suelo o sobre su cama.",
    imagen: "/assets/images/alfombra-beagle.jpg",
    destacado: true,
  },
  {
    id: 33,
    nombre: "Cama Selección Argentina N° 10",
    categoria: "camas",
    descripcion:
      "Cuna térmica súper acolchada con diseño de la Selección Argentina. Tela de alta calidad con rayas celestes y blancas, estampados 'ARG' y el número 10, bordes de jean azul oscuro y vivos amarillos.",
    imagen: "/assets/images/cama-argentina-10.jpg",
    destacado: true,
  },
  {
    id: 34,
    nombre: "Enterito Jardinero de Corderoy 'Bear'",
    categoria: "ropa",
    descripcion:
      "Enterito jardinero súper cómodo confeccionado en corderoy verde oliva con bolsillo delantero marrón y un tierno parche de oso. Ideal para lucir canchero y abrigado en días frescos.",
    imagen: "/assets/images/jardinero-corderoy.png",
  },
  {
    id: 35,
    nombre: "Bombacha Higiénica Reutilizable para Celos",
    categoria: "higiene",
    subcategoria: "Cuidado",
    descripcion:
      "Diseñada especialmente para brindar confort y protección a perritas en período de celo, incontinencia o viajes. Confeccionada con tela suave y respirable, posee bolsillo interno de malla para colocar los protectores, abertura para la cola y práctico ajuste con abrojos. Incluye 2 protectores absorbentes reutilizables.",
    imagen: "/assets/images/bombacha-higienica.png",
  },
  {
    id: 36,
    nombre: "Antiséptico Bucal DentalPlax",
    categoria: "higiene",
    subcategoria: "Cuidado",
    descripcion:
      "Solución oral antiséptica y antibacterial para caninos y felinos con xilitol al 0.5%. Ayuda a mantener un aliento fresco y previene problemas bucales.",
    imagen: "/assets/images/dentalplax-solucion-oral.png",
  },
  {
    id: 37,
    nombre: "Pasta Dental Peto-Dent",
    categoria: "higiene",
    subcategoria: "Cuidado",
    descripcion:
      "Crema dental con flúor especialmente formulada para perros y gatos. Elimina el sarro, previene el mal aliento y promueve una óptima salud dental.",
    imagen: "/assets/images/petodent-pasta-dental.png",
  },
];

// ── Opciones de encargue de ropa personalizada ─────────────
export const opcionesEncargue = [
  "Camiseta de Argentina personalizada",
  "Camiseta de club de fútbol (Colón, Unión u otro)",
  "Remera con nombre de la mascota",
  "Buzo personalizado con foto o diseño",
  "Ropa de temporada por pedido especial",
  "Otro diseño (lo describís en el mensaje)",
];
