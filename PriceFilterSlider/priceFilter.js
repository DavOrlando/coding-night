//Hide divs that have a price lower than price_min and greater than price_max
//Modify the id in jquery functions to adapt this to your code

function hidePriceFilter() {
    var pricemin = parseInt($("#Slider_pricemin").val());
    var pricemax = parseInt($("#Slider_pricemax").val());
    var price_temp = $(".adpr_real_price").text();
    var price_string = price_temp.substring(0, (price_temp.length - 1)).replace(/\€/g, ' ').split(" ");
    for (var i = 0; i < price_string.length; i++) {
        var price_int = parseInt(price_string[i]);
        if (price_int > pricemax || price_int < pricemin) {
            $("div.ad_preview:contains(" + "'" + price_int + "'" + ")").addClass('is-price-filtered');
        }
        else
        {
            $("div.ad_preview:contains(" + "'" + price_int + "'" + ")").removeClass('is-price-filtered');
        }
    }
}


/* Hide divs that have a different kind of price, for example if user set price to "for night"
 this method hides all divs that haven't got this category of price.
Modify the id in jquery functions to adapt this to your code */

function hidePriceKindFilter() {
    var kind_price = ($(".kind_price_selectbox").val());
    var real_kind_price = ($(".adpr_real_kind_price").text());
    var real_kind_prices = real_kind_price.split(/(?=[A-Z])/);
    if (kind_price != "Tutte le tipologie") {
        for (var i = 0; i < real_kind_prices.length; i++) {
            if (kind_price != real_kind_prices[i]) {
                $("div.ad_preview:contains(" + "'" + real_kind_prices[i] + "'" + ")").addClass('is-pricekind-filtered');
            }
            else $("div.ad_preview:contains(" + "'" + real_kind_prices[i] + "'" + ")").removeClass('is-pricekind-filtered');
        }
    }
    else $("div.ad_preview").removeClass('is-pricekind-filtered');
}