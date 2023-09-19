import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfAmHeroBlockQuery } from './__generated/ctf-am-hero-block.generated';
import { AmHeroBlock } from './ctf-am-hero-block';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfAmHeroBlockGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useCtfAmHeroBlockQuery({
    id,
    locale,
    preview,
  });

  const content = useContentfulLiveUpdates(data?.amHeroBlock);

  if (!content || isLoading) return null;

  return <AmHeroBlock {...content} />;
};
