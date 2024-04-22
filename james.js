

const firebaseConfig = { 
    // Your firebase configuration data  
}; 
  
// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig); 
  
function showUserProfile() { 
    const user = firebase.auth().currentUser; 
    if (user !== null) { 
        // The user object has basic properties  
        // such as display name, email, etc. 
        const displayName = user.displayName; 
        const email = user.email; 
        const photoURL = user.photoURL; 
        const emailVerified = user.emailVerified; 
        console.log( 
            "Display Name -", 
            displayName, 
            ", Email -", 
            email, 
            ", EmailVerified - ", 
            emailVerified, 
            " ,Photo Url -", 
            photoURL 
        ); 
    } 
} 
  
function showUserProfile1() { 
    const user = firebase.auth().currentUser; 
  
    if (user !== null) { 
        user.providerData.forEach((profile) => { 
            console.log("Sign-in provider: " + profile.providerId); 
            console.log("  Provider-specific UID: " + profile.uid); 
            console.log("  Name: " + profile.displayName); 
            console.log("  Email: " + profile.email); 
            console.log("  Photo URL: " + profile.photoURL); 
        }); 
    } 
} 
