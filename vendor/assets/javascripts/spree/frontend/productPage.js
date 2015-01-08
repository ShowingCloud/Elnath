jQuery(document).ready(function() {
	//商品图片滚动条
	$("#product-thumbnails").attr("class", "thumbnails jcarousel jcarousel-skin-tango");
    $("#product-thumbnails li img").attr("height", "115px");
    $("#product-thumbnails li img").attr("width", "115px");
    jQuery('#product-thumbnails').jcarousel({
        vertical: true,
        scroll: 2
    });
	$('.stockRemain').each(function(){
		if($(this).val()==0)
		{
			$(this).parent().find('.variant-description').css('color','#AAA');
		}
	});
	$('#add-to-cart-button').click(function(e){
		//alert($('input[name="variant_id"]:checked').next().html());
		if($('input[name="variant_id"]:checked').next().find('.stockRemain').val()==0)
		{
			alert('您选择的颜色尺码没有库存！');
			e.preventDefault(); 
		}
	});
	
	/* $('#selector_input').click(function(){
    	$('#product-variants').css('display','block');
    });*/
	//
	if($('[itemprop="browsedItem"]>[itemprop="price"]').length!=0)
	{
		$('[itemprop="browsedItem"]>[itemprop="price"]').html($('[itemprop="browsedItem"]>[itemprop="price"]').html().replace('CNY',''));
	}
	$('[data-hook="product_properties"]>h6').html('产品信息');
	
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
    	var sizeAndColorStr=$(this).find('.variant-description').html().substring($(this).find('.variant-description').html().indexOf(':')+1,$(this).find('.variant-description').html().length);
		//alert($(this).find('.variant-description').html());
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
				if($('input[name="variant_id"]:checked').next().find('.stockRemain').val()==0)
				{
					$('#stockQuantity').html('0');
				}
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
	
	//放大镜功能 
	$('img[itemprop="image"]').mouseover(function(){
		if(typeof($('.linkToLargeImg>img').attr('src'))!='undefined')
		{
			$(".linkToLargeImg").attr('href',$('.linkToLargeImg>img').attr('src').replace('product/','large/'));
			//$(".zoomWrapperImage>img").attr('src',$('.linkToLargeImg>.zoomPad>img').attr('src').replace('product/','large/'));
		}else
		{
			if(typeof($('.linkToLargeImg>.zoomPad>img').attr('src'))!='undefined')
			{
				$(".linkToLargeImg").attr('href',$('.linkToLargeImg>.zoomPad>img').attr('src').replace('product/','large/'));
				$(".zoomWrapperImage>img").attr('src',$('.linkToLargeImg>.zoomPad>img').attr('src').replace('product/','large/'));
			}
		}
	});
	if(typeof($('.linkToLargeImg>img').attr('src'))!='undefined')
	{
	  $(".linkToLargeImg").attr('href',$('.linkToLargeImg>img').attr('src').replace('product/','large/'));
	}
   var options = {  
            zoomType: 'standard',  
            lens:true,  
            preloadImages: false,
			title:false,
            alwaysOn:false,  
            zoomWidth: 300,  
            zoomHeight: 300,
            xOffset:10, 
            //...MORE OPTIONS  
    };  
  $('.linkToLargeImg').jqzoom(options);
});