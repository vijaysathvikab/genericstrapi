import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBannerSlides extends Schema.Component {
  collectionName: 'components_content_banner_slides';
  info: {
    displayName: 'Banner Slides';
    icon: 'grid';
  };
  attributes: {
    bannerConfig: Attribute.JSON;
  };
}

export interface ContentBanners extends Schema.Component {
  collectionName: 'components_content_banners';
  info: {
    displayName: 'Banners';
    icon: 'apps';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'media.slides', true>;
  };
}

export interface ContentContentBlock extends Schema.Component {
  collectionName: 'components_content_content_blocks';
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

export interface ContentSingletab extends Schema.Component {
  collectionName: 'components_content_singletabs';
  info: {
    displayName: 'singletab';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    tabBody: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ContentTabs extends Schema.Component {
  collectionName: 'components_content_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    orientation: Attribute.Enumeration<['Horizontal', 'Vertical']>;
    tab: Attribute.Component<'content.singletab', true>;
  };
}

export interface FormFormConfig extends Schema.Component {
  collectionName: 'components_form_form_configs';
  info: {
    displayName: 'Form Config';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    formStyle: Attribute.JSON;
    formClass: Attribute.String;
    buttonStyle: Attribute.JSON;
    buttonClass: Attribute.String;
    formFields: Attribute.Component<'form.form-fields', true>;
    headerText: Attribute.String;
  };
}

export interface FormFormFields extends Schema.Component {
  collectionName: 'components_form_form_fields';
  info: {
    displayName: 'Form Fields';
    icon: 'apps';
  };
  attributes: {
    fieldName: Attribute.String;
    fieldCode: Attribute.String;
    width: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<100>;
    cssStyle: Attribute.String;
    fieldType: Attribute.String;
    validationRegex: Attribute.String;
    validationMessage: Attribute.String;
    required: Attribute.Boolean;
    inputClass: Attribute.String;
    inputStyle: Attribute.JSON;
    labelStyle: Attribute.JSON;
  };
}

export interface IconsIcons extends Schema.Component {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'icons';
    icon: 'alien';
  };
  attributes: {
    iconCode: Attribute.String;
    iconLink: Attribute.String;
  };
}

export interface MediaImages extends Schema.Component {
  collectionName: 'components_media_images';
  info: {
    displayName: 'images';
    icon: 'calendar';
  };
  attributes: {
    url: Attribute.Media;
    alt: Attribute.String;
    link: Attribute.String;
  };
}

export interface MediaSlides extends Schema.Component {
  collectionName: 'components_content_components_slides';
  info: {
    displayName: 'Slides';
    icon: 'calendar';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.String;
    ctaLabel: Attribute.String;
    ctaLink: Attribute.String;
    image: Attribute.Media;
    slideType: Attribute.Enumeration<
      [
        'basic-bottom-image',
        'basic-top-image',
        'left-overlay',
        'right-overlay',
        'horizontal-right-image',
        'horizontal-left-image',
        'image'
      ]
    >;
  };
}

export interface MediaSwiperImages extends Schema.Component {
  collectionName: 'components_media_swiper_images';
  info: {
    displayName: 'swiperImages';
    icon: 'picture';
    description: '';
  };
  attributes: {
    swiperStyle: Attribute.Enumeration<
      ['default', 'cards', 'cube', 'fade', 'coverflow', 'flip']
    >;
    images: Attribute.Component<'media.images', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.banner-slides': ContentBannerSlides;
      'content.banners': ContentBanners;
      'content.content-block': ContentContentBlock;
      'content.singletab': ContentSingletab;
      'content.tabs': ContentTabs;
      'form.form-config': FormFormConfig;
      'form.form-fields': FormFormFields;
      'icons.icons': IconsIcons;
      'media.images': MediaImages;
      'media.slides': MediaSlides;
      'media.swiper-images': MediaSwiperImages;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
