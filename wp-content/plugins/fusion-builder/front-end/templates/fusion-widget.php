<?php
/**
 * Underscore.js template
 *
 * @package fusion-builder
 * @since 6.0
 */

?>
<script type="text/html" id="tmpl-fusion_widget-shortcode">
	<div {{{ _.fusionGetAttributes( attr ) }}}>
		<h4 class="widget-title">{{{ values.title }}}</h4>
		{{{ styles }}}

		<# if ( 'default' === values.type ) { #>
			<h4 class="widget-title fusion-responsive-typography-calculated">{{ fusionBuilderText.widget }}</h4>
			<p>{{ fusionBuilderText.select_widget }}</p>
		<# } else { #>
			<div class="fusion-widget-content">
				<# if ( 'undefined' !== typeof markup ) { #>
					{{ markup }}
				<# } #>
			</div>

		<# } #>
	</div>
</script>
