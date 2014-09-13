//Hide divs that have a price lower than price_min and greater than price_max
//Modify the id in jquery functions to adapt this to your code

function hidePriceFilter() {
    var pricemin = parseInt($("#pricemin").val());
    var pricemax = parseInt($("#pricemax").val());
    var price_temp = $(".real_price").text();
    var price_string = price_temp.substring(0,(price_temp.length-1)).replace(/\€/g, ' ').split(" "); //create an array of integer, where the values are the prices
    for (var i = 0; i < price_string.length; i++) {
        var price_int = parseInt(price_string[i]);
        if (price_int > pricemax || price_int < pricemin) {
            $( "div.ad_preview:contains("+"'"+price_int+"'"+")" ).css( "display", "none" ); //edit this to choose where the magic should run
        }
        else  $( "div.ad_preview:contains("+"'"+price_int+"'"+")" ).css( "display", "block" );

    }
}