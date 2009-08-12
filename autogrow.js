$('textarea').live('keyup', function() {
    var dummy = $('<div></div>').html($(this).val().replace(/\n/g, '<br/>'));
    dummy.css({
        'font-size'  : $(this).css('font-size'),
        'font-family': $(this).css('font-family'),
        'width'      : $(this).css('width'),
        'padding'    : $(this).css('padding'),
        'line-height': $(this).css('line-height'),
        'overflow' : 'hidden',
    }).insertAfter($(this));
    if (dummy.height() > $(this).height())
        $(this).css('height', dummy.height() + 26);
   // dummy.remove();
});