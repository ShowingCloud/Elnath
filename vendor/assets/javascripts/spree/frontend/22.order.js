jQuery(document).ready(function() {
	/*$("#order_bill_address_attributes_firstname").blur( function () { 
		$("#order_bill_address_attributes_lastname").val('-');
	});
	$("#order_ship_address_attributes_firstname").blur( function () { 
		$("#order_ship_address_attributes_lastname").val('-');
	});*/
	$("#logoutSelector").change(function(){
		if( $("#logoutSelector").val()==1)
		{
			window.location='/logout';
		}
	});
	$('.line_item_quantity').bind('input propertychange', function() {
		//alert($(this).val()*$(this).parent().attr('unit_price'));
		$(this).parent().parent().find('.cart_item_total').find('.linePriceSpan').html(($(this).val()*$(this).parent().attr('unit_price')).toFixed(1));
		var orderTotal = 0;
		$('.linePriceSpan').each(function(){
			orderTotal+=parseInt($(this).html());
		});
		$('#totalPriceSpan').html(orderTotal.toFixed(1));
		$('#productsPriceSpan').html(orderTotal.toFixed(1));
	});
	$('.deleteProductBtn').click(function(){
		$(this).parent().parent().parent().find('.cart-item-delete').find('.delete').click();
	});
	
	if('undefined'!=typeof($('.cart-item-price').html()))
	{
		$('.cart-item-price').html($('.cart-item-price').html().replace('元','￥'));
		$('.cart-item-total').html($('.cart-item-total').html().replace('元','￥'));
	}
	$('#deleteSelectItem').click(function(){
		var idCount=0;
		var deleteId='';
		$('.itemCheckbox').each(function(){
   			if ($(this).is(':checked'))
   			{
   				deleteId=$(this).parent().parent().find('.cart-item-delete').find('.delete').attr('id');
				$('#order_line_items_attributes_'+idCount+'_quantity').attr('value','0');
   			};
			idCount++;
  		});
		$('#'+deleteId).click();
	});
	
	$('.selectAllCheckbox').click(function(){
		if($(this).is(':checked'))
		{
			$('input[type="checkbox"]').prop('checked',true);
		}
		else
		{
			$('input[type="checkbox"]').prop('checked',false);
		}
	});

	$('.itemCheckbox').click(function(){
		 //当没有选中某个子复选框时，selectAllCheckbox取消选中
		$('.itemCheckbox').each(function(){
   			if (!$(this).checked)
   			{
   				$('.selectAllCheckbox').prop('checked',false);
   			};
  		});
		 //当所有子复选框选中的时候,selectAllCheckbox也被选中
	    var chsub = $(".itemCheckbox").length; 
	    var checkedsub = $(".itemCheckbox:checked").length;
	    if (checkedsub == chsub) {
	        $(".selectAllCheckbox").prop("checked", true); 
	    }
	});
	
	$('.checkoutBtn').click(function(){
		//var order={};
		//order['line_items_attributes'] = [];
		var rowLength = $("#line_items").children("tr").length;
		var hasChecked = false;
		var idCount=0;
		$('.itemCheckbox').each(function(){
			$(this).attr('id','itemcheckbox'+idCount);
			idCount++;
			if($(this).is(':checked'))
			{
				hasChecked=true;
			}
		});

		if(!hasChecked)
		{
			alert('请选择商品！');
			return;
		}
		for(var i=0;i<rowLength;i++)
		{
			if(!$('#itemcheckbox'+i).is(':checked'))
			{	
				//ToDo待后续修改，暂时未勾选的商品数量改为0
				$('#order_line_items_attributes_'+i+'_quantity').attr('value','0');
				//$('#order_line_items_attributes_'+i+'_id').remove();
			}
		}
		$('#checkout-link').click();
		/*for(var i=0;i<rowLength;i++)
		{
			order['line_items_attributes'][i] = {};
			order['line_items_attributes'][i]['quantity'] = $('#order_line_items_attributes_'+i+'_quantity').attr('value');
			order['line_items_attributes'][i]['id'] = $('#order_line_items_attributes_'+i+'_id').attr('value');
		}
		$.ajax ({
			url:		"/cart",
			type:		"POST",
			dataType:	"html",
			data:	{
				_method:'patch',
				order:order
				}*/
				/*,
			statusCode: {
			    302: function(jqXHR) {
			    	alert('123');
			        window.location.href=jqXHR.getResponseHeader("Location");
			    },
			    200:function(jqXHR) {
			    	alert('456');
			    },*/ 
			/*}).done(function(data, textStatus){
			alert('textStatus:'+textStatus);
			console.log(data);
			if (data.redirect) {
        		window.location.href = data.redirect;
    		}
		}).fail(function(resp){
			alert('failed');
		});*/
	});

});
