# Mi compras server
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Express, MySQL y Jest. 
El server ofrece la posibilidad de ingresar y registrarse para poder realizar las compras, le permite al cliente actualizar sus datos ( nombre ,contrasenia , email ). Ademas de otorgar datos como suscripciones, novedades y canjes

## Personas Contribuyentes
Proyecto realizado únicamente por mi.

## Tecnologías utilizadas
  - Express
  - MySQL
  - Jest


## Estructura
```
Mi_compras_servidor
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ mensaje.ts
│  │  ├─ path.ts
│  │  ├─ tabla.ts
│  │  └─ type.ts
│  ├─ controller
│  │  ├─ get.controllers.ts
│  │  ├─ post.controllers.ts
│  │  └─ put.controllers.ts
│  ├─ database
│  │  ├─ database.ts
│  │  └─ peticion.ts
│  ├─ express.ts
│  ├─ index.ts
│  ├─ route
│  │  ├─ get.routes.ts
│  │  ├─ post.routes.ts
│  │  └─ put.routes.ts
│  └─ test
│     ├─ auxiliar
│     │  └─ ejemplos.ts
│     ├─ database
│     │  └─ peticion.test.ts
│     └─ rutas
│        ├─ get.test.ts
│        ├─ post.test.ts
│        └─ put.test.ts
├─ tsconfig.json
└─ tsconfig.spec.json

```

## Instalación
Para poder utilizarlo el proyecto es necesario tener una conexión a un server y aplicar el siguiente comando:
```
npm run dev
```
Para poder correr los test escriba el siguiente comando:
```
npm run test
```
En caso de querer ver la pagina con server incluido y poder comprar: https://sprightly-bienenstitch-598a97.netlify.app

> [!NOTE]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tener paciencia.
