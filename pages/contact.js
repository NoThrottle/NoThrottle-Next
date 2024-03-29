import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - NoThrottle</title>
          <meta property="og:title" content="Contact - NoThrottle" />
        </Head>
        <Header1 rootClassName="header1-root-class-name1"></Header1>
        <div className="contact-container01">
          <img
            alt="image"
            src="https://i.imgur.com/2X8R0nP.jpg"
            loading="eager"
            className="contact-image"
          />
          <div className="contact-steps">
            <h1 className="contact-text">How We Get Things Done</h1>
            <span className="contact-text01">
              <span>Yes, this includes you!</span>
              <br></br>
            </span>
            <div className="contact-container02">
              <div className="contact-step">
                <div className="contact-container03">
                  <div className="contact-line"></div>
                  <div className="contact-container04">
                    <svg viewBox="0 0 1024 1024" className="contact-icon">
                      <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                    </svg>
                  </div>
                  <div className="contact-line1"></div>
                </div>
                <div className="contact-container05">
                  <h1 className="contact-text04">Brainstorm</h1>
                  <span className="contact-text05">
                    <span>
                      Using your Ideas, our ideas, and examples in the real
                      world, we discover ways to approach your needs.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="contact-step1">
                <div className="contact-container06">
                  <div className="contact-line2"></div>
                  <div className="contact-container07">
                    <svg viewBox="0 0 1024 1024" className="contact-icon2">
                      <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                    </svg>
                  </div>
                  <div className="contact-line3"></div>
                </div>
                <div className="contact-container08">
                  <h1 className="contact-text08">Draft</h1>
                  <span className="contact-text09">
                    <span>
                      We create sketches, blockings, or drafts of ideas that
                      seem to work well together.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="contact-step2">
                <div className="contact-container09">
                  <div className="contact-line4"></div>
                  <div className="contact-container10">
                    <svg viewBox="0 0 1024 1024" className="contact-icon4">
                      <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                      <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                    </svg>
                  </div>
                  <div className="contact-line5"></div>
                </div>
                <div className="contact-container11">
                  <h1 className="contact-text12">Design</h1>
                  <span className="contact-text13">
                    <span>
                      We design using the draft as a guide and iterate through
                      changes with your help.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="contact-step3">
                <div className="contact-container12">
                  <div className="contact-line6"></div>
                  <div className="contact-container13">
                    <svg viewBox="0 0 1024 1024" className="contact-icon7">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                  </div>
                  <div className="contact-line7"></div>
                </div>
                <div className="contact-container14">
                  <h1 className="contact-text16">Publish</h1>
                  <span className="contact-text17">
                    <span>
                      After double checking everything for typos or
                      inconsistencies, they are ready to be published.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-banner">
          <h2 className="contact-text20">
            <span>We look forward to working with you!</span>
            <br className="contact-text22"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <a
            href="mailto:inquire@nothrottle.com?subject="
            className="contact-link button"
          >
            Send an Email
          </a>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-container01 {
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .contact-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .contact-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: -250px;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .contact-text {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .contact-text01 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .contact-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container04 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .contact-icon {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .contact-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container05 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-text04 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text05 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .contact-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .contact-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container07 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .contact-icon2 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .contact-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container08 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-text08 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text09 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .contact-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .contact-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container10 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .contact-icon4 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .contact-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container11 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-text12 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .contact-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .contact-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container13 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .contact-icon7 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .contact-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contact-container14 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-text16 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .contact-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-text20 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-text22 {
            font-weight: 600;
          }
          .contact-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .contact-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 1600px) {
            .contact-container01 {
              height: 100%;
              position: relative;
              align-self: stretch;
              align-items: center;
              justify-content: flex-end;
            }
            .contact-steps {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .contact-text {
              color: var(--dl-color-gray-black);
              font-size: 3rem;
            }
            .contact-text01 {
              color: var(--dl-color-gray-700);
              font-size: 1.15rem;
            }
            .contact-step {
              width: 400px;
            }
            .contact-text04 {
              font-size: 1.5rem;
              font-weight: 500;
            }
            .contact-text05 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .contact-step1 {
              width: 400px;
            }
            .contact-text08 {
              font-size: 1.5rem;
              font-weight: 500;
            }
            .contact-text09 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .contact-step2 {
              width: 400px;
            }
            .contact-text12 {
              font-size: 1.5rem;
              font-weight: 500;
            }
            .contact-text13 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .contact-step3 {
              width: 400px;
            }
            .contact-text16 {
              font-size: 1.5rem;
              font-weight: 500;
            }
            .contact-text17 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 1200px) {
            .contact-steps {
              margin-top: 0px;
              background-color: transparent;
            }
          }
          @media (max-width: 991px) {
            .contact-text {
              text-align: center;
            }
            .contact-text01 {
              text-align: center;
            }
            .contact-text20 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .contact-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-container02 {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .contact-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .contact-container03 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .contact-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-container05 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .contact-text04 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text05 {
              text-align: left;
            }
            .contact-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .contact-container06 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .contact-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-container08 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .contact-text08 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text09 {
              text-align: left;
            }
            .contact-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .contact-container09 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .contact-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-container11 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .contact-text12 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text13 {
              text-align: left;
            }
            .contact-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .contact-container12 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .contact-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .contact-container14 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .contact-text16 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text17 {
              text-align: left;
            }
            .contact-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .contact-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-container02 {
              padding-left: 0px;
            }
            .contact-container05 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-text04 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .contact-container08 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-text08 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .contact-container11 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-text12 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .contact-container14 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-text16 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .contact-banner {
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

export default Contact
