import { initializeApp } from '@firebase/app'
import '@firebase/firestore'
// import '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const {
    REACT_APP_FIRE_BASE_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASUREMENT_ID
} = process.env

const config = {
    apiKey: `${REACT_APP_FIRE_BASE_KEY}`,
    authDomain: `${REACT_APP_AUTH_DOMAIN}`,
    projectId: `${REACT_APP_PROJECT_ID}`,
    storageBucket: `${REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${REACT_APP_APP_ID}`,
    measurementId: `${REACT_APP_MEASUREMENT_ID}`,
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