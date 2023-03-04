import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
export const initializeLoginFramework = () => {
    initializeApp(firebaseConfig);
}

// Create user with Email & Password

export const createUserWithEmailAndPass = (name, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            verifyEmail();
            return newUserInfo;
            // const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

// Sign in user with Email & Pass


export const signInWithEmailAndPass = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
            // const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

// Update user name 


const updateUserName = name => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        // Profile updated!
        console.log('user name updated successfully');
    }).catch((error) => {
        // An error occurred
        console.log(error)
    });
}

// Verify Email

const verifyEmail = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
}

// Reset password

export const resetPassword = email => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}



