import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAe9WwAGPRF4jF3vA3JCq0DLmuMfJkQ98o",
    authDomain: "crwn-db-a8d74.firebaseapp.com",
    projectId: "crwn-db-a8d74",
    storageBucket: "crwn-db-a8d74.appspot.com",
    messagingSenderId: "227376372576",
    appId: "1:227376372576:web:37643be5c2934b2211dc05",
    measurementId: "G-42STY466SX"
  };

  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(! userAuth) return
      

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }catch (error){
                console.log('error creating users', error);
          }
      }
      return userRef;
  }


  export const addCollectionAndDocuments = async (
      collectionKey, 
      objectsToAdd
      ) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });
      return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const {title, items} = doc.data();

          return {
              routName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          };
      });
      
      return transformedCollection.reduce((accumulator,collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
             }, {});
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;