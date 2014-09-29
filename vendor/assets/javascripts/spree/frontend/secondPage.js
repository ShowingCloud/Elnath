jQuery(document).ready(function() {
	if($('nav.pagination>span:first-child').length!=0&&$('#imagePathHid').length!=0)
	{
		
		$('nav.pagination>span:first-child').before('<input type="button" id="toPrevPage"/>');
		$('nav.pagination>span:last-child').after('<span class="page" id="lastPageSpan" style="display:none"><a></a></span><input type="button" id="toNextPage"/>');
		var rightImgPath = $('#imagePathHid').val().replace('Left','Right');
		$('#toPrevPage').css({'border':'none','width':'20px','height':'20px','background-image':'url('+$('#imagePathHid').val()+')','background-repeat':'no-repeat','background-size':'20px'});
		$('#toNextPage').css({'border':'none','width':'20px','height':'20px','background-image':'url('+rightImgPath+')','background-repeat':'no-repeat','background-size':'20px'});
		//var currentPage = parseInt($('.current').html());

		if($('.pagination>.gap>span').length!=0)
		{
			$('.gap>.translation_missing').html('...');
			if($('.last>a').length!=0)
			{
				var pageLength = $('.last>a').attr('href').substring($('.last>a').attr('href').indexOf('=')+1,$('.last>a').attr('href').length);
				$('#lastPageSpan>a').prop('href',"/products?page="+pageLength);
				$('#lastPageSpan>a').html(pageLength);
				$('#lastPageSpan').css('display','inline-block');
			}
		}
		$('#toNextPage').click(function(){
			if($('.pagination>.next>a').length!=0)
			{
				window.location=$('.pagination>.next>a').attr('href');
				if($('.pagination>.gap>span').length == 0)
				{
					$('#lastPageSpan').css('display','none');
				}
				else
				{
					$('#lastPageSpan').css('display','inline-block');
				}
			}
		});
		$('#toPrevPage').click(function(){
			if($('.pagination>.prev>a').length!=0)
			{
				window.location=$('.pagination>.prev>a').attr('href');
				if($('.pagination>.gap>span').length == 0)
				{
					$('#lastPageSpan').css('display','none');
				}
				else
				{
					$('#lastPageSpan').css('display','inline-block');
				}
			}
		});
	}
	if($('.taxonomy-root').length!=0)
	{
		var i = 1;
		$('.taxonHead').each(function(){
			var originHref=$('#taxon_ul'+i).find('li').find('a').attr('href');
			var linkArray=originHref.split('/');
			var targetHref=originHref.replace(linkArray[linkArray.length-1],'');
			$(this).attr('href',targetHref);
			i++;
		});
		
	}
});