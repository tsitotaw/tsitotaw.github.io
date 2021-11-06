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
                //var obj=JSON.parse(data);
                for(var i=0; i< obj.length; i++) {
                  $('#deflist').append("<li>wordtype: " + obj[i]["wordtype"] + "<br>definition： " + obj[i]["definition"] + "</li><hr>");
                }
            },
            error: function(error){
                $('#deflist').append(error);
            },
        });
    });
    function showDefinition(data) {
        
        // var obj=JSON.parse(data);
        // for(var i=0; i< obj.length; i++) {
        //   $('#deflist').append("<li>wordtype: " + obj[i]["wordtype"] + "<br>definition： " + obj[i]["definition"] + "</li><hr>");
        // }
    }
    function showError(data) {
        alert("showError"+data);
    }
//    function printObject(o) {
//        var out = '';
//        for (var p in o) {
//            out += p + ': ' + o[p] + '\n';
//        }
//        alert(out);
//    }
});

