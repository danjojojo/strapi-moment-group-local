import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContactDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_descriptions';
  info: {
    displayName: 'Contact Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface SharedContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_details';
  info: {
    displayName: 'Contact Details';
  };
  attributes: {
    contact_description: Schema.Attribute.Component<
      'shared.contact-description',
      true
    >;
    contact_email: Schema.Attribute.Component<'shared.contact-texts', true>;
    contact_number: Schema.Attribute.Component<'shared.contacts', true>;
  };
}

export interface SharedContactNumbers extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_numbers';
  info: {
    displayName: 'Contact Numbers';
  };
  attributes: {
    number: Schema.Attribute.String;
  };
}

export interface SharedContactTexts extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_texts';
  info: {
    displayName: 'Contact Email';
  };
  attributes: {
    contact_emails: Schema.Attribute.Component<'shared.contact-values', true>;
    label: Schema.Attribute.String;
  };
}

export interface SharedContactValues extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_values';
  info: {
    displayName: 'Contact Emails';
  };
  attributes: {
    email: Schema.Attribute.String;
  };
}

export interface SharedContacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact Number';
  };
  attributes: {
    contact_numbers: Schema.Attribute.Component<'shared.contact-numbers', true>;
    location: Schema.Attribute.String;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
  };
}

export interface SharedNavLinkDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_link_details';
  info: {
    displayName: 'Nav Link Details';
  };
  attributes: {
    hoverColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    hoverName: Schema.Attribute.String;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    nameDesktop: Schema.Attribute.String & Schema.Attribute.Required;
    nameMobile: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['redirect', 'page']> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSiteRequirements extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_requirements';
  info: {
    displayName: 'Site Requirements';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['page', 'redirect']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-description': SharedContactDescription;
      'shared.contact-details': SharedContactDetails;
      'shared.contact-numbers': SharedContactNumbers;
      'shared.contact-texts': SharedContactTexts;
      'shared.contact-values': SharedContactValues;
      'shared.contacts': SharedContacts;
      'shared.content': SharedContent;
      'shared.nav-link-details': SharedNavLinkDetails;
      'shared.seo': SharedSeo;
      'shared.site-requirements': SharedSiteRequirements;
    }
  }
}
