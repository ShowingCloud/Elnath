var j = 1;
	function cycle(){
		if(j > 4){
			j = 1;
		}
		$('.m-carousel').carousel('move', j);
		j++;
	}
setInterval('cycle()',3000);

jQuery(document).ready(function() {
	$('#hotLineImg').click(function(){
		$('#shieldDiv').css('display','block');
		$('#customerServiceDiv').css('display','block');
	});
	$('#closeImg').click(function(){
		$('#shieldDiv').css('display','none');
		$('#customerServiceDiv').css('display','none');
	});
});