# Esta es mi presentación para la prueba de FrontEnd de la hackathon Jump2Digital 2023.

**1. Tecnología utilizada:**
   Angular v16 con Bootstrap

**2. Instalación:**
  Descarge el repositorio o clonelo a través del comando `git clone`.
  En la terminal introduce el comando `npm install`
  Para arrancar el proyecto en local host usar el comando `ng serve -open `

**3. Estructura del proyecto:**
   Esta app contiene 3 componentes, un servicio, y dos fichas de modelos.
   En el html principal (app.component.html) encontramos la cabecera de la web y un botón que nos hace scroll automático hacia los componentes.
   Utilizamos tres componentes: `Character-List` (padre), `Searchbar` (hijo), y `Searchbar-Filter` (hijo).
   En el componente `character-list` conectamos el servicio con el cual llamamos a la API mediante una llamada http. Al tener renderizada la lista de personajes, creamos un scroll infinito y ya podemos comenzar a llamar las funciones de los filtros creadas en los componentes hijos. Usamos Inputs y Outputs para enviar la información entre componentes.
   En componente `searchbar` el input toma en tiempo real los caracteres que estamos escribiendo y los compara con el character name de todos los personajes de la lista, enseñando solo los que coinciden.
   En el componente `searbarch-filters` tenemos varios botones radio para elegir buscar personajes según su estado, género, o especie. Solo puede seleccionarse una de las opciones de cada categoría y si se desea resetear la búsqueda se ha proveído de un botón para ello. Estos filtros funcionan similar a la `searchbar`, comparando el término seleccionado de los botones con las propiedades de los personajes.
   Para tener un mayor control sobre las propiedades y evitar posibles errores, he creado dos ficheros de interfaces. Uno para los resultados de la llamada a la API y otro para cada personaje individual.

**4. Demo:**
  La demo de este proyecto está disponible en Vercel haciendo click **`[aqui](https://pages.github.com/](https://hackathon-jump2-digital.vercel.app/)`**

¡Muchas gracias por la oportunidad y espero que les agrade mi propuesta!
