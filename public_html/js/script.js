$(document).ready(function () {
    document.getElementById("contact")
    $("#contact").validate({
        debug: true,
        errorClass: "alert alert-danger",
        ErrorLabelContainer: "#output-area",
        errorElement: "div",
        //rules here define what is good or bad input
        //each rule starts wit the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true,
            },
            message: {
                required: true,
                maxlength: 2000
            },
        },
        Messages: {
            name: {
                required: "Name is a required field"
            },
            email: {
                email: "Please provide a valid email",
                required: "Email is a required field"
            }, message: {
                required: "Message is a required field",
                maxlength: "Message is too long"
            }
        },
        submitHandler: (form) => {
            $("contact").ajaxSubmit({
                type: "POST",
                url: $("contact").attr('action'),
                success: (ajaxOutput) => {
                    $("output-area").css("display","")
                    $("output-area").html(ajaxOutput)
                    if($(".alert-success" >= 1)) {
                        $("#contact") [0].reset()
                    }
                }
            })
        }
    })
})