jQuery(document).ready(function() {
	$('.deleteProductBtn').click(function(){
		var btnName = $(this).parent().parent().parent().find('.cart-item-delete').find('.delete').click();
	});

	$('.selectAllCheckbox').click(function(){
		$('.itemCheckbox').click();
	});

	$('#topCheckoutBtn').click(function(){
		var order={};
		order['line_items_attributes'] = [];
		var rowLength = $("#line_items").children("tr").length;
		for(var i=0;i<rowLength;i++)
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
				}
				/*,
			statusCode: {
			    302: function(jqXHR) {
			    	alert('123');
			        window.location.href=jqXHR.getResponseHeader("Location");
			    },
			    200:function(jqXHR) {
			    	alert('456');
			    },*/
			}
		).done(function(data, textStatus){
			alert('textStatus:'+textStatus);
			console.log(data);
			if (data.redirect) {
        		window.location.href = data.redirect;
    		}
		}).fail(function(resp){
			alert('failed');
		});
	});

});
