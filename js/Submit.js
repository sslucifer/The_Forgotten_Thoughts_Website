var c=0;
function checkforsub()
{
    if(c==0)
    {
        document.getElementById('box').style.display="block";
        submitdata();
        c=1;
    }
    else{
        pop();
        c=0;
    }
}
function submitdata()
{
    //Getting Elements by ID
    var user_name = document.getElementById("name").value;
    var user_id = document.getElementById("insta_id").value;
    var user_thoughts = document.getElementById("thoughts").value;

    //Initializing Firestore
    var db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true});

    //Retriving User No. 
    var docRef = db.collection("User Number").doc("Val");
    let users=0;
    docRef.get().then(function(doc) {
            if (doc.exists) {
                users=doc.data().user_no+1;
                console.log("User No:", doc.data().user_no);

                //Updating User No.
                docRef.update({
                    user_no: users
                    })
                    .then(function() {
                         console.log("User No. Update Successfully: ",users);
                    })
                .catch(function(error) {
                    console.error("Error User No. Update: ", error);
                });

                //Setting the values in Firestore Database
                db.collection("Users").doc(users.toString()).set({
                    name: user_name,
                    insta_id: user_id,
                    thoughts: user_thoughts,
                    Val: users
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });

            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }   
    }).catch(function(error) {
    console.log("Error getting User No.:", error);
    });   
}
function pop()
{
    document.getElementById('box').style.display="none";
    document.getElementById("name").value = "";
    document.getElementById("insta_id").value = "";
    document.getElementById("thoughts").value = "";
}