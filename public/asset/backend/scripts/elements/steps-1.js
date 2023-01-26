'use strict';
/**
 * @author Batch Themes Ltd.
 * @description We use the approve.js library for form field validation. For additional information and demos go to the following urls:
 * https://github.com/CharlGottschalk/approvejs
 * http://charlgottschalk.co.za/projects/approvejs/demo
 */
(function() {
    $(function() {
        if (!element_exists('#form-steps-1')) {
            return false;
        }

        //firstname
        validateOnChange('#firstname-0', {
            title: 'First name',
            required: true
        }, 'First name is valid', 'Please enter a valid first name');

        //lastname
        validateOnChange('#lastname-0', {
            title: 'Last name',
            required: true
        }, 'Last name is valid', 'Please enter a valid last name');

        //email
        validateOnChange('#email-0', {
            title: 'Email',
            required: true,
            email: true
        }, 'Email is valid', 'Please enter a valid email');

		//age
        validateOnChange('#age-0', {
            title: 'Age',
            numeric: true
        }, 'Age is valid', 'Please enter a valid age');

        //university name
        validateOnChange('#university-name-1', {
            title: 'University name',
            required: true
        }, 'University name is valid', 'Please enter a valid university name');

        //degree level
        validateOnChange('#degree-level-1', {
            title: 'Degree level',
            required: true
        }, 'Degree level is valid', 'Please enter a valid degree level');

        //country
        validateOnChange('#country-1', {
            title: 'Country',
            required: true
        }, 'Country is valid', 'Please select a country');

        //language
        validateOnChange('#language-1', {
            title: 'Language',
            required: true
        }, 'Language is valid', 'Please select a language');

        //company
        validateOnChange('#company-name-2', {
            title: 'Company name',
            required: true
        }, 'Company name is valid', 'Please enter a valid company name');

        //position
        validateOnChange('#position-2', {
            title: 'Position',
            required: true
        }, 'Position is valid', 'Please enter a valid position');

        //job description
        validateOnChange('#job-description-2', {
            title: 'Job description',
            required: true
        }, 'Job description is valid', 'Please enter a valid job description');

		$('.go-back').on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr('data-target');
			$(target).trigger('click');
			return false;
		});

        $('#step-0').submit(function(e) {
            e.preventDefault();
            var fields = [];
            $('#step-0 .form-control').each(function() {
                $(this).focus().blur();
                fields.push($(this).attr('data-valid') === "true" ? true : false);
            });
			if(fields.includes(false)) {
				$('#steps .tab-0').trigger('click');
				$('#steps .tab-1').addClass('disabled');
				$('#steps .tab-2').addClass('disabled');
				return false;
			}
			$('#steps .tab-1').removeClass('disabled').trigger('click');
			$('#steps .tab-2').addClass('disabled');
            return false;
        });

        $('#step-1').submit(function(e) {
            e.preventDefault();
            var fields = [];
            $('#step-1 .form-control').each(function() {
                $(this).focus().blur();
                fields.push($(this).attr('data-valid') === "true" ? true : false);
            });
			if(fields.includes(false)) {
				$('#steps .tab-1').trigger('click');
				$('#steps .tab-2').addClass('disabled');
				return false;
			}
			$('#steps .tab-2').removeClass('disabled').trigger('click');
            return false;
        });

        $('#step-2').submit(function(e) {
            e.preventDefault();
            var fields = [];
            $('#step-2 .form-control').each(function() {
                $(this).focus().blur();
                fields.push($(this).attr('data-valid') === "true" ? true : false);
            });
			if(fields.includes(false)) {
				$('#steps .tab-2').trigger('click');
				return false;
			}
			console.log('all good');
            return false;
        });

    });
})();
