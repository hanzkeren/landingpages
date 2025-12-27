import Gallery1 from '#app/blocks/Gallery/gallery1';
import Gallery2 from '#app/blocks/Gallery/gallery2';
import Gallery3 from '#app/blocks/Gallery/gallery3';
import Gallery4 from '#app/blocks/Gallery/gallery4';
import Gallery5 from '#app/blocks/Gallery/gallery5';
import Gallery6 from '#app/blocks/Gallery/gallery6';
import { Gallery25 } from '#app/blocks/Gallery/gallery25';
import { Gallery26 } from '#app/blocks/Gallery/gallery26';
import { Page } from '#app/payload-types';
import { allGalleryDesignVersions } from './config';

// Extract just the value property from the design version objects
type GalleryDesignVersionValue = (typeof allGalleryDesignVersions)[number]['value'];

type Gallery<T extends string = string> = Required<
  Record<GalleryDesignVersionValue, React.FC<any>>
> &
  Record<T, React.FC<any>>;

const galleries: Gallery = {
  GALLERY1: Gallery1,
  GALLERY2: Gallery2,
  GALLERY3: Gallery3,
  GALLERY4: Gallery4,
  GALLERY5: Gallery5,
  GALLERY6: Gallery6,
  GALLERY25: Gallery25,
  GALLERY26: Gallery26,
};

export const GalleryBlock: React.FC<Page['layout'][0]> = (props) => {
  if (props.blockType !== 'gallery') return null;

  const { designVersion } = props || {};

  if (!designVersion) return null;

  const GalleryToRender = galleries[designVersion];

  if (!GalleryToRender) return null;

  return <GalleryToRender {...props} />;
};
