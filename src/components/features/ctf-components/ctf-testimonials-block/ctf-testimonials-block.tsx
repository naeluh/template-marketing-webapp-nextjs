import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmTestimonialsBlockFieldsFragment } from './__generated/ctf-testimonials-block.generated';
import classes from './ctf-testimonials-block.module.css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
export const TestimonialsBlock = (props: AmTestimonialsBlockFieldsFragment) => {
  const {
    sys: { id },
    testimonialsCollection,
  } = props;
  return (
    <div className="views-element-container" id="block-views-block-slide-testimonial-main">
      <div>
        <div className="view-slide-testimonial js-view-dom-id-d563103fe2b42f4965310b79f463e978a8c764fcc38708e9f5f0700061932d8e">
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              type: 'fade',
              waitForTransition: true,
            }}
            className="splide--view splide--view--slide-testimonial splide--view--slide-testimonial--main splide--view--slide-testimonial-block-main splide--optionset--slide-testimonial "
          >
            <SplideTrack>
              {testimonialsCollection?.items &&
                testimonialsCollection.items.map(item => {
                  return (
                    <SplideSlide key={item?.sys?.id}>
                      <div className="slide-testimonial">
                        <div className="slide-testimonial-container">
                          <div className="slide-testimonial-left">
                            <div className="field_slide_background field--name-field_slide_background field--name-field-slide-background">
                              {' '}
                              {item?.backgroundImage?.url && (
                                <img
                                  src={item?.backgroundImage?.url}
                                  width={511}
                                  height={563}
                                  alt=""
                                  typeof="foaf:Image"
                                />
                              )}
                            </div>
                            <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                              {' '}
                              {item?.featuredMedia?.url && (
                                <img
                                  src={item?.featuredMedia?.url}
                                  width={370}
                                  height={372}
                                  alt=""
                                  typeof="foaf:Image"
                                />
                              )}
                            </div>
                          </div>
                          <div className="slide-testimonial-right">
                            <div className="slide-testimonial-wrapper">
                              <div className="field_text field--name-field_text field--name-field-text text-formatted">
                                <p>{item?.testimonialBody}</p>
                              </div>
                              <div className="name field--name-name">{item?.witness}</div>
                              <div className="field_job_title field--name-field_job_title field--name-field-job-title">
                                {item?.witnessTitle}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                })}
            </SplideTrack>
            <div className={['splide__navigation', classes['splide-navigation']].join(' ')}>
              <div className="splide__navigation__wrap">
                <ul
                  className={[
                    'splide__pagination splide__pagination--ltr',
                    classes['pagination'],
                  ].join(' ')}
                  role="tablist"
                  aria-label="Select a slide to show"
                ></ul>
                <div
                  className={['splide__arrows splide__arrows--ltr', classes['splide-arrows']].join(
                    ' ',
                  )}
                >
                  <button
                    className={[
                      'splide__arrow splide__arrow--prev',
                      classes['splide-arrow'],
                      classes['splide-arrow-prev'],
                    ].join(' ')}
                    type="button"
                    aria-label="Previous slide"
                    aria-controls="splide-47ee28b9e2b-track"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 40"
                      width={40}
                      height={40}
                      focusable="false"
                    >
                      <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                    </svg>
                  </button>
                  <button
                    className={[
                      'splide__arrow splide__arrow--next',
                      classes['splide-arrow'],
                      classes['splide-arrow-next'],
                    ].join(' ')}
                    type="button"
                    aria-label="Go to first slide"
                    aria-controls="splide-47ee28b9e2b-track"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 40"
                      width={40}
                      height={40}
                      focusable="false"
                    >
                      <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
};
