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
	$('.addToFavouriteBtn').click(function(){
		var productId=$(this).parent().find('productId').val();
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
		alert('shanchu收藏夹成功！');
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
		$(this).parent().empty();
		alert('删除成功');
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
		$(this).parent().empty();
		alert('删除成功');
	});
});