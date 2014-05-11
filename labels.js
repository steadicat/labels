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

  function measureWidth(deflt) {
    var dummy = $('<label></label>').text(deflt).css('visibility','hidden').appendTo(document.body);
    var result = dummy.width();
    dummy.remove();
    return result;
  }

  function toggleLabel() {
    var input = $(this);
    var deflt = input.attr('title');
    var span = input.prev('span');
    setTimeout(function() {
      if (!input.val() || (input.val() == deflt)) {
        span.css('visibility', '');
        if (deflt) {
          span.css('margin-left', measureWidth(deflt) + 2 + 'px');
        }
      } else {
        span.css('visibility', 'hidden');
      }
    }, 0);
  };

  $(document).on('cut', 'input, textarea', toggleLabel);
  $(document).on('keydown', 'input, textarea', toggleLabel);
  $(document).on('paste', 'input, textarea', toggleLabel);
  $(document).on('change', 'select', toggleLabel);

  $(document).on('focusin', 'input, textarea', function() {
      $(this).prev('span').css('color', '#ccc');
  });
  $(document).on('focusout', 'input, textarea', function() {
      $(this).prev('span').css('color', '#999');
  });

  function init() {
    $('input, textarea, select').each(toggleLabel);
  };

  // Set things up as soon as the DOM is ready.
  $(init);

  // Do it again to detect Chrome autofill.
  $(window).load(function() {
    setTimeout(init, 0);
  });

})(jQuery);
