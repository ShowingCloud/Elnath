jQuery(document).ready(function() {
 /*   $('#selector_input').click(function(){
    	$('#product-variants').css('display','block');
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