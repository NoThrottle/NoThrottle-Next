import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <Link href="/portfolio">
          <a className="navigation-links-link1">{props.text1}</a>
        </Link>
        <span className="navigation-links-text">{props.text2}</span>
        <span className="navigation-links-text1">{props.text3}</span>
        <span className="navigation-links-text2">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-text {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text: 'Home',
  text3: 'Contact',
  text4: 'Links',
  text2: 'Pricing',
  text1: 'Portfolio',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
