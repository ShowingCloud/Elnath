var j = 1;
	function cycle(){
		if(j > 4){
			j = 1;
		}
		$('.m-carousel').carousel('move', j);
		j++;
	}
setInterval('cycle()',3000);
