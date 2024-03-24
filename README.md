# Plantillas de Express

Este directorio contiene plantillas para crear aplicaciones con Express.

- Para crear un nuevo proyecto de Express ejecutar:
    ```bash
    npx plantilla-repo --example "https://github.com/SCodify/plantillas-express" --example-path "plantilla-express" express-app
    ```
    - Acceder a la carpeta del proyecto con el comando `cd express-app`.
    - Ejecutar el comando `npm i` para instalar las dependencias necesarias.
    - Crear el archivo `.env` y definir el `PORT=9000`.

- Para crear un nuevo proyecto de Express + MongoDB ejecutar:
    ```bash
    npx plantilla-repo --example "https://github.com/SCodify/plantillas-express" --example-path "plantilla-express-mongodb" express-mongo-app
    ```
    - Acceder a la carpeta del proyecto con el comando `cd express-mongo-app`.
    - Ejecutar el comando `npm i` para instalar las dependencias necesarias.
    - Crear el archivo `.env` y definir:
        ```
        PORT=9000
        DB_USER=
        DB_PASS=
        DB_HOST=
        DB_NAME=
        ```