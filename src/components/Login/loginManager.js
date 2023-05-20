import { initializeApp } from "firebase/app";
import { signOut, onAuthStateChanged, FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import firebaseConfig from "../firebase.config";

// Initialize Firebase
export const initializeLoginFramework = () => {
    initializeApp(firebaseConfig);
}


// Sign in with Google 

export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, googleProvider)
        .then((result) => {

            const user = result.user;
            user.success = true;
            return user;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        })
}

// sign in with Facebook

export const handleFbSignIn = () => {
    const fbProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, fbProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            user.success = true;
            return user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
}


// Create user with Email & Password

export const createUserWithEmailAndPass = (firstName, lastName, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            const name = `${firstName + ' ' + lastName}`;
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


// Signout 

export const handleSignOut = () => {
    const auth = getAuth();
    return signOut(auth)
        .then((result) => {
            const SignedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false
            }
            return SignedOutUser;
        })
        .catch((error) => {

        })
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





