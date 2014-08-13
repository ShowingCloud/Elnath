jQuery(document).ready(function() {
	$("#product-thumbnails").attr("class", "thumbnails jcarousel jcarousel-skin-tango");
    $("#product-thumbnails li img").attr("height", "112px");
    $("#product-thumbnails li img").attr("width", "105px");
    jQuery('#product-thumbnails').jcarousel({
        vertical: true,
        scroll: 2
    });
});