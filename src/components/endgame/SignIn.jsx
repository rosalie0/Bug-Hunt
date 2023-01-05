import React from "react";
// import firebase from "firebase";
// make references to auth and firestore
// const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
