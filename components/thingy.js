import React from 'react'

import PropTypes from 'prop-types'

const Thingy = (props) => {
  return (
    <>
      <div className={`thingy-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="thingy-image"
        />
        <div className="thingy-container">
          <div className="thingy-container1">
            <span className="thingy-text">{props.pROJECTTYPE}</span>
            <span className="thingy-text1">{props.status}</span>
          </div>
          <h1 className="thingy-text2">{props.pROJECTNAME}</h1>
          <span className="thingy-text3">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .thingy-blog-post-card {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1106px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .thingy-blog-post-card:hover {
            transform: scale(1.02);
          }
          .thingy-image {
            width: auto;
            height: fit-content;
            max-width: auto;
            min-width: 0px;
            align-self: center;
            max-height: 350px;
            min-height: 350px;
            object-fit: scale-down;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .thingy-container {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #2c2c2c;
          }
          .thingy-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .thingy-text {
            color: var(--dl-color-primary-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .thingy-text1 {
            color: var(--dl-color-gray-900);
            font-weight: 300;
          }
          .thingy-text2 {
            color: var(--dl-color-gray-white);
            font-size: 4em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .thingy-text3 {
            color: var(--dl-color-gray-900);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .thingy-root-class-name {
            align-self: center;
            background-color: var(--dl-color-gray-white);
          }
          .thingy-root-class-name1 {
            width: 100%;
            align-self: center;
          }
          .thingy-root-class-name2 {
            width: 100%;
            align-self: center;
          }
          .thingy-root-class-name3 {
            width: 100%;
            align-self: center;
          }
          @media (max-width: 1200px) {
            .thingy-image {
              height: auto;
            }
            .thingy-container {
              width: 100%;
            }
            .thingy-root-class-name {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .thingy-root-class-name1 {
              margin-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .thingy-image {
              width: auto;
              height: auto;
              max-width: 100%;
              min-height: 0px;
            }
            .thingy-container {
              flex: 1;
              width: 100%;
              height: auto;
              align-items: stretch;
            }
            .thingy-root-class-name {
              align-self: center;
            }
            .thingy-root-class-name1 {
              align-self: center;
            }
            .thingy-root-class-name2 {
              align-self: center;
            }
            .thingy-root-class-name3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .thingy-blog-post-card {
              flex-direction: column;
            }
            .thingy-image {
              width: 100%;
            }
            .thingy-root-class-name {
              width: auto;
              align-self: stretch;
            }
            .thingy-root-class-name1 {
              width: auto;
              align-self: stretch;
            }
            .thingy-root-class-name2 {
              width: auto;
              align-self: stretch;
            }
            .thingy-root-class-name3 {
              width: auto;
              align-self: stretch;
            }
          }
          @media (max-width: 479px) {
            .thingy-text2 {
              width: 100%;
              align-self: stretch;
            }
            .thingy-root-class-name {
              width: auto;
              align-self: stretch;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              background-color: var(--dl-color-gray-white);
            }
            .thingy-root-class-name1 {
              align-self: stretch;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .thingy-root-class-name2 {
              width: auto;
              align-self: stretch;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .thingy-root-class-name3 {
              margin: 0px0;
              align-self: stretch;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Thingy.defaultProps = {
  status: 'UNPAID',
  description: 'project description',
  imageAlt: 'image',
  pROJECTNAME: 'Project Name',
  rootClassName: '',
  pROJECTTYPE: 'Project Type',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
}

Thingy.propTypes = {
  status: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  pROJECTNAME: PropTypes.string,
  rootClassName: PropTypes.string,
  pROJECTTYPE: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Thingy
