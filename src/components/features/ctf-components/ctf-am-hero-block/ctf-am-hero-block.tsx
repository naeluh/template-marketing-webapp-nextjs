import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmHeroBlockFieldsFragment } from './__generated/ctf-am-hero-block.generated';
import classes from './ctf-am-hero-block.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
export const AmHeroBlock = (props: AmHeroBlockFieldsFragment) => {
  const layout = useLayoutContext();
  const {
    sys: { id },
    herosCollection,
  } = props;
  return (
    <div className="views-element-container" id="block-views-block-front-slide-main">
      <div>
        <div className="splide--view--front-slide--main view-front-splide js-view-dom-id-fc2cae5981734f7a28a1efa6572eed261fa5cd302ac886baedb390a59c3b2b42">
          <Splide
            hasTrack={false}
            options={{
              count: 3,
              type: 'fade',
              rewind: true,
              speed: 500,
              rewindSpeed: 500,
              easing: 'linear',
            }}
          >
            <SplideTrack>
              {herosCollection?.items &&
                herosCollection?.items.map(item => {
                  return (
                    <SplideSlide key={item?.sys?.id}>
                      <div className={['home-slide', classes['hero-slide']].join(' ')}>
                        <div className="home-slide-container">
                          <div className="home-slide-image">
                            {item?.featuredImage?.url && (
                              <div className="field_slide_image field--name-field_slide_image field--name-field-slide-image">
                                {' '}
                                <img
                                  src={item?.featuredImage?.url}
                                  width={600}
                                  height={600}
                                  alt=""
                                />
                              </div>
                            )}
                          </div>
                          <div className="home-slide-wrapper">
                            <div className="home-slide-text-head">
                              <div className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted">
                                <h2 className="">{item?.headerCopy}</h2>
                                <p className="">&nbsp;</p>
                              </div>
                            </div>
                            <div className="home-slide-text">
                              <div className="field_text field--name-field_text field--name-field-text text-formatted">
                                <p>{item?.subHeaderCopy}</p>
                              </div>
                            </div>
                            {item?.ctaTargetLink && (
                              <div className="">
                                <div className="field_link_to field--name-field_link_to field--name-field-link-to">
                                  <a href={item?.ctaTargetLink} className="">
                                    {item?.ctaCopy}
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundImage: `url("${item?.backgroundImage?.url}")`,
                          }}
                          className="home-slide-image-bg"
                        />
                      </div>
                    </SplideSlide>
                  );
                })}
            </SplideTrack>

            <div className={['splide__navigation', classes['splide-navigation']].join(' ')}>
              <ul
                className={[
                  'splide__pagination splide__pagination--ltr',
                  classes['pagination'],
                ].join(' ')}
                role="tablist"
                aria-label="Select a slide to show"
              ></ul>
              <div className="splide__arrows splide__arrows--ltr">
                <button
                  className={['splide__arrow splide__arrow--prev', classes['splide-arrow']].join(
                    ' ',
                  )}
                  type="button"
                  aria-label="Go to last slide"
                  aria-controls="splide-78457ecf7ce-track"
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
                  className={['splide__arrow splide__arrow--next', classes['splide-arrow']].join(
                    ' ',
                  )}
                  type="button"
                  aria-label="Next slide"
                  aria-controls="splide-78457ecf7ce-track"
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
          </Splide>
          <div className="scroll-down fixed">
            <div>Scroll Down</div>
            <img
              src="https://www.alvarezandmarsal.com/themes/custom/am/images/icons/arrow-right-white-64.png"
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
