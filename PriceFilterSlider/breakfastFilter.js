function hasFeature(AdFeature, feature_number){
    var hasFeature = false;
    for (var i = 0; i< AdFeature.length && !hasFeature;i++){
        if(AdFeature[i].service_id == feature_number){
            hasFeature = true;
        }
    }
    return hasFeature;
}



function hideBreakfastFilter() {
    if ($(".ad_preview").hasClass('is-breakfast-filtered')) {
        $(".ad_preview").removeClass('is-breakfast-filtered');
        $(".adpr_breakfast").hide();
    }
    else {
        $(".ad_preview").addClass('is-breakfast-filtered');
        $("div.ad_preview:contains(" + "'" + 'trueBREAKFAST' + "'" + ")").removeClass('is-breakfast-filtered');
    }
}