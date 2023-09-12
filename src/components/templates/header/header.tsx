/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
import Menu from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Theme, Toolbar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import { CtfNavigationGql } from '@src/components/features/ctf-components/ctf-navigation/ctf-navigation-gql';
import { Link } from '@src/components/shared/link';
import Logo from '@src/icons/colorful-coin-logo.svg';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    boxShadow: '0 2px 6px #00000021',
  },
  toolbar: {
    height: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      height: HEADER_HEIGHT,
    },
  },
  toolbarContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'block',
    maxWidth: '120px',
    height: 'auto',
  },
  menuWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  accountMenu: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  accountMenuItem: {
    '& + &': {
      marginLeft: theme.spacing(8),

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: '0.4rem',
    },
    '& .MuiButton-iconSizeSmall > :first-child': {
      fontSize: '1.5rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    width: '113px',
  },
}));

interface HeaderPropsInterface {
  isMenuOpen?: boolean;
  onMenuClick?: () => any;
}

export const Header = (props: HeaderPropsInterface) => {
  const { t } = useTranslation();

  const { onMenuClick, isMenuOpen } = props;
  const classes = useStyles();

  return (
    <>
      <header
        className="main-header on-top"
        role="banner"
        style={{
          boxSizing: 'border-box',
          zIndex: 100,
          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
          transition: 'top 0.3s ease 0s',
          minHeight: '70px',
          left: '0px',
          width: '100%',
          backgroundColor: 'transparent',
          color: 'white',
          top: '0px',
          position: 'fixed',
        }}
      >
        <div
          className="main-header-inner"
          style={{
            boxSizing: 'border-box',
            margin: '0px auto',
            padding: '0px 10px 20px',
            maxWidth: '1600px',
          }}
        >
          <div className="branding-region" style={{ boxSizing: 'border-box' }}>
            <div
              id="block-search-form-block"
              className="views-exposed-form search-block-form"
              style={{
                boxSizing: 'border-box',
                padding: '29px 10px',
                overflow: 'hidden',
                display: 'none',
                backgroundColor: 'transparent',
              }}
            >
              <form
                id="views-exposed-form-indexed-contents-page-2"
                acceptCharset="UTF-8"
                action="/search/site"
                method="get"
                style={{
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  className="js-form-item form-item js-form-type-textfield form-item-f js-form-item-f form-no-label"
                  style={{ boxSizing: 'border-box', marginBottom: '0px' }}
                >
                  <input
                    id="edit-f"
                    className="form-text"
                    name="f"
                    type="text"
                    maxLength={128}
                    size={30}
                    style={{
                      boxSizing: 'border-box',
                      fontFamily: '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                      borderWidth: '0px 0px 1px',
                      borderImage: 'initial',
                      borderRadius: '0px',
                      outline: 'none',
                      width: '100%',
                      height: '49px',
                      backgroundColor: 'transparent',
                      color: 'rgb(255, 255, 255)',
                      borderTopStyle: 'initial',
                      borderRightStyle: 'initial',
                      borderLeftStyle: 'initial',
                      borderTopColor: 'initial',
                      borderRightColor: 'initial',
                      borderLeftColor: 'initial',
                      paddingLeft: '20px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'rgb(255, 255, 255)',
                    }}
                  />
                </div>
                <div
                  id="edit-actions"
                  className="form-actions js-form-wrapper form-wrapper"
                  style={{ boxSizing: 'border-box', marginBottom: '0px' }}
                >
                  <input
                    id="edit-submit-indexed-contents"
                    className="button js-form-submit form-submit"
                    type="submit"
                    defaultValue="Apply"
                    style={{
                      boxSizing: 'border-box',
                      fontFamily: '"Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      border: '0px',
                      backgroundImage:
                        'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/search-white.png")',
                      backgroundSize: '24px 24px',
                      backgroundColor: 'transparent',
                      fontSize: '0px',
                      height: '40px',
                      width: '40px',
                      position: 'absolute',
                      right: '8px',
                      top: '5px',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="main-header-nav"
            style={{
              boxSizing: 'border-box',
              paddingTop: '20px',
              display: 'flex',
            }}
          >
            <div
              className="menu-holder"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-between',
                flex: '1 1 0%',
                marginRight: '20px',
              }}
            >
              <div
                className="row row-branding"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  id="block-system-branding-block"
                  className="block-am-branding"
                  style={{ boxSizing: 'border-box', marginRight: '30px' }}
                >
                  <div className="site-logo" style={{ boxSizing: 'border-box' }}>
                    <a
                      href="https://www.alvarezandmarsal.com/"
                      rel="home"
                      style={{
                        boxSizing: 'border-box',
                        transition: 'color 0.2s ease-out 0s',
                        textDecoration: 'none',
                        color: 'rgb(0, 133, 202)',
                        border: '0px',
                        display: 'block',
                        fontSize: '0px',
                      }}
                    >
                      <Image
                        alt="Home"
                        src="https://www.alvarezandmarsal.com/themes/custom/am/logo.svg"
                        style={{
                          boxSizing: 'border-box',
                          maxWidth: '100%',
                          height: 'auto',
                          width: '80px',
                          display: 'none',
                        }}
                      />
                    </a>
                    <div
                      className="am-branding-logo-white"
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        maxWidth: '80px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/"
                        rel="home"
                        style={{
                          boxSizing: 'border-box',
                          transition: 'color 0.2s ease-out 0s',
                          textDecoration: 'none',
                          color: 'rgb(0, 133, 202)',
                          border: '0px',
                          display: 'block',
                          fontSize: '0px',
                        }}
                      >
                        <svg
                          className="flogo"
                          height="66.898"
                          width="75.667"
                          viewBox="0 0 75.667 66.898"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ boxSizing: 'border-box' }}
                        >
                          <g
                            id="logo"
                            transform="translate(-41.11 -169.922)"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <g
                              id="Group_1635"
                              transform="translate(41.11 169.922)"
                              style={{ boxSizing: 'border-box' }}
                            >
                              <path
                                id="Path_36-2"
                                d="M86.8,190.181h2.066l4.771,10.546H91.692l-1.382-3.185H85.168l-1.443,3.185H81.844Zm3,6.219-2.026-4.654L85.671,196.4Z"
                                fill="#fff"
                                transform="translate(-18.374 -158.614)"
                                style={{ boxSizing: 'border-box' }}
                              />
                              <g
                                id="Group_2-2"
                                transform="translate(63.052 43.508)"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <path
                                  id="Path_37-2"
                                  d="M83.951,201.243a2.186,2.186,0,0,1-.284-1.017,2.076,2.076,0,0,1,.865-1.7,3.618,3.618,0,0,1,2.3-.675,3.3,3.3,0,0,1,2.142.623,1.889,1.889,0,0,1,.767,1.5,2.408,2.408,0,0,1-.793,1.781,7.693,7.693,0,0,1-1.558,1.03l2.4,2.29c.146-.385.249-.672.312-.857a6.132,6.132,0,0,0,.179-.8h1.572a6.452,6.452,0,0,1-.609,1.949c-.3.614-.453.868-.453.743l2.3,2.242H91.048l-1.237-1.173a6.238,6.238,0,0,1-1.342.913,5.629,5.629,0,0,1-2.456.508,4.253,4.253,0,0,1-2.985-.879,2.7,2.7,0,0,1-.935-1.982A2.528,2.528,0,0,1,83,203.749a10.315,10.315,0,0,1,2.068-1.215,5.685,5.685,0,0,1-1.12-1.292m3.9,5.891a3.519,3.519,0,0,0,1.1-.816l-2.978-2.9a8.844,8.844,0,0,0-1.633,1.03,1.7,1.7,0,0,0-.589,1.314,1.415,1.415,0,0,0,.762,1.289,3.149,3.149,0,0,0,1.636.449,3.7,3.7,0,0,0,1.7-.365m-.125-5.952a1.464,1.464,0,0,0,.525-1.091,1.028,1.028,0,0,0-.382-.8,1.537,1.537,0,0,0-1.041-.338,1.592,1.592,0,0,0-1.376.53.952.952,0,0,0-.2.591,1.371,1.371,0,0,0,.3.84,8.4,8.4,0,0,0,1.005,1.047,7.062,7.062,0,0,0,1.169-.779"
                                  fill="#fff"
                                  transform="translate(-81.288 -197.845)"
                                  style={{ boxSizing: 'border-box' }}
                                />
                                <path
                                  id="Path_38-2"
                                  d="M81.578,206.029h2.534l3.775,8.917,3.783-8.917h2.521v10.544H92.508V210.34c0-.215.014-.57.039-1.07s.031-1.031.031-1.6l-3.821,8.9h-1.77l-3.8-8.9v.321c0,.262.014.658.034,1.187s.036.915.036,1.159v6.233h-1.68Z"
                                  fill="#fff"
                                  transform="translate(-81.576 -193.277)"
                                  style={{ boxSizing: 'border-box' }}
                                />
                              </g>
                              <path
                                id="Path_39-2"
                                d="M80.76,169.922l-39.65,66.9h9.167l32.246-56.742V236.82H89.71v-66.9Z"
                                fill="#fff"
                                transform="translate(-41.11 -169.922)"
                                style={{ boxSizing: 'border-box' }}
                              />
                              <path
                                id="Path_40-2"
                                d="M68.517,182.34l-7.233,12.715v34.833h7.233Z"
                                fill="#fff"
                                transform="translate(-29.85 -162.991)"
                                style={{ boxSizing: 'border-box' }}
                              />
                              <path
                                id="Path_41-2"
                                d="M73.817,182.34l7.231,12.715v34.833H73.817Z"
                                fill="#fff"
                                transform="translate(-22.854 -162.991)"
                                style={{ boxSizing: 'border-box' }}
                              />
                            </g>
                          </g>
                        </svg>
                        <svg
                          className="flogo logo-black"
                          height="66.898"
                          width="75.667"
                          viewBox="0 0 75.667 64"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ boxSizing: 'border-box', display: 'none' }}
                        >
                          <g id="Group_1635" style={{ boxSizing: 'border-box' }}>
                            <path
                              id="Path_36-2"
                              d="M86.8,190.181h2.066l4.771,10.546H91.692l-1.382-3.185H85.168l-1.443,3.185H81.844Zm3,6.219-2.026-4.654L85.671,196.4Z"
                              fill="#030303"
                              transform="translate(-18.374 -160.238)"
                              style={{ boxSizing: 'border-box' }}
                            />
                            <g
                              id="Group_2-2"
                              transform="translate(63.052 40.611)"
                              style={{ boxSizing: 'border-box' }}
                            >
                              <path
                                id="Path_37-2"
                                d="M83.951,201.243a2.186,2.186,0,0,1-.284-1.017,2.076,2.076,0,0,1,.865-1.7,3.618,3.618,0,0,1,2.3-.675,3.3,3.3,0,0,1,2.142.623,1.889,1.889,0,0,1,.767,1.5,2.408,2.408,0,0,1-.793,1.781,7.693,7.693,0,0,1-1.558,1.03l2.4,2.29c.146-.385.249-.672.312-.857a6.132,6.132,0,0,0,.179-.8h1.572a6.452,6.452,0,0,1-.609,1.949c-.3.614-.453.868-.453.743l2.3,2.242H91.048l-1.237-1.173a6.238,6.238,0,0,1-1.342.913,5.629,5.629,0,0,1-2.456.508,4.253,4.253,0,0,1-2.985-.879,2.7,2.7,0,0,1-.935-1.982A2.528,2.528,0,0,1,83,203.749a10.315,10.315,0,0,1,2.068-1.215,5.685,5.685,0,0,1-1.12-1.292m3.9,5.891a3.519,3.519,0,0,0,1.1-.816l-2.978-2.9a8.844,8.844,0,0,0-1.633,1.03,1.7,1.7,0,0,0-.589,1.314,1.415,1.415,0,0,0,.762,1.289,3.149,3.149,0,0,0,1.636.449,3.7,3.7,0,0,0,1.7-.365m-.125-5.952a1.464,1.464,0,0,0,.525-1.091,1.028,1.028,0,0,0-.382-.8,1.537,1.537,0,0,0-1.041-.338,1.592,1.592,0,0,0-1.376.53.952.952,0,0,0-.2.591,1.371,1.371,0,0,0,.3.84,8.4,8.4,0,0,0,1.005,1.047,7.062,7.062,0,0,0,1.169-.779"
                                fill="#030303"
                                transform="translate(-81.288 -197.845)"
                                style={{ boxSizing: 'border-box' }}
                              />
                              <path
                                id="Path_38-2"
                                d="M81.578,206.029h2.534l3.775,8.917,3.783-8.917h2.521v10.544H92.508V210.34c0-.215.014-.57.039-1.07s.031-1.031.031-1.6l-3.821,8.9h-1.77l-3.8-8.9v.321c0,.262.014.658.034,1.187s.036.915.036,1.159v6.233h-1.68Z"
                                fill="#030303"
                                transform="translate(-81.576 -193.277)"
                                style={{ boxSizing: 'border-box' }}
                              />
                            </g>
                            <path
                              id="Path_39-2"
                              d="M80.76,169.922l-39.65,64h9.167l32.246-54.284v54.284H89.71v-64Z"
                              fill="#030303"
                              transform="translate(-41.11 -169.922)"
                              style={{ boxSizing: 'border-box' }}
                            />
                            <path
                              id="Path_40-2"
                              d="M68.517,182.34l-7.233,12.715v34.833h7.233Z"
                              fill="#030303"
                              transform="translate(-29.85 -165.889)"
                              style={{ boxSizing: 'border-box' }}
                            />
                            <path
                              id="Path_41-2"
                              d="M73.817,182.34l7.231,12.715v34.833H73.817Z"
                              fill="#030303"
                              transform="translate(-22.854 -165.889)"
                              style={{ boxSizing: 'border-box' }}
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <nav
                  id="block-system-menu-block-main"
                  className="block-am-main-menu"
                  aria-labelledby="block-system-menu-block-main-menu"
                  role="navigation"
                  style={{
                    boxSizing: 'border-box',
                    transition: 'visibility 0s ease 0s, opacity 0.2s ease-out 0s',
                    zIndex: 1,
                    top: '74px',
                    right: '0px',
                    bottom: '0px',
                    position: 'static',
                    width: 'initial',
                    height: 'initial',
                    visibility: 'visible',
                    opacity: 1,
                    backgroundColor: 'transparent',
                  }}
                >
                  <h2
                    id="block-system-menu-block-main-menu"
                    className="visually-hidden"
                    style={{
                      boxSizing: 'border-box',
                      margin: '0px',
                      padding: '0px',
                      fontWeight: 'normal',
                      overflow: 'hidden',
                      clip: 'rect(1px, 1px, 1px, 1px)',
                      width: '1px',
                      height: '1px',
                      overflowWrap: 'normal',
                      position: 'absolute',
                    }}
                  >
                    Main navigation
                  </h2>
                  <ul
                    className="menu-level--0"
                    style={{
                      boxSizing: 'border-box',
                      margin: '0px',
                      padding: '0px',
                      listStyle: 'none',
                      display: 'flex',
                      height: '100%',
                      alignItems: 'stretch',
                    }}
                  >
                    <li
                      className="menu-item has-children"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/about-am"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'About A&M'}
                      </a>
                      <ul
                        className="menu-level--1"
                        style={{
                          boxSizing: 'border-box',
                          margin: '0px',
                          padding: '0px',
                          listStyle: 'none',
                          display: 'none',
                          transition: 'all 0.5s ease-out 0s',
                          backgroundColor: 'rgb(0, 43, 73)',
                          position: 'absolute',
                          top: '100%',
                          left: '100%',
                          width: '100%',
                          height: '100vh',
                        }}
                      >
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/alumni"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Alumni'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/#block-connect-with-us"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Contact Us'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/culture-values"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Culture & Values'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/esg-sustainability-am"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'ESG & Sustainability'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/life-am"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Life at A&M'}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item has-children"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/expertise"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Expertise'}
                      </a>
                      <ul
                        className="menu-level--1"
                        style={{
                          boxSizing: 'border-box',
                          margin: '0px',
                          padding: '0px',
                          listStyle: 'none',
                          display: 'none',
                          transition: 'all 0.5s ease-out 0s',
                          backgroundColor: 'rgb(0, 43, 73)',
                          position: 'absolute',
                          top: '100%',
                          left: '100%',
                          width: '100%',
                          height: '100vh',
                        }}
                      >
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/digital"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Digital'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/environmental-social-governance-esg-services"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Environmental, Social & Governance'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/corporate-performance-improvement"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Corporate Performance Improvement'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/corporate-transformation"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Corporate Transformation'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/taxonomy/term/96"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Technology Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/cfo-services-new"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'CFO Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/supply-chain-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Supply Chain Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/corporate-merger-acquisition-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Merger, Acquisition & Divestiture Services'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/private-equity-services"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Private Equity Services'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/global-transaction-advisory"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Global Transaction Advisory'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/integrated-due-diligence"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Integrated Due Diligence'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/private-equity-performance-improvement"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Portfolio Company Performance Improvement'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/divestiture-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Divestiture Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/services-india"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Services for India'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/restructuring-turnaround"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Restructuring & Turnaround'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/restructuring-advisory"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Restructuring Advisory'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/interim-crisis-management"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Interim & Crisis Management'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/corporate-finance"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Corporate Finance'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/creditor-advisory"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Creditor Advisory'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/claims-management-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Claims Management Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/fiduciary-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Fiduciary Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/insolvency"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Insolvency'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/tax"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Tax'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/federal-tax"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Federal Tax'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/state-local-tax"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'State & Local Tax'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/international-tax"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'International Tax'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/global-transaction-tax-advisory"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Global Transaction Tax Advisory'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/income-tax-accounting"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Income Tax Accounting'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/sales-and-use"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Sales and Use'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/transfer-pricing"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Transfer Pricing'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/compensation-benefits"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Compensation & Benefits'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/real-estate-tax"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Real Estate Tax'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/private-client-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Private Client Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/emea-tax"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'U.K. Tax'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/bankruptcy-tax-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Bankruptcy Tax Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/research-credits-incentives"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Research Credits & Incentives'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/merger-integration-0"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Merger Integration'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/taxand-global"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Taxand Global'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/disputes-investigations"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Disputes and Investigations'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/disputes"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Disputes'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/investigations"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Investigations'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/forensic-technology"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Forensic Technology'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/fiduciary-services-0"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Fiduciary Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/disputes-investigations/cyber-risk-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Global Cyber Risk Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/financial-crimes-investigations"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Financial Crimes & Investigations'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/valuation"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Valuation'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/portfolio-valuation-advisory-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Portfolio Valuation & Advisory Services'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/complex-financial-instruments"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Complex Financial Instruments'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/financial-tax-reporting"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Financial & Tax Reporting'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/litigation-dispute-valuation"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Litigation & Dispute Valuation'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/structured-finance-capital-equipment-valuation"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Structured Finance & Capital Equipment Valuation'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/transaction-opinions"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Transaction Opinions'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/divorce-services"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Divorce Services'}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/expertise/regulatoryrisk-compliance"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Regulatory & Risk Advisory'}
                          </a>
                          <ul
                            className="menu-level--2"
                            style={{
                              boxSizing: 'border-box',
                              margin: '0px',
                              padding: '0px',
                              listStyle: 'none',
                              display: 'none',
                              transition: 'all 0.5s ease-out 0s',
                              backgroundColor: 'rgb(0, 43, 73)',
                              position: 'absolute',
                              top: '100%',
                              left: '100%',
                              width: '100%',
                              height: '100vh',
                            }}
                          >
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/banking"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Banking'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/corporate-risk-management"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Corporate Risk Management'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/diversified-financials"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Diversified Financials'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/insurance-regulatory"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Insurance Regulatory'}
                              </a>
                            </li>
                            <li style={{ boxSizing: 'border-box' }}>
                              <a
                                href="https://www.alvarezandmarsal.com/expertise/global-cyber-risk"
                                style={{
                                  boxSizing: 'border-box',
                                  textDecoration: 'none',
                                  fontFamily:
                                    '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                  fontWeight: 300,
                                  transition: 'color 0.2s ease-out 0s',
                                  display: 'block',
                                  color: 'rgb(14, 64, 103)',
                                  padding: '0px',
                                  paddingRight: '1rem',
                                  paddingLeft: '1rem',
                                  borderBottom: 'none',
                                  alignSelf: 'flex-start',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {'Global Cyber Risk Services'}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item has-children"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/industries"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Industries'}
                      </a>
                      <ul
                        className="menu-level--1"
                        style={{
                          boxSizing: 'border-box',
                          margin: '0px',
                          padding: '0px',
                          listStyle: 'none',
                          display: 'none',
                          transition: 'all 0.5s ease-out 0s',
                          backgroundColor: 'rgb(0, 43, 73)',
                          position: 'absolute',
                          top: '100%',
                          left: '100%',
                          width: '100%',
                          height: '100vh',
                        }}
                      >
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/aerospace-defense-aviation-space"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Aerospace, Defense, Aviation & Space
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/automotive-and-Industrials"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Automotive & Industrials
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/business-services"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Business Services
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/consumer-products"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Consumer Products
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/education"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Education
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/energy"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Energy
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/environmental-disputes"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Environmental Disputes
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/financial-services"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Financial Services
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/healthcare"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Healthcare
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/infrastructure-capital-projects"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Infrastructure & Capital Projects
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/media-entertainment"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Media & Entertainment
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/pharmaceuticals"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Pharmaceuticals
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/public-sector"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Public Sector Services
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/real-estate"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Real Estate
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/retail"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Retail
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/software-technology-services"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Software, Technology & Services
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/telecommunications"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Telecommunications
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/transportation-logistics"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Transportation & Logistics
                            </a>
                          </span>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="field-content"
                            style={{
                              boxSizing: 'border-box',
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              fontSize: '18px',
                              padding: '0px',
                            }}
                          >
                            <a
                              href="https://www.alvarezandmarsal.com/industries/travel-hospitality-and-leisure"
                              hrefLang="en"
                              style={{
                                boxSizing: 'border-box',
                                textDecoration: 'none',
                                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                                transition: 'color 0.2s ease-out 0s',
                                display: 'block',
                                color: 'rgb(14, 64, 103)',
                                padding: '0px',
                                paddingRight: '1rem',
                                paddingLeft: '1rem',
                                borderBottom: 'none',
                                alignSelf: 'flex-start',
                                textAlign: 'center',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Travel, Hospitality and Leisure
                            </a>
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item has-children"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/insights"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Insights'}
                      </a>
                      <ul
                        className="menu-level--1"
                        style={{
                          boxSizing: 'border-box',
                          margin: '0px',
                          padding: '0px',
                          listStyle: 'none',
                          display: 'none',
                          transition: 'all 0.5s ease-out 0s',
                          backgroundColor: 'rgb(0, 43, 73)',
                          position: 'absolute',
                          top: '100%',
                          left: '100%',
                          width: '100%',
                          height: '100vh',
                        }}
                      >
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://bulletins.alvarezandmarsal.com/"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'A&M Bulletins'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/insights?insight%5B0%5D=1771"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Success Stories'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/insights?insight%5B0%5D=561"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'A&M News & Releases'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/podcasts"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Podcasts'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/insights?insight%5B0%5D=1776"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Business & Industry Insights'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/videos"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Videos'}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/our-people"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Our People'}
                      </a>
                    </li>
                    <li
                      className="menu-item has-children"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://www.alvarezandmarsal.com/global-locations"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Global Locations'}
                      </a>
                      <ul
                        className="menu-level--1"
                        style={{
                          boxSizing: 'border-box',
                          margin: '0px',
                          padding: '0px',
                          listStyle: 'none',
                          display: 'none',
                          transition: 'all 0.5s ease-out 0s',
                          backgroundColor: 'rgb(0, 43, 73)',
                          position: 'absolute',
                          top: '100%',
                          left: '100%',
                          width: '100%',
                          height: '100vh',
                        }}
                      >
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/australia"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Australia'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/austria"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Austria'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/benelux"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Benelux'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/brazil"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Brazil'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/canada"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Canada'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/cayman-islands"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Cayman Islands'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/china"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'China'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/colombia"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Colombia'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/czech-republic"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Czech Republic'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/finland"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Finland'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/france"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'France'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/germany"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Germany'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/greece"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Greece'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/india"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'India'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/indonesia"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Indonesia'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/ireland"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Ireland'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/italy"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Italy'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/korea"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Korea'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/malaysia"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Malaysia'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/mexico"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Mexico'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/norway"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Norway'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/poland"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Poland'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/portugal"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Portugal'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/saudi-arabia"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Saudi Arabia'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/singapore"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Singapore'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/spain"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Spain'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/sweden"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Sweden'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/switzerland"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Switzerland'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/ukraine"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Ukraine'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/united-arab-emirates"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'United Arab Emirates'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/united-kingdom"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'United Kingdom'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/united-states"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'United States'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/uzbekistan"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Uzbekistan'}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: 'border-box',
                            padding: '0.1875rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <a
                            href="https://www.alvarezandmarsal.com/global-locations/vietnam"
                            style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                              fontWeight: 300,
                              transition: 'color 0.2s ease-out 0s',
                              display: 'block',
                              color: 'rgb(14, 64, 103)',
                              padding: '0px',
                              paddingRight: '1rem',
                              paddingLeft: '1rem',
                              borderBottom: 'none',
                              alignSelf: 'flex-start',
                              textAlign: 'center',
                              fontSize: '14px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Vietnam'}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item"
                      style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 18px 39px',
                      }}
                    >
                      <a
                        href="https://careers.alvarezandmarsal.com/"
                        style={{
                          boxSizing: 'border-box',
                          textDecoration: 'none',
                          fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                          fontWeight: 300,
                          transition: 'color 0.2s ease-out 0s',
                          display: 'block',
                          padding: '0px',
                          whiteSpace: 'nowrap',
                          borderBottom: 'none',
                          alignSelf: 'flex-start',
                          textAlign: 'center',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          color: 'white',
                        }}
                      >
                        <div
                          className="mobile-item-arrow"
                          style={{
                            boxSizing: 'border-box',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            display: 'none',
                            backgroundImage:
                              'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/right-chevron-white.png")',
                            width: '20px',
                            height: '20px',
                            backgroundSize: 'contain',
                          }}
                        />
                        {'Careers'}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              className="region-header-short"
              style={{ boxSizing: 'border-box', paddingTop: '15px' }}
            >
              <div
                className="head-submenu-btns"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <div
                  className="dsk-search"
                  style={{
                    boxSizing: 'border-box',
                    display: 'none',
                    position: 'absolute',
                    marginRight: '30px',
                  }}
                >
                  <input
                    type="search"
                    placeholder="Search"
                    style={{
                      boxSizing: 'border-box',
                      borderWidth: '0px 0px 1px',
                      height: '30px',
                      borderBottomStyle: 'solid',
                      backgroundColor: 'transparent',
                      color: 'white',
                      borderBottomColor: 'white',
                    }}
                  />
                </div>
                <a
                  className="header-search-btn"
                  style={{
                    boxSizing: 'border-box',
                    transition: 'color 0.2s ease-out 0s',
                    textDecoration: 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    backgroundSize: '15px 15px',
                    height: '15px',
                    width: '15px',
                    color: 'white',
                    backgroundImage:
                      'url("https://www.alvarezandmarsal.com/themes/custom/am/images/icons/search-white.png")',
                  }}
                />
                <a
                  className="menu-toggle"
                  style={{
                    boxSizing: 'border-box',
                    transition: 'color 0.2s ease-out 0s',
                    textDecoration: 'none',
                    alignSelf: 'stretch',
                    cursor: 'pointer',
                    position: 'relative',
                    marginLeft: '20px',
                    display: 'none',
                    color: 'white',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
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

  return (
    <AppBar position="sticky" color="secondary" className={classes.appbar}>
      <Toolbar>
        <Container
          className={classes.toolbarContent}
          disableGutters
          maxWidth={false}
          style={{
            maxWidth: `${CONTAINER_WIDTH / 10}rem`,
          }}
        >
          <Link href="/" withoutMaterial title={t('common.homepage')}>
            <Logo className={classes.corporateLogo} />
          </Link>
          <Box display={{ xs: 'none', md: 'block' }}>
            <div className={classes.menuWrapper}>
              <CtfNavigationGql />
            </div>
          </Box>
        </Container>

        {/* menu button */}
        <Box display={{ md: 'none' }}>
          <IconButton
            title={t('navigation.mobileMenuButton')}
            onClick={() => onMenuClick?.()}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="dialog"
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
