/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
  //分割代入を使って props 経由でプロパティを変数に代入
  const { className, attributes, setAttributes} = props;

  const onSelectImage = ( media ) => {
    setAttributes( {
      imageAlt: media.alt,
      imageUrl: media.url,
      mediaID: media.id
    } );
  };

  const getImageButton = ( open ) => {
  if(attributes.imageUrl) {
    return (
      <img
        src={ attributes.imageUrl }
        onClick={ open }
        className="p-balloon__img"
        alt=""
      />
    );
  } else {
    return (
      <div className="button-container">
        <Button
          onClick={ open }
          className="p-balloon__btn"
        >
          画像をアップロード
        </Button>
      </div>
    );
  }
};

	return (
    <div className="p-product-slider">
      <MediaUploadCheck>
        <MediaUpload
          onSelect={ onSelectImage }
          allowedTypes={ ['image'] }
          value={ attributes.mediaID }
          render={ ({ open }) => getImageButton( open ) }
        />
      </MediaUploadCheck>
      { attributes.mediaID != 0  &&
        <MediaUploadCheck>
          <Button
            onClick={removeMedia}
            isLink
            isDestructive
            className="removeImage">画像を削除
          </Button>
        </MediaUploadCheck>
      }
    </div>
	);
}
