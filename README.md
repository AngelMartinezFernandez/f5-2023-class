# Clase F5
Al final del readme comentaré respuesta a una duda que se hizo y algún detalle o consejo que se me ocurra.
El readme no se utiliza para contar la vida del desarrollador, pero en este caso lo hago para agrupar ciertas explicaciones que pueden ser interesantes.
## Personaliza la configuración si lo consideras oportuno

Ver [Vite Configuration Reference](https://vitejs.dev/config/).

## Instalación
Utiliza el gestor de paquetes que prefieras (npm o yarn)

## Importante
Crear un archivo en la carpeta base (donde está este readme) con el nombre .env (muy importante el punto).
<br>
Copiamos y pegamos el contenido del archivo env.template, en un caso real,
los valores de las variables de entorno vendrían vacíos o con datos falsos que nosotros modificaremos.
<br>
En este caso, como no hay información sensible pues los datos son reales.

## Descargar paquetes / librerías

```sh
npm install
```

### Comando para precompilar proyecto en modo desarrollo

```sh
npm run dev
```

### Compilar y minificar para producción

```sh
npm run build
```
## Datos de login en API de pruebas
> Leer documentación para más info https://dummyjson.com/
> Nombre de usuario: kminchelle
<br>
> Contraseña: 0lelplR

## Temas vistos en la clase y en este proyecto
### Internacionalización
> Primeros pasos https://lokalise.com/blog/vue-i18n/#Adjusting_the_views
> <br>
> Como nombrar y organizar https://lokalise.com/blog/translation-keys-naming-and-organizing/
> Generamos unos JSON de traducciones, todos tienen la misma estructura pero cambian los valores por cada idioma.

### Modularización
> Gestionaremos nuestro proyecto de manera modularizada y ordenada (en la medida de lo posible).
> Ejemplos en este proyecto puede ser el sistema de carpetas, las rutas y los diferentes modulos de pinia (stores)
> También como gestionamos las llamadas, creando una conexión genérica con axios y aplicando los datos necesarios
> una sola vez y concatenando solo las partes variables de nuestros endpoints.

### Autenticación
> Consiste en pasar a un endPoint (ruta de nuestro backend), la información necesaria para hacer login.
> Una vez hecho esto, recibiremos un token además de la info que se considere oportuna.
> Este token lo usaremos para todas las llamadas que requieran estar autenticado.
> En el backend se puede definir cuando tiempo dura el token.
> Lo más común para mi va desde 30 minutos a 2 horas dependiendo del framework.

### Routing
> Sistema de rutas, en el cual especificaremos que componentes se renderizan en cada ruta.
> Además podemos controlar si tenemos permisos o no para acceder a estas rutas en el beforeEnter del router.

### Atomic y reutilización de componentes
> Siempre que se pueda crearemos componentes reutilizables,
> hay que encontrar un equilibrio entre atomizar y reutilizar y complicarnos la vida demasiado.
> El sidebar o el paginador puede ser un ejemplo de componente reutilizable,
> en el caso de este ultimo conseguimos que sea reutilizable para todas las vistas delegando la lógica en el padre.
> Personalmente me gusta tener todas las llamadas en la vista padre y pasar los datos mediante props y/o consumir los datos de la store ya que para controlar temas de eficiencia,
> si hacemos las llamadas desde dentro de los componentes es mucho más dificil de rastrear y controlar,
> además que normalmente en una vista vamos a reutilizar ciertos datos en diferentes sitio y no queremos hacer multiples llamadas de lo mismo al back y por lo tanto a nuestra base de datos.

## Dudas
### ¿Se almacena el token en la base de datos?
> Revisando código y ejemplo he visto que en principio no, depende claramente de la implementación y como se haga la autenticación.
> Lo que almacenamos en la base de datos es el refreshToken (se puede llamar de otra manera), esta es una practica por la cual podemos querer que nuestros usuarios no estén logueandose cada 30 minutos (o lo establecido en la configuración del backend).
> Esto es muy molesto, por lo tanto podemos crear una clave en nuestro User y gestionar su caducidad, de manera que si desde el front, recibo error de token caducado, puedo enviar el refreshToken (almacenado en el localStorage en otra clase similar a la que ya utilizamos)
> a un nuevo endpoint, por ejemplo /refresh-token y pasarle este, haremos las comprobaciones necesarias y si es correcto le generamos un nuevo token de autenticación.
> El usuario no se enterará de nada, se relanzarán las peticiones desde el front (desde el interceptor) con el nuevo token y no le incomodaremos cada poco, solo 1 vez al mes o si limpia cache.

### Explicación del sentido de la lógica en los componentes padre
> En mi experiencia, es mucho más facil de gestionar y mantener la lógica en el padre.
> Gestionaremos las peticiones correspondientes en la vista padre y las pasaremos mediante props o si se almacenan en la store pues directamente de ahí en los diferentes componentes
> Todo esto es pensando en gente que no conoce el código, que puede llegar nuevo o simplemente de otro departamento que viene a ayudar temporalmente, una vez sabemos como funciona todo es muy facil,
> pero hay que pensar en alguien que llega de golpe y nunca ha visto nada.
> Personalmente lo he pasado muy mal cuando llegas a una vista que no conoces, no sabes de donde salen los datos, unos se llaman en el padre,
> otro en un componente hijo escondido, que hace la petición y luego se utiliza en otro sitio esos datos.
> Es una locura seguir eso, en cambio si las llamadas necesarias se hacen en el padre, en un mismo método que se ejecuta en la creación de este, todo cobra sentido.
> Además puedes necesitar hacer una llamada para la cual necesitas otros datos, por lo tanto en ese método puedes controlar todo el flujo de peticiones.
