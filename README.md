# TPFinal
Entrega del TPFinal Curso 999199859

🛒 Ecommerce React + Firebase
Este proyecto es un ecommerce desarrollado con React y Firebase, como entrega final del curso.
Incluye las páginas de Home, Detalle de producto, Registro y Login.
Todos los datos de usuarios y productos persisten en Firebase (Authentication + Firestore).

🚀 Tecnologías usadas
-React 18 con Vite

-React Router DOM para navegación

-Firebase (Authentication + Firestore)

-CSS Modules para estilos

-GitHub para control de versiones

📌 Funcionalidades

-Home:
  Listado de productos con nombre, precio, SKU y descripción.

-Detalle de producto:
  Vista individual con información ampliada (imagen, precio, descripción, SKU).

-Registro
  Creación de cuenta con nombre, apellido, email y contraseña.

-Persistencia en Firebase Authentication y Firestore.

-Login

-Ingreso con email y contraseña.

-Sesión persistente gracias a Firebase Auth.


📂 Estructura del proyecto

src/
 ├── components/        -Componentes reutilizables
 ├── layouts/           -Layout principal con header/footer
 ├── pages/             -Vistas (Home, Product, Register, Login)
 ├── services/          -Lógica de Firebase (authService, productService)
 ├── firebaseConfig.js  -Configuración de Firebase
 └── main.jsx           -Punto de entrada

  Instalación y uso
Clonar el repositorio:


git clone https://github.com/martonOlaizola/TPFinal.git
cd TPFinal

⚙️ Instalación y uso

-Instalar dependencias:
  npm install

-Crear el archivo de configuración firebaseConfig.js en src/ con tus credenciales de Firebase:
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);

-Correr el proyecto:
  npm run dev

-Abrir en el navegador:
  http://localhost:5173

¡IMPORTANTE!
Para visualizar los productos se debe registrar un usuario y posteriormente iniciar sesión con el mismo