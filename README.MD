
API de Productos – README
=========================


Descripción
-----------


La "API RESTful" básica es construida con Node.js y Express. Ya esta nos que permite realizar operaciones del tipo CRUD (Crear, Leer, Actualizar, Eliminar) sobre un conjunto de productos y por lo tanto cada producto tiene los siguientes campos:

- id (número entero, autoincremental)
- nombre (string)
- precio (number)
- categoria (string)


Instalación y ejecución
-----------------------


1. **Clonar el repositorio desde git o bien copiar los archivos en una carpeta local.**

2. **Instalar las dependencias**:
       
       npm install express nodemon
       
3. **Ejecutar el servidor**:

       npm run dev
       
       node index.js

4. **El servidor se inicia en**:
       
       http://localhost:3000
       

Pruebas en Postman
------------------


**GET productos**

Método: GET

URL: http://localhost:3000/api/productos

No se necesitan opciones.
    
*Respuesta esperada*:

      json
      [
        { "id": 1, "nombre": "Laptop generica", "precio": 804990, "categoria": "Tecnología" }
      ]


**POST producto**

Método: POST

URL: http://localhost:3000/api/productos

opciones: Body → raw → JSON:

escribir:

      {
        "nombre": "chocolate generico",
        "precio": 2150,
        "categoria": "Confites"
      }

*Respuesta esperada*:

>      {
        "id": 2,
        "nombre": "chocolate generico",
        "precio": 2150,
        "categoria": "Confites"
      }


**PUT producto**

Método: PUT

URL: http://localhost:3000/api/productos/1

opciones: Body → raw → JSON:

escribir:

      {
        "precio": 2150,
        "categoria": "Tecnología"
      }

*Respuesta esperada*:

      {
        "id": 1,
        "nombre": "Laptop generica",
        "precio": 804990,
        "categoria": "Tecnología"
      }


**DELETE producto**

Método: DELETE

URL: http://localhost:3000/api/productos/2

No se necesitan opciones.

*Respuesta esperada*:

    json

      [
        {
          "id": 2,
          "nombre": "chocolate generico",
          "precio": 2150,
          "categoria": "Confites"
        }
      ]


Pruebas en PowerShell usando curl.
----------------------------------


**GET productos.**

curl http://localhost:3000/api/productos


**POST productos.**

curl -X POST http://localhost:3000/api/productos `
  -H "Content-Type: application/json" `
  -d "{ \"nombre\":\"chocolate generico\", \"precio\":2150, \"categoria\":\"Confites\" }"


**PUT producto.**

curl -X PUT http://localhost:3000/api/productos/1 `
  -H "Content-Type: application/json" `
  -d "{ \"precio\":804990, \"categoria\":\"Tecnología\" }"


**DELETE producto.**

curl -X DELETE http://localhost:3000/api/productos/2

