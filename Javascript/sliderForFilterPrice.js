/* It's a function that create a slider to filter the ads, or other object, only with the price value*/

function create_filter_slider(currency) { //use i18n to set the correct currency

    $("#Slider_div_length").slider({
        range: true,
        max: 10000,
        min: 0,
        orientation: "horizontal",
        values: [0, 10000],
        slide: function (event, ui) {
            $("#Slider_pricemin").val(ui.values[0]+currency);
            $("#Slider_pricemax").val(ui.values[1]+currency);
            hidePriceFilter();          //it's the call to method that hides the ads
        }
    });

    $("#Slider_pricemin").change(function () {
        var value = this.value;
        var parse_value = parseInt(value);
        var second_value = parseInt($("#Slider_pricemax").val());
        $("#Slider_div_length").slider({values: [parse_value, second_value]});
        hidePriceFilter();
    });


    $("#Slider_pricemax").change(function () {
        var value = this.value;
        var parse_value = parseInt(value);
        var first_value = parseInt($("#Slider_pricemin").val());
        $("#Slider_div_length").slider({values: [first_value, parse_value]});
        hidePriceFilter();
    });
}


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