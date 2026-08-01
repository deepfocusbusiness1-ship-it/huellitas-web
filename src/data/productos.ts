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
  // ALIMENTOS — PERROS
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
      },
      {
        url: "/assets/images/livra-cachorros.jpeg",
        etiqueta: "Cachorros Todos los Tamaños (32% Proteína)",
      },
      {
        url: "/assets/images/livra-adultos-medianos.webp",
        etiqueta: "Adultos Medianos y Grandes (28% Proteína)",
      },
    ],
    destacado: true,
  },
  {
    id: 102,
    nombre: "Livra Perros Adultos Minis y Pequeños",
    categoria: "perros",
    subcategoria: "Nutrición Premium",
    descripcion:
      "Nutrición balanceada 30% proteína. Pollo & cordero, arroz integral, batata, arvejas y huevo. Favorece la salud digestiva y el control de peso.",
    imagen: "/assets/images/livra-adultos-minis.webp",
  },
  {
    id: 103,
    nombre: "Livra Perros Cachorros Todos los Tamaños",
    categoria: "perros",
    subcategoria: "Nutrición Premium",
    descripcion:
      "Fórmula 32% proteína ideal para el desarrollo óptimo del cachorro. Desarrollo cognitivo, salud digestiva y funcionalidad.",
    imagen: "/assets/images/livra-cachorros.jpeg",
  },
  {
    id: 104,
    nombre: "Livra Perros Adultos Medianos y Grandes",
    categoria: "perros",
    subcategoria: "Nutrición Premium",
    descripcion:
      "Alimentación consciente 28% proteína. Croquetas adaptadas para razas medianas y grandes, con ingredientes de máxima calidad.",
    imagen: "/assets/images/livra-adultos-medianos.webp",
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
