# 💼 Litzy Castellanos · Portafolio Profesional

<div align="center">

![Portafolio Banner](https://via.placeholder.com/1200x300/0a0a0a/00d4ff?text=Litzy+Castellanos+·+Ingeniera+en+Sistemas)

**Desarrolladora Frontend · Ingeniera en Sistemas · Honduras 🇭🇳**

[![Deploy](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://litzycastellanos.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](./LICENSE)

</div>

---

## 📌 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Proyectos destacados](#-proyectos-destacados)
- [Instalación y uso](#-instalación-y-uso)
- [Despliegue en Vercel](#-despliegue-en-vercel)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

## 📖 Descripción

Portafolio web personal desarrollado **desde cero** con tecnologías nativas del navegador — sin frameworks, sin librerías externas. Una vitrina digital que refleja mi perfil como **Ingeniera en Sistemas** y mi enfoque en el desarrollo frontend moderno.

> Diseñado con atención al detalle, rendimiento optimizado y una experiencia de usuario fluida en cualquier dispositivo.

---

## ✨ Características

- 🎨 **Diseño moderno y profesional** con paleta de colores cuidadosamente seleccionada
- 📱 **100% Responsive** — mobile first, adaptado a tablet y desktop
- 🖱️ **Cursor personalizado** con efectos visuales únicos
- 🔍 **SEO optimizado** — meta tags, descripciones y estructura semántica HTML5
- ⚡ **Alto rendimiento** — sin dependencias externas, carga ultra rápida
- 🎞️ **Animaciones suaves** — scroll reveal, hover effects con CSS puro
- 🗂️ **Multi-página (MPA)** — estructura escalable con páginas independientes por proyecto

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5 Semántico** | Estructura accesible y optimizada para SEO |
| **CSS3** | Grid, Flexbox, animaciones, variables CSS personalizadas |
| **JavaScript Vanilla** | Interactividad completa sin dependencias externas |
| **Intersection Observer API** | Animaciones activadas al hacer scroll |
| **Vercel** | Hosting y despliegue continuo (CI/CD) |

---

## 📁 Estructura del proyecto

```
portafolio/
│
├── index.html                        # Página de inicio / bienvenida
├── perfil.html                       # Perfil profesional y habilidades
├── proyectos.html                    # Galería de proyectos
├── contacto.html                     # Formulario de contacto
│
├── css/
│   └── style.css                     # Estilos globales del sitio
│
├── js/
│   └── main.js                       # Lógica, animaciones e interactividad
│
├── img/
│   ├── perfil/                       # Foto de perfil y recursos personales
│   └── proyectos/                    # Capturas de pantalla de proyectos
│
└── proyectos-individuales/
    ├── proyecto-triaje.html          # Documentación: Sistema de Triaje RNA
    ├── proyecto-sitop.html           # Documentación: SITOP Web Corporativa
    └── proyecto-acceso-unah.html     # Documentación: Ingreso UNAH API REST
```

---

## 🚀 Proyectos destacados

### 1. 🧠 Sistema de Triaje con Red Neuronal
> Clasificación de pacientes en niveles ESI usando una red neuronal entrenada con TensorFlow.

**Stack:** Python 3.11 · TensorFlow · Pandas · Tkinter  
**Highlights:** Predicción en tiempo real · Interfaz gráfica de escritorio · Modelo entrenado con datos clínicos reales

[![Ver documentación](https://img.shields.io/badge/Documentación-Ver-blue)](./proyectos-individuales/proyecto-triaje.html)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/Sistema-de-Triaje-RNA)

---

### 2. 🏗️ SITOP · Web Corporativa
> Sitio institucional para empresa de ingeniería civil en Honduras.

**Stack:** HTML5 · CSS3 · JavaScript Vanilla  
**Highlights:** Hero slider animado · Galería filtrable · Modal de imágenes · 100% responsive

[![Ver sitio](https://img.shields.io/badge/Sitio-Live-brightgreen)](https://sitophn.com)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/sitop-web)

---

### 3. 🎓 Ingreso UNAH · API REST
> Sistema de control de acceso universitario con autenticación y gestión de usuarios.

**Stack:** TypeScript · Node.js · Express · PostgreSQL  
**Highlights:** Lógica de negocio en SQL · Endpoints RESTful · Desplegado en Vercel

[![Ver documentación](https://img.shields.io/badge/Documentación-Ver-blue)](./proyectos-individuales/proyecto-acceso-unah.html)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/v0-university-login-system)

---

## 💻 Instalación y uso

### Requisitos previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- *(Opcional)* Extensión **Live Server** en VS Code para desarrollo local

### Ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/LitzyCastellanos/Mi-repositorio-Litzy-Castellanos.git

# 2. Entrar al directorio
cd Mi-repositorio-Litzy-Castellanos

# 3. Abrir index.html en tu navegador
#    O hacer clic derecho → "Open with Live Server" en VS Code
```

> No requiere instalación de dependencias ni servidor backend. Funciona directamente en el navegador.

---

## ☁️ Despliegue en Vercel

Este portafolio está desplegado en **Vercel** con integración continua desde GitHub.

Cada `git push` a la rama `main` dispara un nuevo despliegue automático.

### Pasos para desplegar tu propio fork:

1. Crea una cuenta en [vercel.com](https://vercel.com) (gratis)
2. Haz clic en **Add New → Project**
3. Importa este repositorio desde GitHub
4. En la configuración:
   - **Build Command:** *(dejar vacío)*
   - **Output Directory:** `.`
5. Haz clic en **Deploy** ✅

---

## 📬 Contacto

<div align="center">

| Canal | Enlace |
|---|---|
| 🌐 Portafolio | [litzycastellanos.vercel.app](https://litzycastellanos.vercel.app) |
| 💼 LinkedIn | [linkedin.com/in/litzycastellanos](https://linkedin.com/in/litzycastellanos) |
| 🐙 GitHub | [@LitzyCastellanos](https://github.com/LitzyCastellanos) |

</div>

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usar el código como referencia o inspiración, pero por favor da crédito al autor original.

---

<div align="center">

Hecho con 💙 y código limpio por **Litzy Castellanos**

</div># 💼 Litzy Castellanos · Portafolio Profesional

<div align="center">

![Portafolio Banner](https://via.placeholder.com/1200x300/0a0a0a/00d4ff?text=Litzy+Castellanos+·+Ingeniera+en+Sistemas)

**Desarrolladora Frontend · Ingeniera en Sistemas · Honduras 🇭🇳**

[![Deploy](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://litzycastellanos.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](./LICENSE)

</div>

---

## 📌 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Proyectos destacados](#-proyectos-destacados)
- [Instalación y uso](#-instalación-y-uso)
- [Despliegue en Vercel](#-despliegue-en-vercel)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

## 📖 Descripción

Portafolio web personal desarrollado **desde cero** con tecnologías nativas del navegador — sin frameworks, sin librerías externas. Una vitrina digital que refleja mi perfil como **Ingeniera en Sistemas** y mi enfoque en el desarrollo frontend moderno.

> Diseñado con atención al detalle, rendimiento optimizado y una experiencia de usuario fluida en cualquier dispositivo.

---

## ✨ Características

- 🎨 **Diseño moderno y profesional** con paleta de colores cuidadosamente seleccionada
- 📱 **100% Responsive** — mobile first, adaptado a tablet y desktop
- 🖱️ **Cursor personalizado** con efectos visuales únicos
- 🔍 **SEO optimizado** — meta tags, descripciones y estructura semántica HTML5
- ⚡ **Alto rendimiento** — sin dependencias externas, carga ultra rápida
- 🎞️ **Animaciones suaves** — scroll reveal, hover effects con CSS puro
- 🗂️ **Multi-página (MPA)** — estructura escalable con páginas independientes por proyecto

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5 Semántico** | Estructura accesible y optimizada para SEO |
| **CSS3** | Grid, Flexbox, animaciones, variables CSS personalizadas |
| **JavaScript Vanilla** | Interactividad completa sin dependencias externas |
| **Intersection Observer API** | Animaciones activadas al hacer scroll |
| **Vercel** | Hosting y despliegue continuo (CI/CD) |

---

## 📁 Estructura del proyecto

```
portafolio/
│
├── index.html                        # Página de inicio / bienvenida
├── perfil.html                       # Perfil profesional y habilidades
├── proyectos.html                    # Galería de proyectos
├── contacto.html                     # Formulario de contacto
│
├── css/
│   └── style.css                     # Estilos globales del sitio
│
├── js/
│   └── main.js                       # Lógica, animaciones e interactividad
│
├── img/
│   ├── perfil/                       # Foto de perfil y recursos personales
│   └── proyectos/                    # Capturas de pantalla de proyectos
│
└── proyectos-individuales/
    ├── proyecto-triaje.html          # Documentación: Sistema de Triaje RNA
    ├── proyecto-sitop.html           # Documentación: SITOP Web Corporativa
    └── proyecto-acceso-unah.html     # Documentación: Ingreso UNAH API REST
```

---

## 🚀 Proyectos destacados

### 1. 🧠 Sistema de Triaje con Red Neuronal
> Clasificación de pacientes en niveles ESI usando una red neuronal entrenada con TensorFlow.

**Stack:** Python 3.11 · TensorFlow · Pandas · Tkinter  
**Highlights:** Predicción en tiempo real · Interfaz gráfica de escritorio · Modelo entrenado con datos clínicos reales

[![Ver documentación](https://img.shields.io/badge/Documentación-Ver-blue)](./proyectos-individuales/proyecto-triaje.html)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/Sistema-de-Triaje-RNA)

---

### 2. 🏗️ SITOP · Web Corporativa
> Sitio institucional para empresa de ingeniería civil en Honduras.

**Stack:** HTML5 · CSS3 · JavaScript Vanilla  
**Highlights:** Hero slider animado · Galería filtrable · Modal de imágenes · 100% responsive

[![Ver sitio](https://img.shields.io/badge/Sitio-Live-brightgreen)](https://sitophn.com)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/sitop-web)

---

### 3. 🎓 Ingreso UNAH · API REST
> Sistema de control de acceso universitario con autenticación y gestión de usuarios.

**Stack:** TypeScript · Node.js · Express · PostgreSQL  
**Highlights:** Lógica de negocio en SQL · Endpoints RESTful · Desplegado en Vercel

[![Ver documentación](https://img.shields.io/badge/Documentación-Ver-blue)](./proyectos-individuales/proyecto-acceso-unah.html)
[![Repositorio](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/LitzyCastellanos/v0-university-login-system)

---

## 💻 Instalación y uso

### Requisitos previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- *(Opcional)* Extensión **Live Server** en VS Code para desarrollo local

### Ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/LitzyCastellanos/Mi-repositorio-Litzy-Castellanos.git

# 2. Entrar al directorio
cd Mi-repositorio-Litzy-Castellanos

# 3. Abrir index.html en tu navegador
#    O hacer clic derecho → "Open with Live Server" en VS Code
```

> No requiere instalación de dependencias ni servidor backend. Funciona directamente en el navegador.

---

## ☁️ Despliegue en Vercel

Este portafolio está desplegado en **Vercel** con integración continua desde GitHub.

Cada `git push` a la rama `main` dispara un nuevo despliegue automático.

### Pasos para desplegar tu propio fork:

1. Crea una cuenta en [vercel.com](https://vercel.com) (gratis)
2. Haz clic en **Add New → Project**
3. Importa este repositorio desde GitHub
4. En la configuración:
   - **Build Command:** *(dejar vacío)*
   - **Output Directory:** `.`
5. Haz clic en **Deploy** ✅

---

## 📬 Contacto

<div align="center">

| Canal | Enlace |
|---|---|
| 🌐 Portafolio | [litzycastellanos.vercel.app](https://litzycastellanos.vercel.app) |
| 💼 LinkedIn | [linkedin.com/in/litzycastellanos](https://linkedin.com/in/litzycastellanos) |
| 🐙 GitHub | [@LitzyCastellanos](https://github.com/LitzyCastellanos) |

</div>

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usar el código como referencia o inspiración, pero por favor da crédito al autor original.

---

<div align="center">

Hecho con 💙 y código limpio por **Litzy Castellanos**

</div>
