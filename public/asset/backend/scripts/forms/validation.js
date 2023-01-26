'use strict';
/**
 * @author Batch Themes Ltd.
 * @description We use the approve.js library for form field validation. For additional information and demos go to the following urls:
 * https://github.com/CharlGottschalk/approvejs
 * http://charlgottschalk.co.za/projects/approvejs/demo
 */
(function() {
    $(function() {
        if (!element_exists('#forms-validation')) {
            return false;
        }
        //firstname
        validateOnChange('#firstname-1', {
            title: 'First name',
            required: true
        }, 'First name is valid', 'Please enter a valid first name');
        //lastname
        validateOnChange('#lastname-1', {
            title: 'Last name',
            required: true
        }, 'Last name is valid', 'Please enter a valid last name');
        //email
        validateOnChange('#email-1', {
            title: 'Email',
            required: true,
            email: true
        }, 'Email is valid', 'Please enter a valid email');
        //password
        validateOnChange('#password-1', {
            title: 'Password',
            range: {
                min: 4,
                max: 8
            }
        }, 'Password is valid', 'Please enter a valid password with at least 4 characters');
        //url
        validateOnChange('#url-1', {
            title: 'Url',
            required: true,
            url: true
        }, 'Url is valid', 'Please enter a valid url');
        //alphanumeric
        validateOnChange('#alphanumeric-1', {
            title: 'Alphanumeric',
            required: true,
            alphaNumeric: true
        }, 'Alphanumeric field is valid', 'Please enter numbers and letters only');
        //alpha
        validateOnChange('#alpha-1', {
            title: 'Alpha',
            alpha: true
        }, 'Letters field is valid', 'Please enter letters only');
        //numeric
        validateOnChange('#numeric-1', {
            title: 'Numbers',
            numeric: true
        }, 'Numbers field is valid', 'Please enter numbers only');
        //min
        validateOnChange('#min-1', {
            title: 'Minimum',
            min: 4
        }, 'Minimum field is valid', 'Please enter at least 4 characters');
        //max
        validateOnChange('#max-1', {
            title: 'Maximum',
            required: true,
            max: 8
        }, 'Maximum field is valid', 'Please enter less than 8 characters');
        //range
        validateOnChange('#range-1', {
            title: 'Range',
            range: {
                min: 4,
                max: 8
            }
        }, 'Range field is valid', 'Please enter between 4 and 8 characters');
        $('#form-validation-1').submit(function(e) {
            e.preventDefault();
            var isFormValid = true;
            $('#form-validation-1 .form-control').each(function() {
                $(this).focus().blur();
                var valid = $(this).attr('data-valid');
                if (!valid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                console.log('form is ok and can be submitted');
            } else {
                console.log('form is not ok and cannot be submitted');
            }
            return false;
        })
    });
})();
