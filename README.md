# **Ke Reposteria**

Este single page application, pretende calcular y presupuestar productos de reposteria, de forma tal que la ganancia de la venta sea en base al costo por materias primas de cada producto. Esto quiere decir que la app calcula el costo exacto de cada producto segun la proporcion de la materia prima que contenga y en base a éste costo y la ganancia esperada, se calculara el precio final.

## **Partes del sistema**

- **Promos**: contiene promociones "fijas" por set, sin calculo automatico, de un conjunto de productos. Ej: Chocotorta + 6 Magdalenas de vainilla con relleno de dulce de leche.
- **Productos**: contiene los productos individuales, sobre en el cual el precio se obtiene automaticamente. Ej: Chocotorta (calculo automatico por proporcion de materia prima) + % de ganancia = precio final.

**Demo**: https://jav1erram0s.github.io/Ke-Reposteria/

## **Ejecucion**

Para instalar las dependencias.

`npm install`

Para correr la aplicacion.

`npm start`

## **Instructivo para deployar un proyecto en github pages**

Recuerden : Github Pages solo despliega páginas estáticas.

- 1° Instalar gh-pages:

```js
npm install gh-pages --save-dev
```

- 2° En el archivo package.json agregar las siguientes líneas:

  Con "homepage" indicamos dónde se va a desplegar el sitio.
  Con predeploy compilamos la aplicación.
  Con deploy lo desplegamos en github.

```js
"homepage": "https://{UsernameGithub}.github.io/{NameRepo}",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

- 3° Como subir al branch gh-pages nuestra app

```js
npm run deploy
```
