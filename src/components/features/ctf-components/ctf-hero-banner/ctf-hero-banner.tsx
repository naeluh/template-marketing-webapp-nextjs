import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useMemo } from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
  },

  fullScreen: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MD})`,
    [theme.breakpoints.up('md')]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
    },
    '@media (min-height: 91.2em)': {
      minHeight: '91.2rem',
    },
  },

  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '125.8rem',
    padding: theme.spacing(33, 0, 33),
    position: 'relative',
    width: '100%',
    '@media (min-height: 91.2em)': {
      padding: theme.spacing(39, 0, 39),
    },
  },

  partialBgContainer: {
    display: 'none',
    height: '100%',
    left: '50%',
    maxWidth: '192rem',
    position: 'absolute',
    top: 0,
    transform: 'translateX(-50%)',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  partialBg: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
  },

  headline: {
    fontSize: '3rem',
    fontWeight: 800,
    lineHeight: 1.08,
    maxWidth: '44rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.56,
    marginTop: theme.spacing(6),
    maxWidth: '46.9rem',
    '& p': {
      fontSize: '2.5rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(6),
  },
}));

export const CtfHeroBanner = (props: HeroBannerFieldsFragment) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    // Tutorial: uncomment the line below to make the Greeting field available to render
    // greeting,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
  } = props;
  const layout = useLayoutContext();

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true ? 'full_screen' : 'fixed_height';
  const backgroundImage = useMemo(
    () =>
      image
        ? `${image.url}?w=${imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2}`
        : undefined,
    [image, imageStyle, layout.containerWidth],
  );
  const classes = useStyles();
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <>
      <div
        id="block-views-block-front-slide-main"
        className="views-element-container"
        style={{ boxSizing: 'border-box', width: '100%' }}
      >
        <div style={{ boxSizing: 'border-box' }}>
          <div
            className="view-front-splide js-view-dom-id-67bea3403747be5c69db01de94880fa2a462ee57937c8d0cb27130ea3ebc3242"
            style={{ boxSizing: 'border-box', position: 'relative' }}
          >
            <div
              id="splide-78457ecf7ce"
              className="splide splide--default blazy splide--view splide--view--front-slide splide--view--front-slide--main splide--view--front-slide-block-main splide--optionset--home-slide is-paginated splide--fade splide--ltr splide--draggable is-active is-initialized is-mounted"
              aria-roledescription="carousel"
              role="region"
              style={{
                maxWidth: '100%',
                boxSizing: 'border-box',
                position: 'relative',
                visibility: 'visible',
              }}
            >
              <div className="splide__slider" style={{ boxSizing: 'border-box' }}>
                <div
                  id="splide-78457ecf7ce-track"
                  className="splide__track splide__track--fade splide__track--ltr splide__track--draggable"
                  aria-atomic="true"
                  aria-busy="false"
                  aria-live="polite"
                  style={{
                    userSelect: 'none',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 0,
                    boxSizing: 'border-box',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                  }}
                >
                  <ul
                    id="splide-78457ecf7ce-list"
                    className="splide__list"
                    role="presentation"
                    style={{
                      listStyle: 'none',
                      backfaceVisibility: 'hidden',
                      height: '100%',
                      boxSizing: 'border-box',
                      display: 'block',
                      margin: '0px',
                      padding: '0px',
                    }}
                  >
                    {' '}
                    <li
                      id="splide-78457ecf7ce-slide01"
                      className="splide__slide slide slide--0"
                      aria-hidden="true"
                      aria-label="1 of 3"
                      aria-roledescription="slide"
                      role="tabpanel"
                      tabIndex={-1}
                      style={{
                        margin: '0px',
                        backfaceVisibility: 'hidden',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        left: '0px',
                        opacity: 0,
                        position: 'absolute',
                        top: '0px',
                        zIndex: 0,
                        transition: 'opacity 500ms linear 0s',
                        width: 'calc(100%)',
                        listStyleType: 'none',
                      }}
                    >
                      {' '}
                      <div
                        className="home-slide"
                        style={{
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          position: 'relative',
                          color: 'white',
                          padding: '250px 10px',
                        }}
                      >
                        <div
                          className="home-slide-container"
                          style={{
                            boxSizing: 'border-box',
                            zIndex: 2,
                            width: '100%',
                            margin: '0px auto',
                            maxWidth: '1140px',
                            display: 'flex',
                          }}
                        >
                          <div
                            className="home-slide-image"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: '315px',
                              width: '100%',
                              marginRight: '30px',
                            }}
                          >
                            <div
                              className="field_slide_image field--name-field_slide_image field--name-field-slide-image"
                              style={{ boxSizing: 'border-box' }}
                            >
                              {' '}
                              <Image
                                height={315}
                                width={315}
                                src={
                                  'https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_tag_aus_600x600px_fin.jpg?itok=vbhh6xM1'
                                }
                                typeof="foaf:Image"
                              />
                            </div>
                          </div>
                          <div
                            className="home-slide-wrapper"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: 'calc(100% - 345px)',
                              minHeight: '450px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div
                              className="home-slide-text-head"
                              style={{
                                boxSizing: 'border-box',
                                paddingBottom: '15px',
                                marginBottom: '15px',
                                textShadow: 'rgba(0, 0, 0, 0.52) 1px 2px 5px',
                                borderBottom: '1px solid rgb(220, 220, 220)',
                                fontSize: '22px',
                              }}
                            >
                              <div
                                className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <h2
                                  style={{
                                    margin: '0px',
                                    padding: '0px',
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    textTransform: 'uppercase',
                                    fontFamily:
                                      '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                    lineHeight: 1,
                                    fontSize: '66px',
                                    fontWeight: 300,
                                  }}
                                >
                                  A&M’s Transaction Advisory Group Expands its Services to Australia
                                </h2>
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                  }}
                                />
                              </div>
                            </div>
                            <div
                              className="home-slide-text"
                              style={{
                                boxSizing: 'border-box',
                                marginBottom: 'auto',
                                fontSize: '25px',
                                fontFamily:
                                  '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                textShadow: 'rgba(0, 0, 0, 0.518) 0px 3px 6px',
                              }}
                            >
                              <div
                                className="field_text field--name-field_text field--name-field-text text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    fontSize: '23px',
                                  }}
                                >
                                  The practice has appointed five new Managing Directors in
                                  Australia, underscoring its strategic growth and the firm’s
                                  continued commitment to integrating its private equity services
                                  and operations in the region.
                                </p>
                              </div>
                            </div>
                            <div style={{ boxSizing: 'border-box' }}>
                              <div
                                className="field_link_to field--name-field_link_to field--name-field-link-to"
                                style={{
                                  boxSizing: 'border-box',
                                  transition: 'all 0.5s ease 0s',
                                  marginTop: '50px',
                                  position: 'relative',
                                  display: 'inline-flex',
                                  width: '275px',
                                }}
                              >
                                <a
                                  href="https://www.alvarezandmarsal.com/insights/alvarez-marsals-global-transaction-advisory-group-expands-australia-adding-five-managing"
                                  tabIndex={-1}
                                  style={{
                                    transition: 'color 0.2s ease-out 0s',
                                    textDecoration: 'none',
                                    boxSizing: 'border-box',
                                    whiteSpace: 'nowrap',
                                    height: '45px',
                                    paddingLeft: '65px',
                                    paddingRight: '15px',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 2,
                                    lineHeight: '28px',
                                    color: 'rgb(0, 133, 202)',
                                    fontFamily:
                                      '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    letterSpacing: '4.18px',
                                  }}
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="home-slide-image-bg"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            transition: 'all 0.2s ease 0s',
                            transform: 'scale(1.3)',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_tag_aus_1682x879_fin.jpg")',
                          }}
                        />
                      </div>
                    </li>{' '}
                    <li
                      id="splide-78457ecf7ce-slide02"
                      className="splide__slide slide slide--1 is-prev"
                      aria-hidden="true"
                      aria-label="2 of 3"
                      aria-roledescription="slide"
                      role="tabpanel"
                      tabIndex={-1}
                      style={{
                        margin: '0px',
                        backfaceVisibility: 'hidden',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        left: '0px',
                        opacity: 0,
                        position: 'absolute',
                        top: '0px',
                        zIndex: 0,
                        transition: 'opacity 500ms linear 0s',
                        width: 'calc(100%)',
                        listStyleType: 'none',
                      }}
                    >
                      {' '}
                      <div
                        className="home-slide"
                        style={{
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          position: 'relative',
                          color: 'white',
                          padding: '250px 10px',
                        }}
                      >
                        <div
                          className="home-slide-container"
                          style={{
                            boxSizing: 'border-box',
                            zIndex: 2,
                            width: '100%',
                            margin: '0px auto',
                            maxWidth: '1140px',
                            display: 'flex',
                          }}
                        >
                          <div
                            className="home-slide-image"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: '315px',
                              width: '100%',
                              marginRight: '30px',
                            }}
                          >
                            <div
                              className="field_slide_image field--name-field_slide_image field--name-field-slide-image"
                              style={{ boxSizing: 'border-box' }}
                            >
                              {' '}
                              <Image
                                height={315}
                                width={315}
                                src="https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_me_survey_600x600px_fin.jpg?itok=vYwHIYhp"
                                typeof="foaf:Image"
                                style={{
                                  boxSizing: 'border-box',
                                  verticalAlign: 'bottom',
                                  height: 'auto',
                                  border: '0px',
                                  maxWidth: '100%',
                                  willChange: 'auto',
                                }}
                              />
                            </div>
                          </div>
                          <div
                            className="home-slide-wrapper"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: 'calc(100% - 345px)',
                              minHeight: '450px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div
                              className="home-slide-text-head"
                              style={{
                                boxSizing: 'border-box',
                                paddingBottom: '15px',
                                marginBottom: '15px',
                                textShadow: 'rgba(0, 0, 0, 0.52) 1px 2px 5px',
                                borderBottom: '1px solid rgb(220, 220, 220)',
                                fontSize: '22px',
                              }}
                            >
                              <div
                                className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <h2
                                  style={{
                                    margin: '0px',
                                    padding: '0px',
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    textTransform: 'uppercase',
                                    fontFamily:
                                      '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                    lineHeight: 1,
                                    fontSize: '66px',
                                    fontWeight: 300,
                                  }}
                                >
                                  A&M Releases the Turnaround and Restructuring Survey Results for
                                  Q2
                                </h2>
                              </div>
                            </div>
                            <div
                              className="home-slide-text"
                              style={{
                                boxSizing: 'border-box',
                                marginBottom: 'auto',
                                fontSize: '25px',
                                fontFamily:
                                  '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                textShadow: 'rgba(0, 0, 0, 0.518) 0px 3px 6px',
                              }}
                            >
                              <div
                                className="field_text field--name-field_text field--name-field-text text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    fontSize: '23px',
                                  }}
                                >
                                  Survey results indicate concerns related to macroeconomic
                                  conditions in the region are softening, with some predicting
                                  businesses will still experience a level of distress for some
                                  time.
                                </p>
                              </div>
                            </div>
                            <div style={{ boxSizing: 'border-box' }}>
                              <div
                                className="field_link_to field--name-field_link_to field--name-field-link-to"
                                style={{
                                  boxSizing: 'border-box',
                                  transition: 'all 0.5s ease 0s',
                                  marginTop: '50px',
                                  position: 'relative',
                                  display: 'inline-flex',
                                  width: '275px',
                                }}
                              >
                                <a
                                  href="https://www.alvarezandmarsal.com/insights/alvarez-marsals-middle-east-turnaround-and-restructuring-survey-reflects-softening"
                                  tabIndex={-1}
                                  style={{
                                    transition: 'color 0.2s ease-out 0s',
                                    textDecoration: 'none',
                                    boxSizing: 'border-box',
                                    whiteSpace: 'nowrap',
                                    height: '45px',
                                    paddingLeft: '65px',
                                    paddingRight: '15px',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 2,
                                    lineHeight: '28px',
                                    color: 'rgb(0, 133, 202)',
                                    fontFamily:
                                      '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    letterSpacing: '4.18px',
                                  }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="home-slide-image-bg"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            transition: 'all 0.2s ease 0s',
                            transform: 'scale(1.3)',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_me_survey_1682x879_fin.jpg")',
                          }}
                        />
                      </div>
                    </li>{' '}
                    <li
                      id="splide-78457ecf7ce-slide03"
                      className="splide__slide slide slide--2 is-active is-visible"
                      aria-label="3 of 3"
                      aria-roledescription="slide"
                      role="tabpanel"
                      tabIndex={0}
                      style={{
                        margin: '0px',
                        backfaceVisibility: 'hidden',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        left: '0px',
                        top: '0px',
                        opacity: 1,
                        position: 'relative',
                        zIndex: 1,
                        transition: 'opacity 500ms linear 0s',
                        width: 'calc(100%)',
                        listStyleType: 'none',
                      }}
                    >
                      {' '}
                      <div
                        className="home-slide"
                        style={{
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          position: 'relative',
                          color: 'white',
                          padding: '250px 10px',
                        }}
                      >
                        <div
                          className="home-slide-container"
                          style={{
                            boxSizing: 'border-box',
                            zIndex: 2,
                            width: '100%',
                            margin: '0px auto',
                            maxWidth: '1140px',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div
                            className="home-slide-image"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: '315px',
                              width: '100%',
                              marginRight: '30px',
                            }}
                          >
                            <div
                              className="field_slide_image field--name-field_slide_image field--name-field-slide-image"
                              style={{ boxSizing: 'border-box' }}
                            >
                              {' '}
                              <Image
                                height={315}
                                width={315}
                                src="https://www.alvarezandmarsal.com/sites/default/files/styles/600x600/public/slide/image/417736-31614_website_hero_image_sept2023_emea_award_600x600px.jpg?itok=x426DfUi"
                                typeof="foaf:Image"
                                style={{
                                  boxSizing: 'border-box',
                                  verticalAlign: 'bottom',
                                  height: 'auto',
                                  border: '0px',
                                  maxWidth: '100%',
                                  willChange: 'auto',
                                }}
                              />
                            </div>
                          </div>
                          <div
                            className="home-slide-wrapper"
                            style={{
                              boxSizing: 'border-box',
                              maxWidth: 'calc(100% - 345px)',
                              minHeight: '450px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div
                              className="home-slide-text-head"
                              style={{
                                boxSizing: 'border-box',
                                paddingBottom: '15px',
                                marginBottom: '15px',
                                textShadow: 'rgba(0, 0, 0, 0.52) 1px 2px 5px',
                                borderBottom: '1px solid rgb(220, 220, 220)',
                                fontSize: '22px',
                              }}
                            >
                              <div
                                className="field_text_head field--name-field_text_head field--name-field-text-head text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <h2
                                  style={{
                                    margin: '0px',
                                    padding: '0px',
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    textTransform: 'uppercase',
                                    fontFamily:
                                      '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                    lineHeight: 1,
                                    fontSize: '66px',
                                    fontWeight: 300,
                                  }}
                                >
                                  <b style={{ boxSizing: 'border-box' }}>
                                    A&M Wins RealDeals      Private Equity Award
                                  </b>
                                </h2>
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                  }}
                                ></p>
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                  }}
                                ></p>
                              </div>
                            </div>
                            <div
                              className="home-slide-text"
                              style={{
                                boxSizing: 'border-box',
                                marginBottom: 'auto',
                                fontSize: '25px',
                                fontFamily:
                                  '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                textShadow: 'rgba(0, 0, 0, 0.518) 0px 3px 6px',
                              }}
                            >
                              <div
                                className="field_text field--name-field_text field--name-field-text text-formatted"
                                style={{
                                  boxSizing: 'border-box',
                                  fontSize: '20px',
                                  lineHeight: 1.2,
                                  fontFamily:
                                    '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                                  color: 'white',
                                }}
                              >
                                <p
                                  style={{
                                    boxSizing: 'border-box',
                                    marginBottom: '20px',
                                    fontSize: '23px',
                                  }}
                                >
                                  The firm’s Transaction Advisory Group in EMEA won the Financial
                                  Due Diligence Provider of the Year award for demonstrating how it
                                  created a bespoke value-driven service with unmatched insight into
                                  a business issue.
                                </p>
                              </div>
                            </div>
                            <div style={{ boxSizing: 'border-box' }}>
                              <div
                                className="field_link_to field--name-field_link_to field--name-field-link-to"
                                style={{
                                  boxSizing: 'border-box',
                                  transition: 'all 0.5s ease 0s',
                                  marginTop: '50px',
                                  position: 'relative',
                                  display: 'inline-flex',
                                  width: '275px',
                                }}
                              >
                                <a
                                  href="https://www.alvarezandmarsal.com/awards"
                                  style={{
                                    transition: 'color 0.2s ease-out 0s',
                                    textDecoration: 'none',
                                    boxSizing: 'border-box',
                                    whiteSpace: 'nowrap',
                                    height: '45px',
                                    paddingLeft: '65px',
                                    paddingRight: '15px',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 2,
                                    lineHeight: '28px',
                                    color: 'rgb(0, 133, 202)',
                                    fontFamily:
                                      '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    letterSpacing: '4.18px',
                                  }}
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="home-slide-image-bg"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            transition: 'all 0.2s ease 0s',
                            transform: 'scale(1)',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/sites/default/files/slide/background/417736-31614_website_hero_image_sept2023_emea_award_1682x879_fin_0.jpg")',
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              box-sizing: border-box;
              width: 100%;
              scroll-behavior: smooth;
            }

            body {
              box-sizing: border-box;
              width: 100%;
              margin: 0px;
              padding: 0px;
              overflow-x: hidden;
              background-color: rgb(238, 238, 238);
              font-family: "Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif;
            }
          `,
        }}
      />
    </>
  );
};
