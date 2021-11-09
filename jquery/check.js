let indexer = 0;
$('span').parentsUntil('body').each(function(index) {
    if(indexer < 2)
    {
        $(this).css({
            "backgroundColor": 'green'
        });
        indexer++;
    }
});
