import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Morph = (props) => {
  return (
    <>
      <div className="morph-container">
        <Head>
          <title>Morph - NoThrottle</title>
          <meta property="og:title" content="Morph - NoThrottle" />
        </Head>
        <Header1 rootClassName="header1-root-class-name3"></Header1>
        <div className="morph-hero">
          <img
            alt="image"
            src="https://i.imgur.com/ggHhMWG.jpg"
            className="morph-image"
          />
          <div className="morph-container1">
            <h1 className="morph-text">Morpheus Zion J. Velasco</h1>
            <h2 className="morph-text01">
              Now is the best time to start doing something.
            </h2>
            <div className="morph-btn-group">
              <button className="morph-button button">NoThrottle</button>
              <button className="morph-button1 button">More About Me</button>
            </div>
            <span className="morph-text02">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor. Lorem
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .morph-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .morph-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .morph-image {
            width: 25rem;
            object-fit: contain;
          }
          .morph-container1 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .morph-text {
            font-size: 3rem;
          }
          .morph-text01 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .morph-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .morph-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .morph-button:hover {
            transform: scale(1.02);
          }
          .morph-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .morph-button1:hover {
            transform: scale(1.02);
          }
          .morph-text02 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          @media (max-width: 991px) {
            .morph-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .morph-image {
              order: 2;
            }
            .morph-container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .morph-text {
              text-align: center;
            }
            .morph-text01 {
              text-align: center;
            }
            .morph-text02 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .morph-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .morph-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .morph-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .morph-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .morph-btn-group {
              flex-direction: column;
            }
            .morph-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .morph-text02 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Morph
