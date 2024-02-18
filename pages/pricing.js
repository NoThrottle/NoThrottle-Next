import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Pricing = (props) => {
  return (
    <>
      <div className="pricing-container">
        <Head>
          <title>Pricing - NoThrottle</title>
          <meta property="og:title" content="Pricing - NoThrottle" />
        </Head>
        <Header1 rootClassName="header1-root-class-name2"></Header1>
        <div className="pricing-pricing">
          <div className="pricing-container01">
            <div className="pricing-pricing-card">
              <span className="pricing-text">Video editing</span>
              <div className="pricing-container02">
                <span className="pricing-text01">
                  <span>
                    Starts at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="pricing-text03">$</span>
                </span>
                <span className="pricing-text04">1</span>
                <span className="pricing-text05">/ minute</span>
              </div>
              <span className="pricing-text06">
                Plus $3.5 base fee per video. Does not include motion graphics,
                sound design, stock footage, and visual effects.
              </span>
              <div className="pricing-container03">
                <span className="pricing-text07">✔ Up to 3 Free Revisions</span>
                <span className="pricing-text08">✔ Color Graded*</span>
                <span className="pricing-text09">
                  ✔ No Branding or Watermarks when completed
                </span>
                <span className="pricing-text10">
                  ✔ No Project Limitations*
                </span>
              </div>
              <button className="pricing-button button">Contact Us</button>
            </div>
            <div className="pricing-pricing-card1">
              <span className="pricing-text11">graphic design</span>
              <div className="pricing-container04">
                <span className="pricing-text12">
                  <span>
                    Starts at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="pricing-text14">$</span>
                </span>
                <span className="pricing-text15">2</span>
                <span className="pricing-text16">/ size</span>
              </div>
              <span className="pricing-text17">
                Plus $3 base fee per design. Does not include stock images.
              </span>
              <div className="pricing-container05">
                <span className="pricing-text18">
                  ✔ Up to 30,000 by 30,000 pixels
                </span>
                <span className="pricing-text19">
                  ✔ Up to 3 Free Design Revisions*
                </span>
                <span className="pricing-text20">✔ SVG whenever possible</span>
                <span className="pricing-text21">✔ Always lossless or PNG</span>
                <span className="pricing-text22">
                  ✔ Unlimited collabotators
                </span>
              </div>
              <button className="pricing-button1 button">Contact Us</button>
            </div>
            <div className="pricing-pricing-card2">
              <span className="pricing-text23">complex video</span>
              <div className="pricing-container06">
                <span className="pricing-text24">
                  <span>
                    Starts at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="pricing-text26">$</span>
                </span>
                <span className="pricing-text27">2.5</span>
                <span className="pricing-text28">/ minute</span>
              </div>
              <span className="pricing-text29">
                Plus $12 base fee per project. Does not come with stock content,
                3D graphics, and visual effects.
              </span>
              <div className="pricing-container07">
                <span className="pricing-text30">
                  ✔ Includes Motion Graphics when Necessary
                </span>
                <span className="pricing-text31">
                  ✔ Up to 3 Free Revisions*
                </span>
                <span className="pricing-text32">
                  ✔ No Branding or Watermarks when completed
                </span>
                <span className="pricing-text33">
                  ✔ Access to all Project Files for a fee
                </span>
              </div>
              <button className="pricing-button2 button">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="pricing-pricing1">
          <div className="pricing-card">
            <span className="pricing-text34">ILLUSTRATION</span>
            <div className="pricing-container08">
              <span className="pricing-text35">starts at</span>
              <span className="pricing-text36">$6</span>
              <span className="pricing-text37">Per drawing</span>
            </div>
            <button className="pricing-button3 button">Learn More</button>
          </div>
          <div className="pricing-card1">
            <span className="pricing-text38">MUSIC PRODUCTION</span>
            <div className="pricing-container09">
              <span className="pricing-text39">starts at</span>
              <span className="pricing-text40">$15</span>
              <span className="pricing-text41">Per project</span>
            </div>
            <button className="pricing-button4 button">Learn More</button>
          </div>
          <div className="pricing-card2">
            <span className="pricing-text42">
              SOFTWARE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="pricing-container10">
              <span className="pricing-text43">starts at</span>
              <span className="pricing-text44">$45</span>
              <span className="pricing-text45">Per project</span>
            </div>
            <button className="pricing-button5 button">Learn More</button>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .pricing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pricing-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-position: center;
          }
          .pricing-container01 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .pricing-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card:hover {
            transform: scale(1.02);
          }
          .pricing-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text01 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text03 {
            font-weight: 700;
          }
          .pricing-text04 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text05 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text06 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container03 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pricing-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card1:hover {
            transform: scale(1.02);
          }
          .pricing-text11 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text12 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text14 {
            font-weight: 700;
          }
          .pricing-text15 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text16 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pricing-text18 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text19 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text22 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card2:hover {
            transform: scale(1.02);
          }
          .pricing-text23 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text24 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text26 {
            font-weight: 700;
          }
          .pricing-text27 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text28 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text29 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .pricing-text30 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text32 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text33 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1106px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-card {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text34 {
            width: var(--dl-size-size-xlarge);
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-container08 {
            margin: var(--dl-space-space-unit);
            display: flex;
            min-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text35 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text36 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text37 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-button3 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button3:hover {
            transform: scale(1.02);
          }
          .pricing-card1 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text38 {
            width: var(--dl-size-size-xlarge);
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-container09 {
            margin: var(--dl-space-space-unit);
            display: flex;
            min-width: 150px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text39 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text40 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text41 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-button4 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button4:hover {
            transform: scale(1.02);
          }
          .pricing-card2 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-text42 {
            width: var(--dl-size-size-xlarge);
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-container10 {
            margin: var(--dl-space-space-unit);
            display: flex;
            min-width: 150px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text43 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text44 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text45 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-button5 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button5:hover {
            transform: scale(1.02);
          }
          @media (max-width: 1600px) {
            .pricing-pricing-card {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .pricing-text {
              font-size: 1.5rem;
              font-weight: 600;
              text-transform: uppercase;
            }
            .pricing-text01 {
              font-size: 1.15rem;
            }
            .pricing-text03 {
              font-weight: 700;
            }
            .pricing-text04 {
              font-size: 4rem;
              font-weight: 700;
            }
            .pricing-text05 {
              font-size: 1.15rem;
            }
            .pricing-text06 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .pricing-button {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .pricing-pricing-card1 {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .pricing-text11 {
              font-size: 1.5rem;
              font-weight: 600;
              text-transform: uppercase;
            }
            .pricing-text12 {
              font-size: 1.15rem;
            }
            .pricing-text14 {
              font-weight: 700;
            }
            .pricing-text15 {
              font-size: 4rem;
            }
            .pricing-text16 {
              font-size: 1.15rem;
            }
            .pricing-text17 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .pricing-button1 {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .pricing-pricing-card2 {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .pricing-text23 {
              text-transform: uppercase;
            }
            .pricing-text24 {
              font-size: 1.15rem;
            }
            .pricing-text26 {
              font-weight: 700;
            }
            .pricing-text27 {
              font-size: 4rem;
              font-weight: 700;
            }
            .pricing-text28 {
              font-size: 1.15rem;
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text29 {
              color: var(--dl-color-gray-500);
            }
            .pricing-button2 {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .pricing-text34 {
              width: var(--dl-size-size-xlarge);
              font-size: 1.5rem;
              min-width: var(--dl-size-size-xlarge);
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text35 {
              text-transform: uppercase;
            }
            .pricing-text36 {
              font-size: 4rem;
              font-style: normal;
              font-weight: 500;
            }
            .pricing-text37 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text38 {
              width: var(--dl-size-size-xlarge);
              font-size: 1.5rem;
              min-width: var(--dl-size-size-xlarge);
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text39 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
              text-transform: uppercase;
            }
            .pricing-text40 {
              font-size: 4rem;
              font-style: normal;
              font-weight: 500;
            }
            .pricing-text41 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text42 {
              width: var(--dl-size-size-xlarge);
              font-size: 1.5rem;
              min-width: var(--dl-size-size-xlarge);
              font-style: normal;
              font-weight: 300;
            }
            .pricing-text43 {
              text-transform: uppercase;
            }
            .pricing-text44 {
              font-size: 4rem;
            }
            .pricing-text45 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
          }
          @media (max-width: 991px) {
            .pricing-container01 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text36 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-button3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-text40 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-button4 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-text44 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .pricing-button5 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .pricing-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-card {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text34 {
              text-align: center;
            }
            .pricing-card1 {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text38 {
              text-align: center;
            }
            .pricing-card2 {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text42 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .pricing-container01 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card2 {
              margin-bottom: 0px;
            }
            .pricing-pricing1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Pricing
