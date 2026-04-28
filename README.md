# LidIA Landing

Landing page de **LidIA**, una herramienta que automatiza el diligenciamiento de documentos legales por WhatsApp.

## Qué es LidIA

LidIA permite iniciar flujos guiados para generar documentos a partir de minutas predefinidas y datos suministrados por el usuario.

Actualmente el producto contempla 3 servicios principales:

- Derechos de petición
- Contrato por prestación de servicios
- Contratos laborales a término definido e indefinido

## Alcance del producto

LidIA es una herramienta de apoyo documental. Su función se limita al diligenciamiento automatizado de espacios dentro de minutas definidas.

No presta asesoría jurídica, no reemplaza a un abogado y no garantiza por sí sola la validez, suficiencia o idoneidad legal del documento resultante. El usuario es responsable de la información suministrada, la revisión final del contenido y su uso.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- pnpm

## Desarrollo local

Instalar dependencias:

```bash
pnpm install
```

Iniciar entorno de desarrollo:

```bash
pnpm dev
```

Otros scripts disponibles:

```bash
pnpm lint
pnpm start
```

## Estructura general

- `app/` — rutas y layout principal
- `components/` — componentes UI y secciones de la landing
- `public/` — assets estáticos
- `CONTEXT.md` — contexto funcional, alcance legal y lineamientos del proyecto

## Objetivo de este repositorio

Este repositorio contiene la landing comercial e informativa de LidIA, alineada con el alcance real del producto, su propuesta de valor y sus límites operativos.
