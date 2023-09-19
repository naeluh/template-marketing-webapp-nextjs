import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AmCtfLeadFormFieldsFragment = { __typename: 'AmLeadForm', headerText?: string | null, leadFormEmbedCode?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfLeadFormQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfLeadFormQuery = { __typename?: 'Query', amLeadForm?: (
    { __typename?: 'AmLeadForm' }
    & AmCtfLeadFormFieldsFragment
  ) | null };

export const AmCtfLeadFormFieldsFragmentDoc = `
    fragment AmCtfLeadFormFields on AmLeadForm {
  __typename
  sys {
    id
  }
  headerText
  leadFormEmbedCode
}
    `;
export const CtfLeadFormDocument = `
    query CtfLeadForm($id: String!, $locale: String, $preview: Boolean) {
  amLeadForm(id: $id, locale: $locale, preview: $preview) {
    ...AmCtfLeadFormFields
  }
}
    ${AmCtfLeadFormFieldsFragmentDoc}`;
export const useCtfLeadFormQuery = <
      TData = CtfLeadFormQuery,
      TError = unknown
    >(
      variables: CtfLeadFormQueryVariables,
      options?: UseQueryOptions<CtfLeadFormQuery, TError, TData>
    ) =>
    useQuery<CtfLeadFormQuery, TError, TData>(
      ['CtfLeadForm', variables],
      customFetcher<CtfLeadFormQuery, CtfLeadFormQueryVariables>(CtfLeadFormDocument, variables),
      options
    );

useCtfLeadFormQuery.getKey = (variables: CtfLeadFormQueryVariables) => ['CtfLeadForm', variables];
;

useCtfLeadFormQuery.fetcher = (variables: CtfLeadFormQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfLeadFormQuery, CtfLeadFormQueryVariables>(CtfLeadFormDocument, variables, options);