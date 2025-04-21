# 📘 Cypress E2E Testing – Strix Demo

Este proyecto contiene pruebas automatizadas end-to-end para la aplicación **Strix** utilizando [Cypress](https://www.cypress.io/)

---

## Requisitos

Asegurate de tener instalado:

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Google Chrome 

---

## Instalación

1. Instalar dependencias:

```
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raiz del proyecto con las credenciales de login:

```env
STRIX_USERNAME=tu_usuario@mail.com
STRIX_PASSWORD=tu_password_segura
```

---

## Ejecutar las pruebas

### Modo local interactivo (abre Cypress GUI)

```bash
npm run cypress:local
```

Esto abrira la interfaz de Cypress donde se puede seleccionar y ejecutar los tests manualmente en el navegador Chrome/Electron/Edge o browser instalado en la computadora.

---

### Modo headless (CI )

```bash
npm run cypress:e2e
```

Esto ejecutara todas las pruebas en modo headless (sin navegador visible) y generará un el reporte **Mochawesome** al finalizar.

---

## Ver el reporte

Despues de correr `npm run cypress:e2e`, se genera el reporte HTML en:

```
cypress/reports/index.html
```
---

## Estructura del Proyecto

```
/cypress
  ├── /e2e              # Archivos de prueba .cy.ts
  ├── /fixtures         # Archivos pngs,json,files
  ├── /pages            # Page Objects reutilizables
  ├── /reports          # Reportes generados por mochawesome
  └── /support          # Comandos personalizados
/cypress.config.ts      # Configuracion principal de Cypress
.env                    # Variables de entorno para credenciales
```
---



## Documentacion de Casos de Pruebas y Analisis/Resolucion de Problemas   

En el root del proyecto se encuentra 2 .txt con las consignas solicitadas, tanto para los casos de pruebas como analisis y resolucion de problemas.
---