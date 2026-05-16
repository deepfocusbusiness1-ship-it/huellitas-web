// ============================================================
// ARCHIVO DE PRODUCTOS — Huellitas Pets Shop
// Solo editá este archivo para agregar o modificar productos.
// No necesitás tocar ningún otro archivo de diseño.
// ============================================================

export type Categoria = "perros" | "gatos" | "juguetes" | "camas" | "ropa";

export interface Producto {
  id: number;
  nombre: string;
  categoria: Categoria;
  subcategoria?: string;
  descripcion: string;
  imagen: string; // ruta relativa a /public/assets/images/
  destacado?: boolean;
}

// ── Número de WhatsApp ─────────────────────────────────────
export const WHATSAPP_NUMERO = "5493425492412";

export function whatsappProducto(nombreProducto: string): string {
  const mensaje = encodeURIComponent(
    `Hola Huellitas Pets! 🐾 Me interesa el producto: *${nombreProducto}*. ¿Me podés dar más info y el precio? Gracias!`
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

export function whatsappEncargue(detalle: string): string {
  const mensaje = encodeURIComponent(
    `Hola Huellitas Pets! 🐾 Quiero hacer un encargue de ropa personalizada: *${detalle}*. ¿Me podés dar más info y el precio? Gracias!`
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

export function whatsappGeneral(): string {
  const mensaje = encodeURIComponent(`Hola Huellitas Pets! 🐾 Quiero hacer una consulta.`);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
}

// ── Productos ──────────────────────────────────────────────
export const productos: Producto[] = [

  // ALIMENTOS — PERROS
  {
    id: 1,
    nombre: "Excellent Adultos Razas Medianas",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Alimento balanceado completo para perros adultos de razas medianas. Rico en proteínas y vitaminas esenciales.",
    imagen: "/assets/images/excellent-adulto.jpg",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Excellent Cachorros",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Fórmula especial para cachorros en etapa de crecimiento. Calcio y fósforo para huesos fuertes.",
    imagen: "/assets/images/excellent-cachorro.jpg",
  },
  {
    id: 3,
    nombre: "Agility Gold Adultos",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Nutrición premium con ingredientes naturales. Ideal para perros activos. Alta digestibilidad.",
    imagen: "/assets/images/agility-adulto.jpg",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Agility Gold Cachorros",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Desarrollo óptimo para cachorros. Con DHA para el desarrollo cerebral y visual.",
    imagen: "/assets/images/agility-cachorro.jpg",
  },
  {
    id: 5,
    nombre: "Pro Plan Adulto Pollo y Arroz",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Fórmula avanzada Purina con pollo como primer ingrediente. Sistema inmunológico fuerte.",
    imagen: "/assets/images/proplan-adulto.jpg",
    destacado: true,
  },
  {
    id: 6,
    nombre: "Pro Plan Cachorro Razas Grandes",
    categoria: "perros",
    subcategoria: "Nutrición",
    descripcion: "Diseñado para cachorros de razas grandes. Controla el crecimiento óseo saludable.",
    imagen: "/assets/images/proplan-cachorro-grande.jpg",
  },

  // ALIMENTOS — GATOS
  {
    id: 7,
    nombre: "Excellent Gatos Adultos",
    categoria: "gatos",
    subcategoria: "Nutrición",
    descripcion: "Alimento balanceado para gatos adultos. Con taurina para la salud cardíaca y visual.",
    imagen: "/assets/images/excellent-gatos.jpg",
  },
  {
    id: 8,
    nombre: "Pro Plan Gatos Castrados",
    categoria: "gatos",
    subcategoria: "Nutrición",
    descripcion: "Fórmula específica para gatos castrados. Controla el peso y cuida el tracto urinario.",
    imagen: "/assets/images/proplan-gatos.jpg",
    destacado: true,
  },

  // JUGUETES
  {
    id: 9,
    nombre: "Pelota de goma resistente",
    categoria: "juguetes",
    descripcion: "Goma natural resistente a mordidas. Para perros de todas las razas. Flotan en el agua.",
    imagen: "/assets/images/pelota-goma.jpg",
  },
  {
    id: 10,
    nombre: "Mordedor de cuerda",
    categoria: "juguetes",
    descripcion: "Cuerda trenzada multicolor. Limpia los dientes mientras juega. Ideal para jugar a tirar.",
    imagen: "/assets/images/mordedor-cuerda.jpg",
    destacado: true,
  },
  {
    id: 11,
    nombre: "Varita con plumas para gato",
    categoria: "juguetes",
    descripcion: "Varita interactiva con plumas naturales. Estimula el instinto cazador. Horas de diversión.",
    imagen: "/assets/images/varita-plumas.jpg",
  },
  {
    id: 12,
    nombre: "Pelotas con cascabel para gato",
    categoria: "juguetes",
    descripcion: "Pelotas livianas con sonido interior. Pack de 3 unidades en colores variados.",
    imagen: "/assets/images/pelota-cascabel.jpg",
  },
  {
    id: 13,
    nombre: "Kong relleable",
    categoria: "juguetes",
    descripcion: "Juguete de goma que se rellena con premios. Mantiene al perro entretenido por horas.",
    imagen: "/assets/images/kong.jpg",
  },

  // CAMAS E IGLÚES
  {
    id: 14,
    nombre: "Iglú térmico pequeño",
    categoria: "camas",
    descripcion: "Relleno térmico de alta densidad, lavable. Cubierta premium suave. Para mascotas pequeñas.",
    imagen: "/assets/images/iglu-chico.jpg",
    destacado: true,
  },
  {
    id: 15,
    nombre: "Cama redonda para gato",
    categoria: "camas",
    descripcion: "Cama tipo nido con bordes altos. El gato se siente seguro y abrigado. Relleno antialérgico.",
    imagen: "/assets/images/cama-gato.jpg",
  },
  {
    id: 16,
    nombre: "Cama rectangular grande",
    categoria: "camas",
    descripcion: "Para perros grandes. Base firme con acolchado de alta densidad. Funda removible y lavable.",
    imagen: "/assets/images/cama-grande.jpg",
  },
  {
    id: 17,
    nombre: "Iglú térmico mediano",
    categoria: "camas",
    descripcion: "Diseño exclusivo con relleno térmico premium. Cubierta lavable. Para perros medianos.",
    imagen: "/assets/images/iglu-mediano.jpg",
  },

  // ROPA
  {
    id: 18,
    nombre: "Campera polar abrigada",
    categoria: "ropa",
    descripcion: "Abrigo de polar suave para los días fríos de Santa Fe. Disponible en varios talles.",
    imagen: "/assets/images/campera-polar.jpg",
    destacado: true,
  },
  {
    id: 19,
    nombre: "Buzo con capucha",
    categoria: "ropa",
    descripcion: "Cómodo y abrigado con capucha. Apertura inferior para hembras. Varios colores disponibles.",
    imagen: "/assets/images/buzo-capucha.jpg",
  },
  {
    id: 20,
    nombre: "Impermeable para lluvia",
    categoria: "ropa",
    descripcion: "Capa liviana con capucha. Tu mascota sale al paseo sin mojarse. Cierre velcro fácil.",
    imagen: "/assets/images/impermeable.jpg",
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
