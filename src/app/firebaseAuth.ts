// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// // Sign up with email and password
// export const signUpWithEmailAndPassword = async (email: string, password: string) => {
//     const auth = getAuth();
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         return userCredential.user;
//     } catch (error) {
//         throw error;
//     }
// };

// // Sign in with email and password
// export const signInWithEmailAndPassword: any = async (email: string, password: string) => {
//     const authInstance = getAuth();
//     try {
//         const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
//         return userCredential.user;
//     } catch (error) {
//         throw error;
//     }
// };
// // Sign out
// export const signOutUser = async () => {
//     const auth = getAuth();
//     try {
//         await signOut(auth);
//     } catch (error) {
//         throw error;
//     }
// };
