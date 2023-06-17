# **Ke Reposteria**

Este single page application, pretende calcular y presupuestar productos de reposteria, de forma tal que la ganancia de la venta sea en base al costo por materias primas de cada producto. Esto quiere decir que la app calcula el costo exacto de cada producto segun la proporcion de la materia prima que contenga y en base a éste costo y la ganancia esperada, se calculara el precio final.

## **Partes del sistema**

- **Promos**: contiene promociones "fijas" por set, sin calculo automatico, de un conjunto de productos. Ej: Chocotorta + 6 Magdalenas de vainilla con relleno de dulce de leche.
- **Productos**: contiene los productos individuales, sobre en el cual el precio se obtiene automaticamente. Ej: Chocotorta (calculo automatico por proporcion de materia prima) + % de ganancia = precio final.

## **Ejecucion**

Para instalar las dependencias.

`npm install`

Para correr la aplicacion.

`npm start`
