
googleSignout = () => {
    firebase.auth().onAuthStateChanged(function (user) {
     if (user) {


       var user = firebase.auth().currentUser;

        if (user != null) {
            firebase.auth().signOut().then(function () {

                console.log("Sucessfully Signed Out")
            }).catch(function (error) {
                console.log(err)
                console.log("Failed to Sign Out")
            });
            var url = "Loading.html";
            window.location = url;
         }
    } else {
        var url = "Loading.html";
        window.location = url;
    }
    });
}
function showpage() {
    var myVar;
    myVar = setTimeout(check, 3000);
}

function check() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {


            var user = firebase.auth().currentUser;

            if (user != null) {
                var url = "PAGE_2.html";
                window.location = url;

            }
        } else {
            var url = "index.html";
            window.location = url;
        }
    });
}
