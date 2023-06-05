import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from '@firebase/firestore';

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

const {
    VITE_API_KEY,
    VITE_AUTH_DOMAIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_APP_ID,
    VITE_MEASUREMENT_ID
} = process.env;

const config: FirebaseConfig = {
    apiKey: `${VITE_API_KEY}`,
    authDomain: `${VITE_AUTH_DOMAIN}`,
    projectId: `${VITE_PROJECT_ID}`,
    storageBucket: `${VITE_STORAGE_BUCKET}`,
    messagingSenderId: `${VITE_MESSAGING_SENDER_ID}`,
    appId: `${VITE_APP_ID}`,
    measurementId: `${VITE_MEASUREMENT_ID}`,
};

const app: FirebaseApp = initializeApp(config);

// DB
export const db: Firestore = getFirestore(app);

// Auth
export const auth: Auth = getAuth(app);

export default 'firebase-config';
