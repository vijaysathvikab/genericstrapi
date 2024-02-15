import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentComponentsBannerSlides extends Schema.Component {
  collectionName: 'components_content_components_banner_slides';
  info: {
    displayName: 'Banner Slides';
    icon: 'grid';
  };
  attributes: {
    bannerConfig: Attribute.JSON;
  };
}

export interface ContentComponentsContentBlock extends Schema.Component {
  collectionName: 'components_content_components_content_blocks';
  info: {
    displayName: 'Content Block';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    contentBody: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ContentComponentsSwiperBanner extends Schema.Component {
  collectionName: 'components_content_components_swiper_banners';
  info: {
    displayName: 'swiperBanner';
    icon: 'apps';
  };
  attributes: {
    swiperBannerConfig: Attribute.JSON;
  };
}

export interface ContentComponentsTabs extends Schema.Component {
  collectionName: 'components_content_components_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'bulletList';
  };
  attributes: {
    tabsConfig: Attribute.JSON;
  };
}

export interface FormFormConfig extends Schema.Component {
  collectionName: 'components_form_form_configs';
  info: {
    displayName: 'Form Config';
    icon: 'bulletList';
  };
  attributes: {
    formConfig: Attribute.JSON;
  };
}

export interface MediaSwiperImages extends Schema.Component {
  collectionName: 'components_media_swiper_images';
  info: {
    displayName: 'swiperImages';
    icon: 'picture';
  };
  attributes: {
    swiperImagesConfig: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-components.banner-slides': ContentComponentsBannerSlides;
      'content-components.content-block': ContentComponentsContentBlock;
      'content-components.swiper-banner': ContentComponentsSwiperBanner;
      'content-components.tabs': ContentComponentsTabs;
      'form.form-config': FormFormConfig;
      'media.swiper-images': MediaSwiperImages;
    }
  }
}
