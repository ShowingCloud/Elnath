/*function displayProduct(){
	var keyWords=window.location.search.split('=')[1];
	if(keyWords!='')
	{
		$.ajax ({
				url:	"/api/products?q[meta_keywords_cont]="+keyWords,
				type:	"get",
				dataType:	"json",
			}).done(function(resp){
				for(var i=0;i<resp.count;i++){
					if(i != 0 )
					{
						$( "#productList li:first-child").clone(true).prependTo("#productList");
					}
					$("#productList li:first-child .productImage").prop('src',resp.products[i].master.images[0].product_url);
					$("#productList li:first-child .linkToProduct").prop('href','/products/'+resp.products[i].master.slug);
					$("#productList li:first-child .productItemName").html(resp.products[i].name);
					$("#productList li:first-child .salePrice").html(resp.products[i].display_price);
					$("#productList li:first-child .hangTagPrice").html('￥'+resp.products[i].master.cost_price);
				}
			});
	}
}
*/

jQuery(document).ready(function(){
	$('#datetimepicker4').datetimepicker({
    //yearOffset:2,
    lang:'ch',
    timepicker:false,
    format:'Y/m/d',
    formatDate:'Y/m/d',
   // minDate:'-1970/01/02', // yesterday is minimum date
   // maxDate:'+1970/01/02' // and tommorow is maximum date calendar
	});
	$('#open').click(function(){
		$('#datetimepicker4').datetimepicker('show');
	});
	
	$('div[data-hook="buttons"]>input[name="commit"]').click(function(e){
		if($('#billing_district').val()==0&&$('#order_bill_address_id_0').is(':checked'))
		{
			alert('请填写省/市/区');
			e.preventDefault();
			return;
		}
		if($('#shipping_district').val()==0&&$('#order_ship_address_id_0').is(':checked'))
		{
			alert('请填写省/市/区');
			e.preventDefault();
		}
	});
	$('.cityAddress>select:first-child').change(function(){
		if($(this).val()==0)
		{
			return;
		}
		var selectorId=$(this).next().attr('id');
		var proviceId = $(this).val();
		getNextLocality(selectorId,proviceId);
	});
	$('.cityAddress>select:nth-child(2)').change(function(){
		if($(this).val()==0)
		{
			return;
		}
		var selectorId=$(this).next().attr('id');
		var proviceId = $(this).val();
		getNextLocality(selectorId,proviceId);
	});
	
	$('.cityAddress>select:nth-child(3)').change(function(){
		if($(this).val()==0)
		{
			return;
		}
		var addressType=$(this).attr('id').substring(0,4);
		$('#order_'+addressType+'_address_attributes_city').val($(this).prev().prev().children('option:selected').text()+' '+$(this).prev().children('option:selected').text()+" "+$(this).children('option:selected').text());
		$('#order_'+addressType+'_address_attributes_address2').val($(this).val());
		$('#order_'+addressType+'_address_attributes_country_id').val('119');
	});
	
	function getNextLocality(selectorId , proviceId)
	{
		$('#'+selectorId).html("<option value='0'>请选择</option>");
		$.ajax ({
				url:	"/localities/"+proviceId+".json",
				type:	"GET",
				dataType:	"json"
			}).done (function (resp) {
				for (var i = 0; i < resp.children.length; i++) {
					if (resp.children[i].sort == -1)
					continue;
					$('#'+selectorId).append ("<option value="+resp.children[i].id +">" + resp.children[i].name +"</option>");
				}
			}).fail (function() {
				alert ("请求发送失败，请稍候再试");
			});
	}
	$('#searchBtnImg').click(function(){
		if(keyWords!='')
		{
			var keyWords=$('#searchInputText').val();
			window.location='/products?keywords='+keyWords;
		}
	});
	
	$("#searchInputText").keypress(function(){  
		if(keyWords!='')
		{
			var keyWords=$('#searchInputText').val();
			window.location='/products?keywords='+keyWords;
		}
	});
	
	$('#add_to_favour').click(function(){
		var productId=$('#productId').val();
		$.ajax ({
			url:	"/add_favorite",
			type:	"get",
			dataType:	"json",
			data:{
					product_id:productId
			}
		});
		alert('加入收藏夹成功！');
	});
	$('#moveSelectToFavour').click(function(){
		var idCount=0;
		var deleteId='';
		$('.itemCheckbox').each(function(){
   			if ($(this).is(':checked'))
   			{
				var productId=$(this).attr('productid');
				$.ajax ({
					url:	"/add_favorite",
					type:	"get",
					dataType:	"json",
					data:{
							product_id:productId
					}
				});
   				deleteId=$(this).parent().parent().find('.cart-item-delete').find('.delete').attr('id');
				$('#order_line_items_attributes_'+idCount+'_quantity').attr('value','0');
   			};
			idCount++;
  		});
		$('#'+deleteId).click();
	});
	$('.addToFavouriteBtn').click(function(){
		var productId=$(this).attr('productid');
		$.ajax ({
			url:	"/add_favorite",
			type:	"get",
			dataType:	"json",
			data:{
					product_id:productId
			}
		});
		$(this).parent().parent().parent().find('.cart-item-delete').find('.delete').click();
		alert('加入收藏夹成功！');
	});
	
	$('.deleteFavorite').click(function(){
		var productId=$(this).attr('productid');
		$.ajax ({
			url:	"/remove_favorite",
			type:	"get",
			dataType:	"json",
			data:{
					product_id:productId
			}
		});
		$(this).parent().parent().parent().remove();
	});
	
	$('.delete_addr').click(function(){
		var addrId = $(this).attr('addr_id');
		$.ajax ({
			url:	"/addresses/"+addrId,
			type:	"post",
			dataType: "html",
			data: {
				_method:'delete',
			}
		});
		$(this).parent().remove();
	});
	
	$('#bacthDelete').click(function(){
		$('.itemCheckbox').each(function(){
			if($(this).is(':checked'))
			{
				var productId=$(this).attr('productid');
				$.ajax ({
					url:	"/remove_favorite",
					type:	"get",
					dataType:	"json",
					data:{
							product_id:productId
					}
				});
				$(this).parent().parent().remove();
			}
		});
	});
});