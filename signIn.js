function signIn() {
    firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
        $("#error").text("We could not sign you in: " + error.message);
    });
}

$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "account.html";
        }
    });
});