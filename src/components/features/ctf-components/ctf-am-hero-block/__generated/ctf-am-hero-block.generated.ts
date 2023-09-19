import * as Types from '../../../../../lib/__generated/graphql.types';

import { AmHeroFieldsFragment } from '../../ctf-am-hero/__generated/ctf-am-hero.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AmHeroFieldsFragmentDoc } from '../../ctf-am-hero/__generated/ctf-am-hero.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmHeroBlockFieldsFragment = { __typename: 'AmHeroBlock', sys: { __typename?: 'Sys', id: string }, herosCollection?: { __typename?: 'AmHeroBlockHerosCollection', items: Array<(
      { __typename?: 'AmHero' }
      & AmHeroFieldsFragment
    ) | null> } | null };

export type CtfAmHeroBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfAmHeroBlockQuery = { __typename?: 'Query', amHeroBlock?: (
    { __typename?: 'AmHeroBlock' }
    & AmHeroBlockFieldsFragment
  ) | null };

export const AmHeroBlockFieldsFragmentDoc = `
    fragment AmHeroBlockFields on AmHeroBlock {
  __typename
  sys {
    id
  }
  herosCollection(limit: 3) {
    items {
      ...AmHeroFields
    }
  }
}
    `;
export const CtfAmHeroBlockDocument = `
    query CtfAmHeroBlock($id: String!, $locale: String, $preview: Boolean) {
  amHeroBlock(id: $id, locale: $locale, preview: $preview) {
    ...AmHeroBlockFields
  }
}
    ${AmHeroBlockFieldsFragmentDoc}
${AmHeroFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfAmHeroBlockQuery = <
      TData = CtfAmHeroBlockQuery,
      TError = unknown
    >(
      variables: CtfAmHeroBlockQueryVariables,
      options?: UseQueryOptions<CtfAmHeroBlockQuery, TError, TData>
    ) =>
    useQuery<CtfAmHeroBlockQuery, TError, TData>(
      ['CtfAmHeroBlock', variables],
      customFetcher<CtfAmHeroBlockQuery, CtfAmHeroBlockQueryVariables>(CtfAmHeroBlockDocument, variables),
      options
    );

useCtfAmHeroBlockQuery.getKey = (variables: CtfAmHeroBlockQueryVariables) => ['CtfAmHeroBlock', variables];
;

useCtfAmHeroBlockQuery.fetcher = (variables: CtfAmHeroBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfAmHeroBlockQuery, CtfAmHeroBlockQueryVariables>(CtfAmHeroBlockDocument, variables, options);