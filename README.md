# 🌺 Portfolio UGC — Lucía (@luciaaa.s._)

Portfolio web profesional de Creadora de Contenido UGC (User Generated Content) optimizado y listo para desplegar en **Vercel** y alojar en **GitHub**.

---

## 🚀 Despliegue en 2 Pasos (Vercel & GitHub)

### Opción A: Despliegue Directo con GitHub + Vercel (Recomendado)

#### 1. Subir a GitHub:
1. Crea un repositorio nuevo en [github.com/new](https://github.com/new) (por ejemplo con el nombre `portfolio-ugc`).
2. Abre PowerShell o tu terminal en esta carpeta (`C:\Users\lucia\Desktop\UGC`) y ejecuta:
```bash
git remote add origin https://github.com/TU_USUARIO/portfolio-ugc.git
git push -u origin main
```

#### 2. Conectar con Vercel:
1. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** > **"Project"**.
3. Selecciona tu repositorio `portfolio-ugc` y haz clic en **"Deploy"**.
4. ¡Listo! En menos de 20 segundos tendrás tu enlace público oficial (ej: `https://lucia-ugc.vercel.app`) para enviarlo a marcas y agencias. Cada vez que hagas un cambio en GitHub, Vercel actualizará tu web automáticamente.

---

### Opción B: Subida Directa a Vercel CLI (Sin GitHub)

Si tienes instalada la herramienta de Vercel en tu ordenador:
```bash
npx vercel
```
Sigue las indicaciones en pantalla y se publicará de inmediato.

---

## 📂 Archivos del Proyecto

- `index.html`: Estructura principal con las 3 secciones: *Sobre Mí*, *Mis Vídeos* y *¿Por Qué Yo?*.
- `style.css`: Estilos visuales en tono editorial (oro rosa, champán, modo oscuro de lujo y mockups 9:16).
- `script.js`: Reproductor interactivo, controles de volumen, filtros por nicho y formulario.
- `vercel.json`: Configuración de caché y cabeceras optimizadas para vídeos en Vercel.
- `.gitignore`: Evita subir archivos pesados o temporales para mantener el repositorio ligero.
- `assets/images/avatar.jpeg`: Tu foto de perfil oficial.
- `videos/`: Tus vídeos reales comprimidos y optimizados para streaming web ultra-rápido en móviles.
- `_backup/`: Copia de seguridad de los vídeos originales de mayor tamaño (excluida de git).
