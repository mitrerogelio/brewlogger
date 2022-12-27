import { initializeApp } from '@firebase/app'
import '@firebase/firestore'
// import '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const {
    VITE_FIRE_BASE_KEY,
    VITE_AUTH_DOMAIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_APP_ID,
    VITE_MEASUREMENT_ID
} = import.meta.env

const config = {
    apiKey: `${VITE_FIRE_BASE_KEY}`,
    authDomain: `${VITE_AUTH_DOMAIN}`,
    projectId: `${VITE_PROJECT_ID}`,
    storageBucket: `${VITE_STORAGE_BUCKET}`,
    messagingSenderId: `${VITE_MESSAGING_SENDER_ID}`,
    appId: `${VITE_APP_ID}`,
    measurementId: `${VITE_MEASUREMENT_ID}`,
}

const app = initializeApp(config)

export const db = getFirestore(app)


/* export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
        console.log('error creating user', error.message)
      }
  }
  return userRef
} */

// export const auth = firebase.auth()

// const provider = new firebase.auth.GoogleAuthProvider()

// provider.setCustomParameters({ prompt: 'select_account' })
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default 'firebase-config'