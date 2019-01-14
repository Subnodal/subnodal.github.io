function switchTo(page, switchFrom = -1) {
    if (switchFrom == 0) {
        $("#getEmail").val($("#email").val());
        $("#getPassword").val($("#password").val());
    } else {
        $("#email").val($("#getEmail").val());
        $("#password").val($("#getPassword").val());

        $("#confirmPassword").val("");
    }

    $("#error, #getError").text("");

    $(".accountPage").hide();
    page.show();
}

function signIn() {
    firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
        $("#error").text(_("We could not sign you in. Check your details and try again."));
    });
}

function nextAfterSignUp() {
    if ($("#getPassword").val() == $("#confirmPassword").val()) {
        alert("Coming soon! You don't yet have an account.");
    } else {
        $("#getError").text(_("Both passwords are different. Please retype your password in both fields."));
    }
}

$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "account.html";
        }
    });

    $("#password").keydown(function(e) {
        if (e.keyCode == 13) {
            signIn();
        }
    });

    switchTo($(".signInSwitch"));
});