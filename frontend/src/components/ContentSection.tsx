import React from 'react';

type ContentSectionType = 'Strapi_ComponentSectionsHero' |'Strapi_ComponentSectionsBottomActions' |'Strapi_ComponentSectionsFeatureColumnsGroup' |'Strapi_ComponentSectionsFeatureRowsGroup' | 'Strapi_ComponentSectionsLargeVideo' | 'Strapi_ComponentSectionsLeadForm' | 'Strapi_ComponentSectionsPricing' | 'Strapi_ComponentSectionsRichText' | 'Strapi_ComponentSectionsTestimonialsGroup';
type ContentSectionDefinition = Partial<GatsbyTypes.Strapi_ComponentSectionsHero> | Partial<GatsbyTypes.Strapi_ComponentSectionsBottomActions> | Partial<GatsbyTypes.Strapi_ComponentSectionsFeatureColumnsGroup> | Partial<GatsbyTypes.Strapi_ComponentSectionsFeatureRowsGroup> | Partial<GatsbyTypes.Strapi_ComponentSectionsLargeVideo> | Partial<GatsbyTypes.Strapi_ComponentSectionsLeadForm> | Partial<GatsbyTypes.Strapi_ComponentSectionsPricing> | Partial<GatsbyTypes.Strapi_ComponentSectionsRichText> | Partial<GatsbyTypes.Strapi_ComponentSectionsTestimonialsGroup>;

interface ContentSectionProps {
  type: ContentSectionType;
  data: ContentSectionDefinition;
}

const ContentSection: React.FC<ContentSectionProps> = ({ type, data }) => {
  switch (type) {
    case 'Strapi_ComponentSectionsFeatureColumnsGroup':
      const featureColumnsGroup = data as GatsbyTypes.Strapi_ComponentSectionsFeatureColumnsGroup;
      return <div>FeatureColumnsGroup: {featureColumnsGroup.id}</div>
    case 'Strapi_ComponentSectionsFeatureRowsGroup':
      const featureRowsGroup = data as GatsbyTypes.Strapi_ComponentSectionsFeatureRowsGroup;
      return <div>FeatureRowsGroup: {featureRowsGroup.id}</div>
    case 'Strapi_ComponentSectionsLargeVideo':
      const video = data as GatsbyTypes.Strapi_ComponentSectionsLargeVideo;
      return <div>Video: {video.id} - {video.title}</div>
    case 'Strapi_ComponentSectionsLeadForm':
      const leadForm = data as GatsbyTypes.Strapi_ComponentSectionsLeadForm;
      return <div>LeadForm: {leadForm.id} - {leadForm.title}</div>
    case 'Strapi_ComponentSectionsPricing':
      const pricing = data as GatsbyTypes.Strapi_ComponentSectionsPricing;
      return <div>Pricing: {pricing.id} - {pricing.title}</div>
    case 'Strapi_ComponentSectionsRichText':
      const richText = data as GatsbyTypes.Strapi_ComponentSectionsRichText;
      return <div>RichText: {richText.id} - {richText.content}</div>
    case 'Strapi_ComponentSectionsTestimonialsGroup':
      const testimonialsGroup = data as GatsbyTypes.Strapi_ComponentSectionsTestimonialsGroup;
      return <div>TestimonialsGroup: {testimonialsGroup.id} - {testimonialsGroup.title}</div>
    case 'Strapi_ComponentSectionsBottomActions':
      const bottomActions = data as GatsbyTypes.Strapi_ComponentSectionsBottomActions;
      return <div>Bottom Actions: {bottomActions.id} - {bottomActions.title}</div>
    case 'Strapi_ComponentSectionsHero':
      const hero = data as GatsbyTypes.Strapi_ComponentSectionsHero;
      return <div>Hero: {hero.id} - {hero.title}</div>
    default:
      return <div>Unhandled Content Section type {type}</div>;
  }
};

export default ContentSection;
