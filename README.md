🧬 Pokedex - OTC Architecture (Bio-Lit Pattern)
Una Single Page Application (SPA) desarrollada para demostrar la implementación de una arquitectura modular escalable de nivel empresarial, utilizando Web Components nativos con Lit.

Este proyecto implementa el patrón de diseño OTC (Órgano - Tejido - Célula), una metodología utilizada en grandes corporaciones bancarias para desacoplar la lógica de negocio, la gestión de estado y la capa visual, garantizando alta mantenibilidad y testabilidad.

🔗 Ver Demo Online

🏗️ Sobre la Arquitectura OTC
Este proyecto no sigue la estructura clásica de un componente monolítico. Se basa en la Composición por Mixins para separar responsabilidades en tres capas biológicas:

🎼 1. Nivel ÓRGANO (The Orchestrator)

Es el Web Component principal. Actúa como el "Director de Orquesta".

Responsabilidad: Define el estado (properties), gestiona el ciclo de vida y conecta los tejidos.

Regla de Oro: No contiene lógica de renderizado (HTML) ni llamadas a APIs. Solo orquesta.

Archivo: pokedex-page.js

🧠 2. Nivel TEJIDO (The Tissues / Mixins)

Archivos especializados que encapsulan una responsabilidad única. El Órgano hereda de ellos mediante composición.

Tejido de Datos (-dms.js): Gestiona la comunicación asíncrona y la actualización del estado. Delega la lógica pesada a "Smart DMs".


Tejido Visual (-tpls.js): Contiene las plantillas HTML y la lógica de renderizado.

Tejido de Estilos (-styles.js): Encapsula el CSS, inyectado vía Shadow DOM.

🧬 3. Nivel CÉLULA (The Functional Units)

Las unidades mínimas de trabajo dentro de cada tejido.

Ejemplos: _fetchPokemons() (Célula de Arranque), _tplCard() (Célula Especialista visual).

📂 Estructura del Proyecto
La estructura de carpetas refleja la separación de responsabilidades:

Bash
src/
├── cells-page-mock.js       # Mock de la clase base corporativa (para entorno público)
├── pages/
│   └── pokedex/
│       ├── pokedex-page.js         # 🎼 Órgano Principal
│       ├── pokedex-page-dms.js     # 🧠 Tejido de Datos (Lógica)
│       ├── pokedex-page-tpls.js    # 🎨 Tejido Visual (HTML)
│       └── pokedex-page-styles.js  # 🖌️ Tejido de Estilos (CSS)
└── utils/
    └── pokemon-dm.js        # 🚀 Smart DM (Lógica de Negocio Pura)
💡 "Smart DM" Pattern

Para cumplir con principios SOLID, la lógica de negocio compleja (fetch, transformación de datos, mapeo de imágenes) se extrajo del componente y se aisló en pokemon-dm.js. El componente solo consume datos limpios.

🛠️ Stack Tecnológico
Core: Lit 3 (Web Components estándar).

Build Tool: Vite.

Lenguaje: JavaScript (ES6+).

CSS: CSS-in-JS (Lit css tag) con Shadow DOM activado.

🚀 Instalación y Despliegue
Este proyecto utiliza NPM y Vite.

Clonar el repositorio:

Bash
git clone https://github.com/julio-cesar-aguero/pokedex-otc-architecture.git
cd pokedex-otc-architecture
Instalar dependencias:

Bash
npm install
Correr en local:

Bash
npm run dev
Construir para producción:

Bash
npm run build
🧪 Por qué usar esta arquitectura en 2024?
Aunque para una Pokedex puede parecer "over-engineering", este patrón resuelve problemas críticos en aplicaciones Enterprise:

Conflictos de Git: Múltiples desarrolladores pueden trabajar en el mismo componente (uno en estilos, otro en lógica) sin colisionar.

Testabilidad: Permite probar la lógica de negocio (-dms.js) aislada de la capa visual (-tpls.js).

Mantenibilidad: Evita los "God Components" de 2000 líneas.

Agnosticismo: Al usar Web Components nativos, este Pokedex puede incrustarse en proyectos de React, Angular o Vue sin cambios.

Hecho por Julio Cesar Aguero como demostración de arquitectura Frontend avanzada.