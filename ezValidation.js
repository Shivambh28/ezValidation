ezValidation = {

  form: '.requiredFields',

  config: {
    reqClassName: 'req', 
    errorClassName: 'error',
    emailClassName: 'email'
  },

  validateEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  },

  init: function() {
    var ezVal = ezValidation;
        config = ezVal.config;

    $(this.form).submit(function(e) {
    
        var req = $(this).find('.'+config.reqClassName), 
            errorCheck = 0;

        req.each(function() {

            var $this = $(this),
                email = $this.hasClass(config.emailClassName),
                defaultVal = $this.prop('defaultValue'); //cache default val
           
            
            if ( email && !ezVal.validateEmail( $this.val() )) {
              $this.addClass(config.errorClassName);
            } else if (!email && defaultVal === this.value || this.value === '' || this.value.length < 3) {
              $this.addClass(config.errorClassName) 
            } else {
              $this.removeClass(config.errorClassName);
            }
      
        });

        errorCheck = $(this).find('.'+config.errorClassName);
        
        if ( errorCheck.length === 0 ) {
            return true;
        } else {
            return false;
        }
        
    });
    
  } 

}


ezValidation.init();