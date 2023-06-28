# **Ke Reposteria**

Ke Reposteria es una SPA (single page application) que calcula y presupuesta productos de reposteria, de forma tal que el precio de venta sea en base al costo por materias primas del producto y su ganancia. Esto quiere decir que la aplicacion calcula el costo exacto de cada producto segun la proporcion de la materia prima que conlleve y en base a éste costo y la ganancia esperada, se calculara el precio final.

## **Partes del sistema**

- **Promos**: contiene promociones _fijas_ por set de productos, sin calculo automatico. Ej: Chocotorta + 6 Magdalenas de vainilla con relleno de dulce de leche.

![Promos](/doc/img/promos.png "Seccion Promos")

- **Productos**: contiene productos individuales, cuyo precio se obtiene de manera automatica. Ej: Chocotorta (calculo automatico por proporcion de materia prima) + ganancia = precio final.

![Prductos](/doc/img/productos.png "Seccion Productos")

Veamos un ejemplo para que quede mas claro. Tenemos que cotizar el siguiente producto, el cual tiene los siguientes ingredientes.

**Bizcochuelo**

| Ingrediente         | Cantidad |
| ------------------- | -------- |
| Harina              | 300 gr   |
| Huevos              | 4 uni    |
| Azucar              | 250 gr   |
| Esencia de vainilla | 5 ml     |

Por otro lado tenemos que el costo de la materia prima.

**Materias primas**

| Nombre              | Cantidad | Precio  |
| ------------------- | -------- | ------- |
| Harina              | 1000 gr  | $ 650   |
| Huevos              | 30 uni   | $ 1.280 |
| Azucar              | 1000 gr  | $ 350   |
| Esencia de vainilla | 150 ml   | $ 260   |

Por regla de tres, sabemos que el costo de cada ingrediente exacto es el siguiente:

| Ingrediente         | Calculo                    | Precio Exacto |
| ------------------- | -------------------------- | ------------- |
| Harina              | (300 gr x $ 650) / 1000 gr | $ 195         |
| Huevos              | (4 uni x $ 1.280) / 30 uni | $ 170.66      |
| Azucar              | (250 gr x $ 350) / 1000 gr | $ 87.50       |
| Esencia de vainilla | (5 ml x $ 260) / 150 ml    | $ 8.66        |

```txt
Finalmente tenemos que el costo del producto es la suma de los precios exactos, $461.82, el cual sumado la ganancia (Por ej. $1.200), da como precio final $1.661.82, pero como nuestro sistema redondea decimales, tenemos que el precio final a pagar por el producto es $1.660.
```

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

## **Archivos json**

https://github.com/Jav1erRam0s/JSON.API-Ke.Reposteria/archive/refs/heads/main.zip

## **Demo**

https://jav1erram0s.github.io/Ke-Reposteria/

---

#### **✏️ Sabemos que un verdadero maestro repostero es alquimista por excelencia, y dado la necesitad de fusionar ambos rubros, me vi obligado a crear esta simple pero interesante herramienta, el cual dejo abierto al publico repostero independiente. ✏️**
