import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'

const DarkHeader = (props) => {
  return (
    <>
      <nav
        data-role="Navigation"
        className={`dark-header-header ${props.rootClassName} `}
      >
        <div className="dark-header-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="dark-header-image"
          />
          <span className="dark-header-text">{props.text}</span>
        </div>
        <div className="dark-header-nav">
          <nav className="dark-header-nav1">
            <nav className="dark-header-nav2">
              <Link href="/">
                <a className="dark-header-link">{props.text1}</a>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="dark-header-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="dark-header-dropdown-toggle"
                >
                  <span className="dark-header-text1">Projects</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="dark-header-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="dark-header-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="dark-header-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="dark-header-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dark-header-dropdown-toggle1"
                    >
                      <span className="dark-header-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dark-header-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dark-header-dropdown-toggle2"
                    >
                      <span className="dark-header-text3">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dark-header-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dark-header-dropdown-toggle3"
                    >
                      <span className="dark-header-text4">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="/portfolio">
                <a className="dark-header-link1">{props.text2}</a>
              </Link>
              <Link href="/pricing">
                <a className="dark-header-link2">{props.text3}</a>
              </Link>
              <Link href="/contact">
                <a className="dark-header-link3">{props.text4}</a>
              </Link>
              <span className="dark-header-text5">{props.text5}</span>
            </nav>
          </nav>
        </div>
        <div data-role="BurgerMenu" className="dark-header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="dark-header-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="dark-header-mobile-menu">
          <div className="dark-header-nav3">
            <div className="dark-header-container1">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="dark-header-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="dark-header-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="dark-header-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName9"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="dark-header-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="dark-header-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="dark-header-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .dark-header-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .dark-header-container {
            height: 2rem;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .dark-header-image {
            height: 2rem;
          }
          .dark-header-text {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .dark-header-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .dark-header-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .dark-header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .dark-header-link {
            color: #ffffff;
            text-decoration: none;
          }
          .dark-header-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            margin-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dark-header-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dark-header-text1 {
            color: var(--dl-color-gray-white);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            margin-right: 4px;
            vertical-align: middle;
          }
          .dark-header-dropdown-arrow {
            transition: 0.3s;
          }
          .dark-header-icon {
            fill: #d9d9d9;
            width: 20px;
            height: 20px;
            transition: 0.3s;
          }
          .dark-header-dropdown-list {
            top: var(--dl-space-space-unit);
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: stretch;
            border-color: #2c2c2c;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
            list-style-type: none;
            background-color: #1c1c1c;
            list-style-position: inside;
          }
          .dark-header-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dark-header-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .dark-header-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .dark-header-text2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .dark-header-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dark-header-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .dark-header-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .dark-header-text3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .dark-header-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dark-header-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .dark-header-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .dark-header-text4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .dark-header-link1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .dark-header-link2 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .dark-header-link3 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .dark-header-text5 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .dark-header-burger-menu {
            display: none;
          }
          .dark-header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .dark-header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .dark-header-nav3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dark-header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .dark-header-image1 {
            height: 2rem;
          }
          .dark-header-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dark-header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .dark-header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .dark-header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .dark-header-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 767px) {
            .dark-header-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .dark-header-nav {
              display: none;
            }
            .dark-header-nav1 {
              align-items: flex-start;
              flex-direction: column;
            }
            .dark-header-nav2 {
              align-items: flex-start;
              flex-direction: column;
            }
            .dark-header-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .dark-header-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .dark-header-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .dark-header-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .dark-header-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .dark-header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .dark-header-header {
              padding: var(--dl-space-space-unit);
            }
            .dark-header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

DarkHeader.defaultProps = {
  imageAlt: 'logo',
  text3: 'Pricing',
  text1: 'Home',
  text4: 'Contact',
  imageAlt1: 'image',
  text: 'NoThrottle',
  imageSrc: 'https://i.imgur.com/jlw8qax.png',
  text5: 'Links',
  imageSrc1: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text2: 'Portfolio',
  rootClassName: '',
}

DarkHeader.propTypes = {
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  imageAlt1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  text5: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DarkHeader
