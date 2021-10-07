function checkValidates(){
    var username = document.forms["RegForm"]["username"]
    var email = document.forms["RegForm"]["email"]
    var pw = document.forms["RegForm"]["password"]
    var cpw = document.forms["RegForm"]["confirm_password"]

    if (username.value == "")
    {
        window.alert("Please enter username.");
        username.focus();
        return false;
    }

    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;   
    }

    if (pw.value == "")
    {
        window.alert("Please enter password.");
        pw.focus();
        return false;
    }

    if (cpw.value != pw.value)
    {
        window.alert("Passwords mismatch");
        cpw.focus();
        return false;
    }   
}