$(document).ready(function() {
    let span = $('p').parent('.content');//.siblings('h1');
    // let span = $('p').parent().not('.content');//.siblings('h1');
    // let span = $('p#first').parent();
    console.log(span);

    // span.each(function(index, el) {
    //     $(this).css({
    //         'border': index+5+'px solid red',
    //         'background-color': 'gray'
    //     });
    // });
    
    let listLogin = $('li');
    listLogin.each((index, ele) => {
        $(ele).css({
            border: '1px solid red'
        });
    });

    // $( "li.item-a" ).parent().css( "background-color", "red" );
});