/* Another filter that is useful to search ads or other by the number of bedrooms or cabins(if is a boat)
 * This file uses the same strategy of PriceFilter
 * */

function create_filter_slider_bed(){

    $("#Slider_bed").slider({
        range: true,
        max: 20,
        min: 0,
        orientation: "horizontal",
        values: [0, 20],
        slide: function (event, ui) {
            $("#Slider_minCabins").val(ui.values[0]); //or bedrooms
            $("#Slider_maxCabins").val(ui.values[1]);
            hidePriceBed(); //this is the method that hides the ads
        }
    });

    $("#Slider_minCabins").change(function () {
        var value = this.value;
        var parse_value = parseInt(value);
        var second_value = parseInt($("#Slider_maxCabins").val());
        $("#Slider_div_length").slider({values: [parse_value, second_value]});
        $("#Slider_minCabins").val($('#Slider_minCabins').val());
        hidePriceBed();
    });


    $("#Slider_maxCabins").change(function () {
        var value = this.value;
        var parse_value = parseInt(value);
        var first_value = parseInt($("#Slider_minCabins").val());
        $("#Slider_div_length").slider({values: [first_value, parse_value]});
        $("#Slider_maxCabins").val($('#Slider_maxCabins').val());
        hidePriceBed();
    });
}