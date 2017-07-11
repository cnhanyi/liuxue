var Login = function() {

    var handleLogin = function() {

        var valid = $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                account: {
                    required: true
                },
                pwd: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                account: {
                    required: "用户名是必须填写的."
                },
                pwd: {
                    required: "密码是必须填写"
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                var data = {};
                data['account'] = $('[name=account]').val();
                data['pwd'] = $('[name=pwd]').val();
                $.ajax({
                    url:'/index.php/getway/login',
                    data:data,
                    type:'post',
                    dataType:'json'
                }).then(function(d){
                    if(d.reCode == 0){
                        location.href="/index.php/index/index"
                    }else{
                        alert(d.data);
                    }
                })
           }
        });

        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }

    return {
        //main function to initiate the module
        init: function() {
            handleLogin();
        }

    };

}();

$(function(){
    Login.init();
})
