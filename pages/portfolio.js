import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import WorkDefaultCard from '../components/work-default-card'
import NestedWorkHeader from '../components/nested-work-header'
import NestedWorkDefaultCard from '../components/nested-work-default-card'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'

const Portfolio = (props) => {
  return (
    <>
      <div className="portfolio-container">
        <Head>
          <title>Portfolio - NoThrottle</title>
          <meta property="og:title" content="Portfolio - NoThrottle" />
        </Head>
        <Header1 rootClassName="header1-root-class-name"></Header1>
        <div className="portfolio-banner">
          <h1 className="portfolio-text">PORTFOLIO</h1>
        </div>
        <div className="portfolio-container1">
          <div className="portfolio-blog">
            <WorkDefaultCard
              status=" "
              imageSrc="https://i.imgur.com/5E1S2d0.png"
              description="MDPS opens its doors for student enrollment, school years 2022-2023."
              profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              pROJECTDATE="March 4, 2022"
              pROJECTNAME="Enrollment SY 2022-2023 Tarp"
              pROJECTTYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name9"
              revisionsDate="v2-7/3/22, v3-11/3/22"
              fIRSTVERSIONDATE="March 5, 2022"
              finalRevisionDate="March 16, 2022"
            ></WorkDefaultCard>
            <WorkDefaultCard
              status=" "
              imageSrc="https://i.imgur.com/7wTzpYb.png"
              description="MDPS posts general instructions on how to enroll this school year."
              pROJECTDATE="March 11, 2022"
              pROJECTNAME="Enrollment SY 2022-2023 Tarp 2"
              pROJECTTYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name10"
              revisionsDate="v2-2/4/22, v3-2/4/22"
              fIRSTVERSIONDATE="March 30, 2022"
              finalRevisionDate="April 4, 2022"
            ></WorkDefaultCard>
            <div className="portfolio-blog-post-card">
              <img
                alt="image"
                src="https://i.imgur.com/28Iq24T.png"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="portfolio-image"
              />
              <div className="portfolio-container2">
                <div className="portfolio-container3">
                  <span className="portfolio-text01">GRAPHIC DESIGN</span>
                  <span className="portfolio-text02"> </span>
                </div>
                <h1 className="portfolio-text03">
                  Final Enrollment SY 2022-2023 Tarp
                </h1>
                <span className="portfolio-text04">
                  MDPS puts out a final notice of their enrollments being open.
                </span>
                <div className="portfolio-container4">
                  <div className="portfolio-profile">
                    <span className="portfolio-text05">Start Date:</span>
                    <span className="portfolio-text06">
                      First Version Date:
                    </span>
                    <span className="portfolio-text07">Revisions:</span>
                    <span className="portfolio-text08">
                      Final Revision Date:
                    </span>
                  </div>
                  <div className="portfolio-profile1">
                    <span className="portfolio-text09">June 28, 2022</span>
                    <span className="portfolio-text10">July 3, 2022</span>
                    <span className="portfolio-text11">v2-4/7/22</span>
                    <span className="portfolio-text12">July 5, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-container5">
              <NestedWorkHeader
                text="MDPS details their procedures and protocol regarding matters related to the prevention of Covid-19 spread in their school premises."
                text1="ALBUM MULTIMEDIA"
                heading="Covid-19 Procedures and Protocol"
                rootClassName="nested-work-header-root-class-name2"
              ></NestedWorkHeader>
              <NestedWorkDefaultCard
                imageSrc="https://i.imgur.com/vcUYl60.png"
                pROJECTDATE="June 26, 2022"
                pROJECTNAME="Should I Report To School Flowchart"
                pROJECTTYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name10"
                revisionsDate="None"
                finalRevisionDate="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                imageSrc="https://i.imgur.com/MjmiXV6.png"
                pROJECTDATE="June 26. 2022"
                pROJECTNAME="What to do if a student is sick Flowchart"
                pROJECTTYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name11"
                revisionsDate="None"
                finalRevisionDate="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                imageSrc="https://i.imgur.com/ON5FCxk.png"
                pROJECTDATE="June 26, 2022"
                pROJECTNAME="Contingency Plan For School Closure/Re-Opening"
                pROJECTTYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name12"
                revisionsDate="None"
                finalRevisionDate="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                imageSrc="https://i.imgur.com/JjmEY83.png"
                pROJECTDATE="June 26, 2022"
                pROJECTNAME="Contact Tracing Flowchart"
                pROJECTTYPE="Graphic Design"
                rootClassName="nested-work-default-card-root-class-name13"
                revisionsDate="None"
                finalRevisionDate="June 27, 2022"
              ></NestedWorkDefaultCard>
            </div>
            <WorkDefaultCard
              status=" "
              imageSrc="https://i.imgur.com/v1cKM8u.png"
              description="MDPS informs their community using a brochure dense with information about face-to-face classes."
              pROJECTDATE="June 30, 2022"
              pROJECTNAME="MDPS Manual for Face-to-face Classes Brochure"
              pROJECTTYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name11"
              revisionsDate="v2-7/7/22, v3-11/7/22, v4-11/7/22"
              fIRSTVERSIONDATE="July 7, 2022"
              finalRevisionDate="July 11, 2022"
            ></WorkDefaultCard>
          </div>
        </div>
        <img
          alt="image"
          src="/layered-steps.svg"
          className="portfolio-image1"
        />
        <div className="portfolio-gallery">
          <h1 className="portfolio-text13">Other Works</h1>
          <span className="portfolio-text14">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          <div className="portfolio-container6">
            <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .portfolio-container {
            width: 100%;
            display: inline-flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .portfolio-banner {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-height: 100%;
            min-height: 512px;
            align-items: center;
            margin-bottom: -2px;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/waves-cropped.svg');
          }
          .portfolio-text {
            color: #ffffff;
            font-size: 6rem;
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .portfolio-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #001220;
          }
          .portfolio-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .portfolio-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .portfolio-blog-post-card:hover {
            transform: scale(1.02);
          }
          .portfolio-image {
            width: auto;
            height: 350px;
            max-width: 600px;
            min-width: 350px;
            max-height: 350px;
            min-height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            border-radius: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .portfolio-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .portfolio-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .portfolio-text01 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .portfolio-text02 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .portfolio-text03 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .portfolio-text04 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .portfolio-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .portfolio-profile {
            display: flex;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .portfolio-text05 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .portfolio-text06 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .portfolio-text07 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .portfolio-text08 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .portfolio-profile1 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .portfolio-text09 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .portfolio-text10 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .portfolio-text11 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .portfolio-text12 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .portfolio-container5 {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .portfolio-image1 {
            width: 100%;
            height: 100%;
            align-self: end;
            margin-top: -1024px;
            object-fit: cover;
            border-color: #ffffff;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: var(--dl-size-size-xsmall);
          }
          .portfolio-gallery {
            width: 100%;
            display: grid;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: -150px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .portfolio-text13 {
            font-size: 3rem;
            text-align: center;
          }
          .portfolio-text14 {
            color: var(--dl-color-gray-700);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .portfolio-container6 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 1600px) {
            .portfolio-banner {
              background-size: cover;
            }
            .portfolio-container1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .portfolio-text02 {
              color: var(--dl-color-gray-500);
              font-weight: 300;
            }
            .portfolio-image1 {
              margin-top: -840px;
            }
            .portfolio-text13 {
              font-size: 3rem;
            }
          }
          @media (max-width: 1200px) {
            .portfolio-image1 {
              margin-top: -720px;
            }
          }
          @media (max-width: 991px) {
            .portfolio-container1 {
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .portfolio-blog {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .portfolio-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
            .portfolio-image1 {
              margin-top: -600px;
              border-bottom-width: var(--dl-size-size-small);
            }
            .portfolio-text14 {
              text-align: center;
            }
            .portfolio-container6 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .portfolio-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .portfolio-text {
              font-size: 5rem;
            }
            .portfolio-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .portfolio-blog-post-card {
              flex-direction: column;
            }
            .portfolio-image {
              width: 100%;
              align-self: center;
            }
            .portfolio-image1 {
              margin-top: -400px;
            }
            .portfolio-gallery {
              margin-top: -50px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .portfolio-text14 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .portfolio-container6 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .portfolio-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .portfolio-text {
              font-size: 3rem;
            }
            .portfolio-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .portfolio-container4 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .portfolio-image1 {
              margin-top: -100px;
            }
            .portfolio-gallery {
              padding: var(--dl-space-space-unit);
            }
            .portfolio-container6 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Portfolio
