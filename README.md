# 🎟️ Ticket Reservation System - Backend

## 📌 Descripción
API RESTful para el sistema de reserva de tickets. Permite gestionar eventos, reservas y autenticación de usuarios con JWT. Desarrollado con Node.js, Express y MySQL.

## 🚀 Tecnologías
- Node.js (v26)
- Express (v5)
- MySQL (v8.4)
- JWT (Autenticación)
- bcryptjs (Encriptación)
- Knex.js (Migraciones)
- Jest + Supertest (Pruebas)
- Docker (Contenerización)

## 📁 Estructura del Proyecto

backend/
├── src/
│   ├── config/
│   │   └── database.js       # Configuración de MySQL
│   ├── models/
│   │   ├── EventModel.js
│   │   ├── ReservationModel.js
│   │   └── UserModel.js
│   ├── controllers/
│   │   ├── eventController.js
│   │   ├── reservationController.js
│   │   └── authController.js
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   ├── reservationRoutes.js
│   │   └── authRoutes.js
│   ├── middleware/
│   │   └── auth.js           # Autenticación JWT
│   ├── tests/
│   │   ├── setup.js
│   │   ├── events.test.js
│   │   ├── auth.test.js
│   │   └── reservations.test.js
│   └── app.js                # Punto de entrada
├── migrations/               # Migraciones de Knex
│   └── 20260916160912_create_initial_schema.js
├── knexfile.js               # Configuración de Knex
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env.example
└── .gitignore

## 📦 Instalación y Ejecución

### Opción 1: Con Docker (Recomendado)
git clone https://github.com/AlexAdrianPerezSoriano/ticket-backend.git
cd ticket-backend
docker compose up --build

Nota: Las migraciones se ejecutan automáticamente al iniciar el contenedor. Si no, ejecuta:
docker exec -it ticket_backend npm run migrate

### Opción 2: Desarrollo local
npm install
cp .env.example .env  # Configura tus variables
npm run migrate       # Crea las tablas
npm run dev           # Inicia el servidor

## 🔧 Variables de Entorno (.env)
Crea un archivo .env basado en .env.example:

PORT=5000
DB_HOST=localhost
DB_USER=example_user
DB_PASSWORD=example_password
DB_NAME=ticket_db
JWT_SECRET=example_jwt_secret

## 🗄️ Migraciones (Knex.js)

Este proyecto usa Knex.js para gestionar la base de datos.

Comandos disponibles:
npm run migrate           # Ejecuta todas las migraciones pendientes
npm run migrate:rollback  # Revierte la última migración

Crear una nueva migración:
npx knex migrate:make nombre_de_la_migracion --knexfile knexfile.js

## 🔧 Endpoints de la API

### Autenticación
- POST /auth/register - Registrar usuario
- POST /auth/login - Iniciar sesión (devuelve JWT)

### Eventos
- GET /events - Listar eventos (público)
- GET /events/:id - Detalle evento (público)
- POST /events - Crear evento (admin)
- PUT /events/:id - Editar evento (admin)
- DELETE /events/:id - Eliminar evento (admin)

### Reservas
- POST /reservations - Crear reserva

## 👥 Credenciales de Prueba
- Admin: admin@example.com / admin123
- User: user@example.com / user123

## 🧪 Pruebas Unitarias
npm test

## 🐳 Dockerización

Levantar backend + MySQL:
docker compose up --build

Servicios incluidos:
- db: MySQL 8.4
- backend: Node.js 26 + Express

## 📝 Autor
Alex Pérez Soriano
https://www.linkedin.com/in/alexperezsoriano/

## 📅 Fecha
Septiembre 2026

## 📄 Licencia
Este proyecto fue desarrollado como prueba técnica.