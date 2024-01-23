# Mi compras server
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)
</br>

## Introducción
Proyecto personal para aplicar mis conocimientos en Express, MySQL y Jest. 
La API ofrece a los usuarios la posibilidad de ingresar y registrarse para poder realizar las compras, actualizar los datos del cliente ( nombre ,contraseña , email ), realizar compras y obtener novedades, suscripciones y canjes
</br>

## Tabla de contenido
* [Introducción](#Introducción)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)
* [Peticiones](#Peticiones)

</br>

## Tipo de proyecto
Proyecto individual.

</br>

## Tecnologías utilizadas
  - Express
  - MySQL
  - TypeScript
  - NodeJS
  - Jest

</br>

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
</br>

## Instalación 
Es necesario instalar node, para eso es necesario ir a la siguiente pagina y descargarlo:
https://nodejs.org/en </br>
Una vez clonado el repositorio o descargado el zip ( y después de extraerlo ). 
Abrir la terminal en la carpeta donde se clono ( o se extrajo ) y escribir el siguiente comando.
```
npm i
```
Esto instalara las dependencias que el proyecto necesita

</br>

## Uso
Hay dos formas de usar la API<br/>
**Local**:

Para poder utilizar el proyecto es necesario tener una conexión a una base de datos y aplicar el siguiente comando:
```
npm run dev
```
Para poder correr los test escriba el siguiente comando:
```
npm run test
```

**En linea**:  
En caso de querer utilizarla en linea dirigirse a la siguiente dirección:
```
mi-compras.onrender.com
```


> [!NOTE]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tenga paciencia.

</br>


## Peticiones
Puede utilizar programas como PostMan , ThunderClient o el navegador ( en caso de que lo este utilizando la API en linea ).</br>
Para poder realizar las peticiones debe seguir el siguiente el siguiente patrón: 
```
https://{api}/{endpoint}
```
Por ejemplo en caso de estar utilizando en linea y querer obtener las canjes:
```
https://mi-compras.onrender.com/canjes
```

### Tipo de datos
Distintos tipos de datos que se manejan en todo el proyecto

#### Usuario
Propiedad | Tipo | Descripción
-------- | ----  | ------
`id` | int | El identificador del usuario. 
`nombre` | String|  Nombre del usuario.
`contrasenia` | String o Undefined |  Palabra clave que tiene usuario para ingresar. 
`email` | String |  Información del usuario. 
`DNI` | String| Información del usuario.
`puntos` | int |  Puntos del usuario para canjes. 
`suscripcionTitulo` | String|  Suscripción que tiene el usuario. 
`suscripcionDescuento` | int |  Porcentaje del descuento que tiene la suscripción. 
`suscripcionRestantes` | int | Cantidad de descuentos restantes de la suscripción. 
`canjeTitulo` | String|  Canje del que obtuvo el usuario. 
`canjeDescuento` | int |  Porcentaje del descuento que tiene el canje. 
`canjeRestantes` | int |  Cantidad de descuentos restantes del canje. 


#### Suscripción
Propiedad | Tipo| Descripción
-------- | ---- |  -----------
`titulo` | String | Nombre de la suscripción.
`tipo` | String  | Duración de la suscripción (Anual, mensual, etc).
`precio` | int | Valor de la suscripción.
`descuento` | int | El porcentaje que se le descuenta a los productos.
`restantes` | int | Cantidad de veces que se puede aplicar el descuento.
`beneficios` | String[]| Lista de beneficios.

#### Novedad
Propiedad | Tipo| Descripción
-------- | ---- |  -----------
`id` | int| Identificación de la novedad.
`titulo` | String  | Nombre del titulo..
`decripcion` | String | Mas detalles sobre la novedad.

#### Canje
Propiedad | Tipo| Descripción
-------- | ---- |  -----------
`titulo` | String | Nombre del canje.
`puntos` | int | Cantidad necesaria para obtener el canje.
`descuento` | int | El porcentaje que se le descuenta a los productos.
`restantes` | int | Cantidad de veces que se puede aplicar el descuento.


#### Respuesta

Propiedad | Tipo| Descripción
-------- | ---- |  -----------
`exito` | Boolean | Indica que si todo salió bien o mal.
`mensaje` | String o Undefined | Texto para que lea la persona.
`dato` | any o Undefined | La información que pide el usuario.


### Peticiones HTTP y su código de éxito

Método| Código
-------|------------------------
GET    |`200-OK`
POST   |`200-OK`
PUT    |`200-OK`

### Error
En caso de ocurrir algún error se enviara el siguiente Json ( tipo <a href="#respuesta">Respuesta</a> )
:
```json
{
  "exito": false,
  "mensaje": "No se enviaron datos"
}
```
> Es solo un ejemplo el mensaje de error puede variar

</br>

###  GET

####  Obtener suscripciones
**Endpoint**: "suscripciones" </br>
Se obtienen los tipos de suscripciones existentes </br>
En caso de que todo haya salido bien se tendrá una respuesta de este estilo

```json
{
  "exito": true,
  "mensaje": "Devolviendo datos",
  "dato": [
	  {
		  "titulo": "Suscripcion Premium",
		  "tipo": "Mensual",
		  "precio": 100,
		  "descuento": 5,
		  "restantes": 1,
		  "beneficios": [
			  "Participar en sorteos"
		  ]
	  }
  ]
}
```
> Es solo un ejemplo la cantidad de suscripciones puede variar, así como la información que esta contenga.

En este caso **dato** es de tipo **Suscripción[]**  ( tipo <a href="#suscripción">Suscripción</a> )

</br>

####  Obtener novedades
**Endpoint**: "novedades" </br>
Se obtienen los tipos de novedades existentes </br>
En caso de que todo haya salido bien se tendrá una respuesta de este estilo

```json
{
  "exito": true,
  "mensaje": "Devolviendo datos",
  "dato": [
	  {	
		  "id": 3,
		  "titulo": "Agrego suscripciones",
		  "descripcion": "Se agregan las descripciones"
	  }
  ]
}
```
> Es solo un ejemplo la cantidad de novedades puede variar, así como los títulos y descripciones de esta.

En este caso **dato** es de tipo **Novedad[]**  ( tipo <a href="#novedad">Novedad</a> )

</br>

####  Obtener canjes
**Endpoint**: "canjes" </br>
Se obtienen los tipos de canjes existentes </br>
En caso de que todo haya salido bien se tendrá una respuesta de este estilo

```json
{
  "exito": true,
  "mensaje": "Devolviendo datos",
  "dato": [
	  {	
		  "titulo": "Descuento del 25% para la proxima compra",
		  "puntos": 1000,
		  "descuento": 25
		  "restantes": 1
	  }
  ]
}
```
> Es solo un ejemplo la cantidad de canjes puede variar, así como los títulos, puntos, descuento y restantes de esta.

En este caso **dato** es de tipo **Canje[]**  ( tipo <a href="#canje">Canje</a> )

</br>

###  POST
#### Ingresar usuario
**Endpoint**: "ingresar" </br>
Un usuario puede recuperar sus datos
El Request Body que se debe enviar:
```json
{
	"nombre": "Matias",
	"contrasenia": "123456789"	
}
```
> Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo| Requerido |Descripción
-------- | ---- | :------: | -----------
`nombre` | String |  ✔ |Identificador para que vean los demás usuarios.
`contrasenia` | String |  ✔ | Contraseña ingresada por el fue usuario.

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"mensaje": "Usuario logueado exitosamente",
	"dato": {
			"id": 1,
			"nombre": "Matias",
			"email": "matias@gmail.com",
			"DNI": "1234",
			"puntos": 1234,
			"suscripcionTitulo": "Suscripcion mensual",
			"suscripcionDescuento": 25,
			"suscripcionRestantes": 3,
			"canjeTitulo": "10% de descuento en la proxima compra",
			"canjeDescuento": 10,
			"canjeRestantes": 1
	}
}
```
> Es solo un ejemplo el mensaje, al igual que los datos del usuario puede variar

En este caso **dato** es de tipo **Usuario**  ( tipo <a href="#usuario">Usuario</a> )

</br>

#### Registrar usuario
**Endpoint**: "registrar" </br>
Un usuario ingresa a la base datos
El Request Body que se debe enviar:
```json
{
	"nombre": "Matias",
	"DNI": "123456",
	"contrasenia": "123456789",
	"email": "matias@gmail.com"	
}
```
> Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo| Requerido | Descripción
-------- | ---- | :------: | -----------
`nombre` | String |  ✔ | Identificador para que vean los demás usuarios.
`DNI` | String |  ✔ | Informacion del usuario".
`contrasenia` | String |  ✔ | Contraseña ingresada por el fue usuario.
`email` | String |  ✔ | Información del usuario".

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"mensaje": "Usuario registrado exitosamente",
}
```
> Es solo un ejemplo el mensaje puede variar


</br>

### PUT
#### Actualizar usuario
**Endpoint**: "actualizar" </br>
Modifica los valores del usuario
El Request Body que se debe enviar:
```json
{
	"id": 1,
	"nombre": "Matias",
	"contrasenia": "1234",
	"email": "matias@gmail.com",
	"DNI": "1234",
	"puntos": 1234,
	"suscripcionTitulo": "Suscripcion mensual",
	"suscripcionDescuento": 25,
	"suscripcionRestantes": 3,
	"canjeTitulo": "10% de descuento en la proxima compra",
	"canjeDescuento": 10,
	"canjeRestantes": 1
}
```
> Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo | Requerido | Descripción
-------- | ---- | :------: | ------
`id` | int | ✔ |  Es el identificador del usuario. 
`nombre` | String|  | Nombre nuevo del usuario.
`contrasenia` | String|   | Contraseña nueva del usuario. 
`email` | String |  | Email nuevo del usuario. 
`DNI` | String|  | DNI nuevo del usuario. 
`puntos` | int |  |  Nueva cantidad de puntos del usuario. 
`suscripcionTitulo` | String|  |  Nueva suscripción del usuario. 
`suscripcionDescuento` | int |  |  Porcentaje del descuento que tiene la suscripción. 
`suscripcionRestantes` | int |  |  Cantidad de descuentos restantes de la suscripción. 
`canjeTitulo` | String|  | Nuevo canje del usuario. 
`canjeDescuento` | int |  |  Porcentaje del descuento que tiene el canje. 
`canjeRestantes` | int |  | Cantidad de descuentos restantes del canje. 

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"mensaje": "Datos actualizados",
}
```
> Es solo un ejemplo el mensaje puede variar
