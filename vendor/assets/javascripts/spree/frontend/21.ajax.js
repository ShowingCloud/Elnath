jQuery(document).ready(function(){
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
});