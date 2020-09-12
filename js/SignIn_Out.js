googleSignin = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {


            var user = firebase.auth().currentUser;

            if (user != null) {
                var url = "LoadingIn.html";
                window.location = url;
                user.providerData.forEach(function (profile) {
                    console.log("Sign-in provider: " + profile.providerId);
                    console.log("  Provider-specific UID: " + profile.uid);
                    console.log("  Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    console.log("  Photo URL: " + profile.photoURL);
                });
            }
        } else {
            base_provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(base_provider).then(function (result) {
                console.log("Success to Sign In")
                var user = firebase.auth().currentUser;
                var url = "LoadingIn.html";
                window.location = url;
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                }
            }).catch(function (err) {
                console.log(err)
                console.log("Failed to Sign In")
            })
        }
    });
}
