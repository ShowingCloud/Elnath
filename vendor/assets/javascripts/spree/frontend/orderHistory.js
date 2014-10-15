jQuery(document).ready(function() {
	$("#timeSelector").change(function(){
		var timeSeconds = $(this).val()*30*24*60*60;
		if(timeSeconds!=0)
		{
			$('.myorder').hide();
			$('.myorder').each(function(){
				if($(this).attr('interval_time')<timeSeconds)
				{
					$(this).show();
				}
			});
		}
		else
		{
			$('.myorder').show();
		}
	});
});