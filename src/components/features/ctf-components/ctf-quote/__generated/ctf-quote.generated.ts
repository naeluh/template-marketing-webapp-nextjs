import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_AmCtaFeatureBlock_Fragment, ComponentReferenceFields_AmFeaturedInsights_Fragment, ComponentReferenceFields_AmFeaturedMedia_Fragment, ComponentReferenceFields_AmFeaturedMediaBlock_Fragment, ComponentReferenceFields_AmHero_Fragment, ComponentReferenceFields_AmHeroBlock_Fragment, ComponentReferenceFields_AmInsights_Fragment, ComponentReferenceFields_AmLeadForm_Fragment, ComponentReferenceFields_AmPodcasts_Fragment, ComponentReferenceFields_AmTestimonial_Fragment, ComponentReferenceFields_AmTestimonialsBlock_Fragment, ComponentReferenceFields_AmValueProp_Fragment, ComponentReferenceFields_AmVideos_Fragment, ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_InsightsPage_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_NewsArticle_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment, ComponentReferenceFields_WhyAmBlock_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type QuoteFieldsFragment = { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<(
          { __typename?: 'AmCtaFeatureBlock' }
          & ComponentReferenceFields_AmCtaFeatureBlock_Fragment
        ) | (
          { __typename?: 'AmFeaturedInsights' }
          & ComponentReferenceFields_AmFeaturedInsights_Fragment
        ) | (
          { __typename?: 'AmFeaturedMedia' }
          & ComponentReferenceFields_AmFeaturedMedia_Fragment
        ) | (
          { __typename?: 'AmFeaturedMediaBlock' }
          & ComponentReferenceFields_AmFeaturedMediaBlock_Fragment
        ) | (
          { __typename?: 'AmHero' }
          & ComponentReferenceFields_AmHero_Fragment
        ) | (
          { __typename?: 'AmHeroBlock' }
          & ComponentReferenceFields_AmHeroBlock_Fragment
        ) | (
          { __typename?: 'AmInsights' }
          & ComponentReferenceFields_AmInsights_Fragment
        ) | (
          { __typename?: 'AmLeadForm' }
          & ComponentReferenceFields_AmLeadForm_Fragment
        ) | (
          { __typename?: 'AmPodcasts' }
          & ComponentReferenceFields_AmPodcasts_Fragment
        ) | (
          { __typename?: 'AmTestimonial' }
          & ComponentReferenceFields_AmTestimonial_Fragment
        ) | (
          { __typename?: 'AmTestimonialsBlock' }
          & ComponentReferenceFields_AmTestimonialsBlock_Fragment
        ) | (
          { __typename?: 'AmValueProp' }
          & ComponentReferenceFields_AmValueProp_Fragment
        ) | (
          { __typename?: 'AmVideos' }
          & ComponentReferenceFields_AmVideos_Fragment
        ) | (
          { __typename?: 'ComponentCta' }
          & ComponentReferenceFields_ComponentCta_Fragment
        ) | (
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentHeroBanner' }
          & ComponentReferenceFields_ComponentHeroBanner_Fragment
        ) | (
          { __typename?: 'ComponentInfoBlock' }
          & ComponentReferenceFields_ComponentInfoBlock_Fragment
        ) | (
          { __typename?: 'ComponentProductTable' }
          & ComponentReferenceFields_ComponentProductTable_Fragment
        ) | (
          { __typename?: 'ComponentQuote' }
          & ComponentReferenceFields_ComponentQuote_Fragment
        ) | (
          { __typename?: 'ComponentTextBlock' }
          & ComponentReferenceFields_ComponentTextBlock_Fragment
        ) | (
          { __typename?: 'FooterMenu' }
          & ComponentReferenceFields_FooterMenu_Fragment
        ) | (
          { __typename?: 'InsightsPage' }
          & ComponentReferenceFields_InsightsPage_Fragment
        ) | (
          { __typename?: 'MenuGroup' }
          & ComponentReferenceFields_MenuGroup_Fragment
        ) | (
          { __typename?: 'NavigationMenu' }
          & ComponentReferenceFields_NavigationMenu_Fragment
        ) | (
          { __typename?: 'NewsArticle' }
          & ComponentReferenceFields_NewsArticle_Fragment
        ) | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Seo' }
          & ComponentReferenceFields_Seo_Fragment
        ) | (
          { __typename?: 'TopicBusinessInfo' }
          & ComponentReferenceFields_TopicBusinessInfo_Fragment
        ) | (
          { __typename?: 'TopicPerson' }
          & ComponentReferenceFields_TopicPerson_Fragment
        ) | (
          { __typename?: 'TopicProduct' }
          & ComponentReferenceFields_TopicProduct_Fragment
        ) | (
          { __typename?: 'TopicProductFeature' }
          & ComponentReferenceFields_TopicProductFeature_Fragment
        ) | (
          { __typename?: 'WhyAmBlock' }
          & ComponentReferenceFields_WhyAmBlock_Fragment
        ) | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: (
    { __typename?: 'ComponentQuote' }
    & QuoteFieldsFragment
  ) | null };

export const QuoteFieldsFragmentDoc = `
    fragment QuoteFields on ComponentQuote {
  __typename
  sys {
    id
  }
  quote {
    json
    links {
      entries {
        block {
          ...ComponentReferenceFields
        }
      }
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  quoteAlignment
  image {
    ...AssetFields
  }
  imagePosition
  colorPalette
}
    `;
export const CtfQuoteDocument = `
    query CtfQuote($id: String!, $locale: String, $preview: Boolean) {
  componentQuote(id: $id, locale: $locale, preview: $preview) {
    ...QuoteFields
  }
}
    ${QuoteFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfQuoteQuery = <
      TData = CtfQuoteQuery,
      TError = unknown
    >(
      variables: CtfQuoteQueryVariables,
      options?: UseQueryOptions<CtfQuoteQuery, TError, TData>
    ) =>
    useQuery<CtfQuoteQuery, TError, TData>(
      ['CtfQuote', variables],
      customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables),
      options
    );

useCtfQuoteQuery.getKey = (variables: CtfQuoteQueryVariables) => ['CtfQuote', variables];
;

useCtfQuoteQuery.fetcher = (variables: CtfQuoteQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables, options);