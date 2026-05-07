// Importar Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Configuración de tu proyecto (la tuya ya está bien)
const firebaseConfig = {
 apiKey: "AIzaSyAUswiXQQsjIhZdftaJ8ojdO-YvYj1gKqs",
  authDomain: "comentarios-10710.firebaseapp.com",
  projectId: "comentarios-10710",
  storageBucket: "comentarios-10710.firebasestorage.app",
  messagingSenderId: "445545526543",
  appId: "1:445545526543:web:0d4cb45c023351f6e0ba7a",
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// 🔥 Esto es lo IMPORTANTE (base de datos)
export const db = getFirestore(app)