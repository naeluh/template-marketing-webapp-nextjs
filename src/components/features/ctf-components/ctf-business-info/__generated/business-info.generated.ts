import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFields_AmCtaFeatureBlock_Fragment, ComponentReferenceFields_AmFeaturedInsights_Fragment, ComponentReferenceFields_AmFeaturedMedia_Fragment, ComponentReferenceFields_AmFeaturedMediaBlock_Fragment, ComponentReferenceFields_AmHero_Fragment, ComponentReferenceFields_AmHeroBlock_Fragment, ComponentReferenceFields_AmInsights_Fragment, ComponentReferenceFields_AmLeadForm_Fragment, ComponentReferenceFields_AmPodcasts_Fragment, ComponentReferenceFields_AmTestimonial_Fragment, ComponentReferenceFields_AmTestimonialsBlock_Fragment, ComponentReferenceFields_AmValueProp_Fragment, ComponentReferenceFields_AmVideos_Fragment, ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_InsightsPage_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_NewsArticle_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment, ComponentReferenceFields_WhyAmBlock_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type BusinessInfoFieldsFragment = { __typename: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<(
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
        ) | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null };

export type CtfBusinessInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfBusinessInfoQuery = { __typename?: 'Query', topicBusinessInfo?: (
    { __typename?: 'TopicBusinessInfo' }
    & BusinessInfoFieldsFragment
  ) | null };

export const BusinessInfoFieldsFragmentDoc = `
    fragment BusinessInfoFields on TopicBusinessInfo {
  __typename
  sys {
    id
  }
  name
  shortDescription
  featuredImage {
    ...AssetFields
  }
  body {
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
}
    `;
export const CtfBusinessInfoDocument = `
    query CtfBusinessInfo($id: String!, $locale: String, $preview: Boolean) {
  topicBusinessInfo(id: $id, preview: $preview, locale: $locale) {
    ...BusinessInfoFields
  }
}
    ${BusinessInfoFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;
export const useCtfBusinessInfoQuery = <
      TData = CtfBusinessInfoQuery,
      TError = unknown
    >(
      variables: CtfBusinessInfoQueryVariables,
      options?: UseQueryOptions<CtfBusinessInfoQuery, TError, TData>
    ) =>
    useQuery<CtfBusinessInfoQuery, TError, TData>(
      ['CtfBusinessInfo', variables],
      customFetcher<CtfBusinessInfoQuery, CtfBusinessInfoQueryVariables>(CtfBusinessInfoDocument, variables),
      options
    );

useCtfBusinessInfoQuery.getKey = (variables: CtfBusinessInfoQueryVariables) => ['CtfBusinessInfo', variables];
;

useCtfBusinessInfoQuery.fetcher = (variables: CtfBusinessInfoQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfBusinessInfoQuery, CtfBusinessInfoQueryVariables>(CtfBusinessInfoDocument, variables, options);