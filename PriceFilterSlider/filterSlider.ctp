<!--
HTML part of the filterSlider, where the magic through sliders and checkboxes runs
Use cakePhp framework to create input and other.
-->

<?php

$price_kind = array('Tutte le tipologie' => __('Tutte le tipologie'), 'Per notte' => __('Per notte'), //per il select delle tipologie
    'Per weekend' => __('Per weekend'), 'Per settimana' => __('Per settimana'),
    'Per mese' => __('Per mese'), 'Per consumazione' => __('Per consumazione'));

?>
<script>
    $(".kind_price_selectbox").change(function () { //serve per nascondere gli ads diversi dalla tipologia scelta
        hidePriceKindFilter();
    });
</script>


<div id="advf_container">
    <div id="advanced_filter" style="">
        <div id="advf_title">
            <?php echo(__('Ricerca Avanzata')); ?>
        </div>
        <div id="container_for_filters">

            <!--Filtro in base al prezzo-->


            <div id="advf_filters">
                <div id="advf_price"><?php echo(__('Prezzo')); ?></div>
                <input max="10000" min="0" id="Slider_pricemin" step="any" type="text" value="0€">
                <?php echo $this->Form->input(
                    __('Tipologia prezzo'),
                    array('options' => $price_kind, 'default' => 'm',
                        'label' => false, 'class' => 'kind_price_selectbox', 'div' => false));
                ?>
                <script>
                    $(".kind_price_selectbox").change(function () { //serve per nascondere gli ads diversi dalla tipologia scelta
                        hidePriceKindFilter();
                    });
                </script>
                <input max="10000" min="0" id="Slider_pricemax" step="any" type="text" value="10000€">

                <div id="Slider_div_length"></div>
                <script>
                    create_filter_slider_price('€');
                </script>
                <div class="clearleft"></div>

                <!--Filtro in base al numero di cabine-->

                <div id="advf_cabins"><?php echo(__('Posti Letto')); ?></div>
                <?php //<input max="20" min="0" id="Slider_minCabins" step="any" type="text" value="0">?>
                <input max="20" min="0" id="Slider_maxCabins" step="any" type="text" value="<?php echo __('') ?>">

                <div id="Slider_bed"></div>
                <script> create_filter_slider_bed(); </script>
                <div class="clearleft"></div>

                <div id="secondTabFilter">
                    <div id="advf_other_filter"><?php echo(__('Filtri aggiuntivi')); ?>

                        <!--Checkbox colazione inlcusa-->
                        <div class="checkboxes">
                            <div class="checkboxes3">
                                <div class="select_box">
                                    <input type="checkbox"  onclick="hideBreakfastFilter();"
                                           name="data[AdFeature][service_id][]" value=""
                                           id="AdFeatureServiceId4">

                                    <label class="label_other_filter"
                                           for="AdFeatureServiceId4"> <?php echo __('Colazione inclusa') ?><br></label>
                                </div>
                            </div>
                        </div>
                        <div class="clearleft"></div>

                    </div>
                    <div id="advf_other"
                         onclick="removeSecondTabFilter()"><?php echo(__('Ritorna ai filtri precedenti')); ?></div>
                </div>
            </div>
        </div>
    </div>
</div>

