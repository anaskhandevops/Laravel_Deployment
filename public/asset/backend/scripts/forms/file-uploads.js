'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#forms-file-uploads')) {
            return false;
        }
        /*
         * To upload files, open the file-uploads folder and run the following command:
         * php -S localhost:5000
         * This starts a development server with a simple upload script that uploads files to the uploads folder
         * */
        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone('#my-dropzone', {
            url: 'http://localhost:5000/upload.php',
            dictDefaultMessage: 'Drop your files here to upload'
        });
        //		to get a list of available callbacks, uncomment the next 5 lines
        //		for(var i in myDropzone._callbacks) {
        //			if(typeof myDropzone._callbacks[i] === 'object') {
        //				console.log(i);
        //			}
        //		}
    });
})();
