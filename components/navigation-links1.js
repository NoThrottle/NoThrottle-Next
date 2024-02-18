import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <nav className="navigation-links1-nav1">
          <Link href="/">
            <a className="navigation-links1-link">{props.text5}</a>
          </Link>
          <Link href="/portfolio">
            <a className="navigation-links1-link1">{props.text11}</a>
          </Link>
          <Link href="/pricing">
            <a className="navigation-links1-link2">{props.text21}</a>
          </Link>
          <Link href="/contact">
            <a className="navigation-links1-link3">{props.text31}</a>
          </Link>
          <span className="navigation-links1-text">{props.text41}</span>
        </nav>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            text-decoration: none;
          }
          .navigation-links1-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-text {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-nav1 {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text21: 'Pricing',
  text31: 'Contact',
  rootClassName: '',
  text41: 'Links',
  text11: 'Portfolio',
  text5: 'Home',
}

NavigationLinks1.propTypes = {
  text21: PropTypes.string,
  text31: PropTypes.string,
  rootClassName: PropTypes.string,
  text41: PropTypes.string,
  text11: PropTypes.string,
  text5: PropTypes.string,
}

export default NavigationLinks1
