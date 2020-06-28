## FrontEnd Online:

- [https://petgram-jdb.now.sh/](https://petgram-jdb.now.sh/)

## API Online:

- [https://petgram-jdb-api.now.sh/](https://petgram-jdb-api.now.sh/)

### Deploy a Vercel del front:

        vercel (deploy en modo desarrollo)
        npm run deploy (script que deploya a vercel en modo productivo)

### Deploy a Vercel de la api:

        cd api
        vercel

### Ejecución del front en desarrollo local:

        npm run dev

### Compilar la app con Webpack en modo development:

        ./node_modules/.bin/webpack --mode=development
        - Proporcionar el modo de configuración le dice a Webpack cual de sus optimizaciones integradas debe utilizar.
        - Si no se especifica, Webpack usa 'production' como modo por defecto.
        - Al ejecutar esto, se compila la app en la carpeta dist.
        - https://webpack.js.org/configuration/mode/

### Ejecución de la app compilada en modo desarrollo, servida localmente con serve:

        npm run serve:dev
        - 'serve:dev' es un script agregado a package.json.

---

## Páginas investigadas:

JWT.IO

- https://jwt.io/

Introducción a GraphQL en español. ¿Qué es? ¿Para qué sirve? Sus ventajas. [Curso express GraphQL]

- https://www.youtube.com/watch?v=KRV46iZ844s&list=PLV8x_i1fqBw3wHa7HOle0MMAcRjfViWwC

"Can I use" (up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers)

- https://caniuse.com/#search=intersection%20observer

IntersectionObserver polyfill

- https://github.com/w3c/IntersectionObserver/tree/master/polyfill

React Hooks, saca todo el potencial a tus componentes sin usar clases (midudev)

- https://www.youtube.com/watch?v=Ww_eT4H_k2c

SVGR - SVG to React Component

- https://react-svgr.com/playground/

SVGOMG - SVG Optimizer

- https://jakearchibald.github.io/svgomg/

Maketext.io - Logo creator

- https://maketext.io/

Styled-components

- https://styled-components.com/

How can I stop webpack dev server from windows console?

- https://stackoverflow.com/questions/36921612/how-can-i-stop-webpack-dev-server-from-windows-console

Cambiar un mensaje de confirmación

- https://help.github.com/es/github/committing-changes-to-your-project/changing-a-commit-message

Webpack - 'mode'

- https://webpack.js.org/configuration/mode/

Babel - options

- https://babeljs.io/docs/en/options

React Lazy

- https://es.reactjs.org/docs/code-splitting.html

Does not provide a valid apple-touch-icon

- https://web.dev/apple-touch-icon/?utm_source=lighthouse&utm_medium=devtools

webpack-pwa-manifest - API

- https://github.com/arthurbergmz/webpack-pwa-manifest#api

vercel@19.1.1

- https://github.com/vercel/vercel/releases/tag/vercel@19.1.1
