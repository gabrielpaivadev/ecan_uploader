$(document).ready(function(){
	$('#modal1').modal();
	$('#modal2').modal();
    $('#send').click(function(){
    	$('#modal1').modal('open');
    })
    $('#search').click(function(){
    	$('#modal2').modal('open');
    })
  });
         