$(document).ready(function () {

    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultcountdown').countdown({ until: austDay, format: 'odHMS' });
        $('#year').text(austDay.getFullYear());
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();
});

    // Form Validation
$(document).ready(function(){
    $(function(){
        var autsDay =  new Date();
        autsDay = new Date(autsDay.getFullYear() + 1, 1 - 1 , 26);
        $("#defaultcountdown").countdown({until: autsDay, format: "odHMS"})
    });
    $(".form-control").blur(function(){
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<dotpos+2 || dotpos+2>=x.length)
        {
            $(this).parents().find(".alert.alert-danger").fadeIn(300);
        }
        else{
            $(this).parents().find(".alert.alert-success").fadeIn(300);
        }
    });
    $(".form-control").blur(function(){
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if(atpos<1 || dotpos<dotpos+2 || dotpos+2>=x.length)
        {
            $(this).parents().find(".alert.alert-danger").fadeIn(300);
        }
        else{
            $(this).parents().find(".alert.alert-success").fadeIn(300);
        }
    });
});