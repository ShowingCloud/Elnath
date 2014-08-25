jQuery(document).ready(function() {
 /*   $('#selector_input').click(function(){
    	$('#product-variants').css('display','block');
    });*/
	$('[data-hook="product_properties"]>h6').html('产品信息');
	
	if(typeof($('span[itemprop="price"]').html()) != "undefined"){
		var priceDisplay = $('span[itemprop="price"]').html().replace('CNY','');
		$('#discount_price').html(priceDisplay);
		$('#original_price').html(priceDisplay);
	}
	//商品详情和评论之间的div切换
	var selectItemPre = 'productDetailsItem';
	$('#productDetailsItem').click(function(){
		if(selectItemPre!=$(this).attr('id'))
		{
			$('#'+selectItemPre).css('background-color','white');
			$('#'+selectItemPre).css('color','black');
			$(this).css('background-color','#0FA6BB');
			$(this).css('color','white')
			$('div[data-hook="description"]').show();
			$('#reviews').hide();
			//$('#afterSalesDiv').hide();
			selectItemPre=$(this).attr('id');
		}
	});
	$("#newCommentsItem").click(function(){
		if(selectItemPre!=$(this).attr('id'))
		{
			$('#'+selectItemPre).css('background-color','white');
			$('#'+selectItemPre).css('color','black');
			$(this).css('background-color','#0FA6BB');
			$(this).css('color','white')
			$('div[data-hook="description"]').hide();
			$('#reviews').show();
			//$('#afterSalesDiv').hide();
			selectItemPre=$(this).attr('id');
		}
	}); 
	/*
	$("#afterSalesItem").click(function(){
		if(selectItemPre!=$(this).attr('id'))
		{
			$('#'+selectItemPre).css('background-color','white');
			$('#'+selectItemPre).css('color','black');
			$(this).css('background-color','#0FA6BB');
			$(this).css('color','white')
			$('div[data-hook="description"]').hide();
			$('#reviews').hide();
			$('#afterSalesDiv').show();
			selectItemPre=$(this).attr('id');
		}
	});*/



    $('#product-variants li label').click(function(){
    	var sizeAndColorStr=$(this).html().substring($(this).html().indexOf(':')+1,$(this).html().length-10);
    	//alert(sizeAndColorStr.indexOf(':'));
    	sizeAndColorStr=sizeAndColorStr.replace(new RegExp(","),"  ");
    	//sizeAndColorStr.substring(sizeAndColorStr.indexof(':'),sizeAndColorStr.length);
    	$('#sizeAndColorInput').html(sizeAndColorStr);
    	$('#product-variants').css('display','none');
    });

    $(document).click(function(e){
		if( $(e.target).attr("id")!='select_size_color' && $(e.target).attr("id")!='sizeAndColorInput' && $(e.target).attr("id")!='showListImg'){
			if($('#product-variants').css('display')=='block')
			{
				$("#product-variants").css('display','none');
			}
		}else{
			if($('#product-variants').css('display')=='block')
			{
				$("#product-variants").css('display','none');
			}else{
				$("#product-variants").css('display','block');
			}
		}
    });
});