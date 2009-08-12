/*

Copyright (c) 2009 Stefano J. Attardi, http://attardi.org/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function($) {
    function toggleLabel() {
        var input = this;
        setTimeout(function() {
        var def = $(input).attr('title');
        if (!$(input).val() || ($(input).val() == def)) {
            $(input).prev('span').css('visibility', '');
            if (def) {
                var dummy = $('<label></label>').text(def).css('visibility','hidden').appendTo('body');
                $(input).prev('span').css('margin-left', dummy.width() + 3 + 'px');
                dummy.remove();
            }
        } else {
            $(input).prev('span').css('visibility', 'hidden');
        }
        }, 0);
    };

    function resetField() {
        var def = $(this).attr('title');
        if (!$(this).val() || ($(this).val() == def)) {
            $(this).val(def);
            $(this).prev('span').css('visibility', '');
        }
    };

    $('input, textarea').live('keydown', toggleLabel);
    $('select').live('change', toggleLabel);

    $(function() {
        $('input, textarea').blur(resetField);
        $('input, textarea').each(toggleLabel);
    });

})(jQuery);

