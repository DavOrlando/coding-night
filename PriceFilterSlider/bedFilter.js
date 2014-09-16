//Hide divs that have a number of beds or cabins or bedrooms lower than bedMin and greater than bedMax
//Modify the id in jquery functions to adapt this to your code

function hidePriceBed() {
    //var bedMin = parseInt($("#Slider_minCabins").val());
    var bed = parseInt($("#Slider_maxCabins").val());
    var bed_temp = $(".adpr_subtitle").text();
    var bed_string = bed_temp.substring(0, 1).split(" ");
    if (bed != 0) {
        for (var i = 0; i < bed_string.length; i++) {
            var bed_int = parseInt(bed_string[i]);
            if (bed_int != bed) {
                $("div.ad_preview:contains(" + "'" + bed_int + "'" + ")").addClass('is-bed-filtered');
            }
            else{
                $("div.ad_preview:contains(" + "'" + bed_int + "'" + ")").removeClass('is-bed-filtered');
            }
        }
    }
    else{
        $("div.ad_preview").removeClass('is-bed-filtered');
        $("#Slider_maxCabins").val('');
    }

}
