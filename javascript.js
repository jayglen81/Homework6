$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea');
    console.log("Page Loaded");
})

var searchArray = ["Dog", "Cat", "Bird"];

function populateButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0; i<searchArray.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}
$(document).on('click', 'searchButton',function(){
    var type = $(this).data('type');
    var queryURL = "http://aoi.giphy.com/v1/gifs/search?q="+type+"&api_key=dc6zat0xFJmzCd&limit=10"
}
