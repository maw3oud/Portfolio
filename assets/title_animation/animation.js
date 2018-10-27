// JavaScript Document

$(function(){
	$('.repeat').mouseover(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
        	$(indicator).parent().addClass(classes);
        }, 20);
    });
});