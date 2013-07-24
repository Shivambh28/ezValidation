ezValidation
============

Easily add validation to any form.
DEMO: https://rawgithub.com/Shivambh28/ezValidation/master/index.html

Instructions
============

**HTML**

1) Apply class `requiredFields` to your form.

2) Apply class `req` to fields which you want to be required

*Optional*
- If you have an email field, also apply class `email` along with class `req`.


**JS**

Call `ezValidation.init()` in your js file after jQuery include. 

NOTE
-------------------------

Currently under development, will be turned into a full plugin soon.

Available Configuration Options:
-------------------------
      
       OPTION        DEFAULT VALUE

	   reqClassName     =   'req'
	   errorClassName   =  'error'
	   emailClassName   =   'email'
