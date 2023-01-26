'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#extras-markdown')) {
            return false;
        }

		//https://daringfireball.net/projects/markdown/syntax

		$('#html-output-1').html(markdown.toHTML($('#markdown-example-1').val()));
		$('#markdown-example-1').on('change', function(e) {
			e.preventDefault();
			var md_content = $(this).val();
			$('#html-output-1').html(markdown.toHTML(md_content));
			return false;
		})

		$('#html-example-1').on('change', function(e) {
			e.preventDefault();
			var html_content = $(this).val();
			$('#markdown-output-1').html(toMarkdown(html_content));
			return false;
		})

    });
})();
