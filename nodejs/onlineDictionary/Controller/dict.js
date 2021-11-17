"use strict";
$(document).ready(function(){
    
    let clickHandler = function(){
        let word = $("#txtword").val();
        $.ajax({
            url: 'http://localhost:8081/entry/' + word,
            type: 'GET',
            success: (words) => {
                $('#defnitions').html("");
                

                if(words.length < 1){
                    $('#defnitions').append("<p> no definition found for the specified term - or no term specified </p>");
                    return false;
                }
                
                for(let i=0; i< words.length; i++) {
                  $('#defnitions').append(`
                        <li>
                            wordtype: ${words[i]["wordtype"]} <br>
                            definition： ${words[i]["definition"]}
                        </li>
                        <hr>`
                    );
                }
            },
            error: function(error){
                $('#defnitions').append(error);
            },
        });
    }

    $("#btnLookup").on({
        'click':clickHandler,
        'keypress': (e) => {
            if(e.which == 13) {
                clickHandler()
            }
        }});
});

