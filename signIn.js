function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
    if ($("#getConsent").is(":checked")) {
        if ($("#getPassword").val() == $("#confirmPassword").val()) {
            $("button.createAccount").attr("disabled", "");

            firebase.auth().createUserWithEmailAndPassword($("#getEmail").val(), $("#getPassword").val()).catch(function(error) {
                $("button.createAccount").removeAttr("disabled");
                
                if (error.message == "The email address is badly formatted.") {
                    $("#getError").text(_("We could not create your account. Your email address is badly formatted."));
                } else if (error.message == "The password must be 6 characters long or more.") {
                    $("#getError").text(_("We could not create your account. Please use a password that's over 6 characters."));
                } else if (error.message == "The email address is already in use by another account.") {
                    $("#getError").text(_("We could not create your account. Your email address has already been used by another account."));
                } else {
                    $("#getError").text(_("We could not create your account. Check your details and try again."));
                }
            });
        } else {
            $("#getError").text(_("Both passwords are different. Please retype your password in both fields."));
        }
    } else {
        $("#getError").text(_("Please accept the Terms of Service and Privacy Policy before continuing."));
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