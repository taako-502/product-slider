/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/product-slider', {
  attributes:{
    //img の alt 属性の値
    imageAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.p-balloon__img'
    },
    //img の src に指定する URL
    imageUrl: {
     type: 'string',
     source: 'attribute',
     attribute: 'src',
     selector: '.p-balloon__img'
    },
    //MediaUpload の value の値
    mediaID: {
      type: 'number',
      default: 0
    },
  },

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
