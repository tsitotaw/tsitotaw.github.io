"use strict";
$(document).ready(function(){
    $("#btnLookup").click(function(){
        var word = $("#txtword").val();
        $.ajax({
            url: 'http://localhost:8001/entry/' + word,
            type: 'GET',
            data: {"word" :word},
            success: function(obj){
                $('#deflist').html("");
                for(var i=0; i< obj.length; i++) {
                  $('#deflist').append("<li>wordtype: " + obj[i]["wordtype"] + "<br>definition： " + obj[i]["definition"] + "</li><hr>");
                }
            },
            error: function(error){
                $('#deflist').append(error);
            },
        });
    });
});

