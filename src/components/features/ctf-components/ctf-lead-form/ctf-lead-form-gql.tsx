import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfLeadFormQuery } from './__generated/ctf-lead-form.generated';
import { CtfLeadForm } from './ctf-lead-form';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfLeadFormGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfLeadFormQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amLeadForm);

  if (!content || isLoading) return null;

  return <CtfLeadForm {...content} />;
};
