export class ContactUs {
    constructor() {

        this.name = $("#name");
        this.email = $("#email");
        this.age = $("#age");
        this.phone = $("#phone");
        this.password = $("#password");
        this.repassword = $("#repassword");
        this.checkSubmit()

    }



    checkSubmit() {
        let index = 0;
        let namepattern = /^[a-zA-Z" "]{1,}$/;
        let emailpattern = /^([a-zA-Z\d]+)@([a-zA-Z\d]+)[.]([a-zA-Z]{2,})$/;
        let phonepattern = /^[0-9]{10,12}$/;
        let agepattern = /^[0-9]{1,2}$/;
        let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        function phoneRegex() {
            let phonepattern = /^[0-9]{10,12}$/;

            if (phonepattern.test($("#phone").val())) {
                $("#phone").next().fadeOut(100)
                $("#phone").addClass("active");
            } else {
                $("#phone").next().fadeIn(100)
                $("#phone").removeClass("active");
            }
        }
        function repasswordFunc() {
            if ($("#repassword").val() == $("#password").val()) {
                $("#repassword").next().fadeOut(100)
                $("#repassword").addClass("active");
            } else {
                $("#repassword").next().fadeIn(100)
                $("#repassword").removeClass("active");
            }
        }
        function passwordRegex() {
            let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

            if (passwordpattern.test($("#password").val())) {
                $("#password").next().fadeOut(100)
                $("#password").addClass("active");
            } else {
                $("#password").next().fadeIn(100)
                $("#password").removeClass("active");
            }
        }
        let checkInputs = () => {
            let inputValid = namepattern.test($("#name").val());
            let emailValid = emailpattern.test($("#email").val());
            let ageValid = agepattern.test($("#age").val());
            let phoneValid = phonepattern.test($("#phone").val());
            let passwordValid = passwordpattern.test($("#password").val());
            if ($("#name").val()) {
                if (inputValid) {
                    $("#name").next().fadeOut(100);
                } else {
                    $("#name").next().fadeIn(100);
                }
            }
            if ($("#email").val()) {
                if (emailValid) {
                    $("#email").next().fadeOut(100)
                } else {
                    $("#email").next().fadeIn(100);
                }
            }
            if ($("#age").val()) {
                if (ageValid) {
                    $("#age").next().fadeOut(100)
                } else {
                    $("#age").next().fadeIn(100);
                }
            }
            if ($("#phone").val()) {
                if (phoneValid) {
                    $("#phone").next().fadeOut(100)
                } else {
                    $("#phone").next().fadeIn(100);
                }
            }
            if ($("#password").val()) {
                if (passwordValid) {
                    $("#password").next().fadeOut(100)
                } else {
                    $("#password").next().fadeIn(100);
                }
            }
            if ($("#repassword").val()) { 
                if ($("#repassword").val() == $("#password").val()) {
                    $("#repassword").next().fadeOut(100)
                    $("#repassword").addClass("active");
                } else {
                    $("#repassword").next().fadeIn(100)
                    $("#repassword").removeClass("active");
                }
            }
            if (inputValid && emailValid && ageValid && phoneValid && passwordValid && ($("#repassword").val() == $("#password").val())) {
                $('#submitBtn').removeClass("disabled");
            } else {
                $('#submitBtn').addClass("disabled");
            }
        }
        this.name.on("input", checkInputs);
        this.email.on("input", checkInputs);
        this.age.on("input", checkInputs);
        this.phone.on("input", checkInputs);
        this.password.on("input", checkInputs);
        this.repassword.on("input", checkInputs);


    }
}
