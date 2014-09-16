/* Another filter that is useful to search ads or other by the number of bedrooms or cabins(if is a boat)
 * This file uses the same strategy of PriceFilter
 * */

function create_filter_slider_bed() {

    $("#Slider_bed").slider({
        range: "min",
        min: 0,
        max: 20,
        //values: [0, 20],
        slide: function (event, ui) {
            //$("#Slider_minCabins").val(ui.values[0]);
            $("#Slider_maxCabins").val(ui.value);
            hidePriceBed();
        }
    });
    /*
     $("#Slider_minCabins").change(function () {
     var value = this.value;
     var parse_value = parseInt(value);
     var second_value = parseInt($("#Slider_maxCabins").val());
     $("#Slider_div_length").slider({values: [parse_value, second_value]});
     $("#Slider_minCabins").val($('#Slider_minCabins').val());
     hidePriceBed();
     });*/


    $("#Slider_maxCabins").change(function () {
        var value = this.value;
        var parse_value = parseInt(value);
        //var first_value = parseInt($("#Slider_minCabins").val());
        $("#Slider_bed").slider({value: parse_value});
        $("#Slider_maxCabins").val($('#Slider_maxCabins').val());
        hidePriceBed();
    });
}