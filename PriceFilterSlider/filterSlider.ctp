<!--HTML part of the filterSlider, where the magic through sliders and checkboxes runs-->

<div id="advf_container">
    <div id="advanced_filter" style="">
        <div id="advf_title">
            <?php echo(__('Ricerca Avanzata')); ?>
        </div>
        <div id="advf_filters">
            <div id="advf_price"><?php echo(__('Prezzo')); ?></div>
            <input max="10000" min="0" id="Slider_pricemin" step="any" type="text" value = "0€" >
            <input max="10000" min="0" id="Slider_pricemax" step="any" type="text" value = "10000€">

            <div id="Slider_div_length"></div>
            <script> create_filter_slider('€'); </script>
        </div>
    </div>
</div>