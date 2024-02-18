import React from 'react'

import PropTypes from 'prop-types'

const NestedWorkDefaultCard = (props) => {
  return (
    <>
      <div
        className={`nested-work-default-card-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="nested-work-default-card-image"
        />
        <div className="nested-work-default-card-container">
          <div className="nested-work-default-card-container1">
            <span className="nested-work-default-card-text">
              {props.pROJECTTYPE}
            </span>
          </div>
          <h1 className="nested-work-default-card-text1">
            {props.pROJECTNAME}
          </h1>
          <div className="nested-work-default-card-container2">
            <div className="nested-work-default-card-profile">
              <span className="nested-work-default-card-text2">
                Start Date:
              </span>
              <span className="nested-work-default-card-text3">Revisions:</span>
              <span className="nested-work-default-card-text4">
                Completion Date:
              </span>
            </div>
            <div className="nested-work-default-card-profile1">
              <span className="nested-work-default-card-text5">
                {props.pROJECTDATE}
              </span>
              <span className="nested-work-default-card-text6">
                {props.revisionsDate}
              </span>
              <span className="nested-work-default-card-text7">
                {props.finalRevisionDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .nested-work-default-card-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 900px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            min-height: 350px;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .nested-work-default-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .nested-work-default-card-image {
            width: auto;
            height: fit-content;
            max-width: 500px;
            min-width: 0px;
            align-self: center;
            max-height: 350px;
            min-height: 0px;
            object-fit: scale-down;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
          }
          .nested-work-default-card-container {
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
          .nested-work-default-card-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .nested-work-default-card-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .nested-work-default-card-text1 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .nested-work-default-card-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nested-work-default-card-profile {
            display: flex;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .nested-work-default-card-text2 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .nested-work-default-card-text3 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .nested-work-default-card-text4 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .nested-work-default-card-profile1 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .nested-work-default-card-text5 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .nested-work-default-card-text6 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .nested-work-default-card-text7 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .nested-work-default-card-root-class-name {
            margin-top: 0px;
          }
          .nested-work-default-card-root-class-name1 {
            margin-top: 0px;
          }

          .nested-work-default-card-root-class-name5 {
            margin-top: 0px;
          }

          .nested-work-default-card-root-class-name9 {
            margin-top: 0px;
          }
          .nested-work-default-card-root-class-name10 {
            margin-top: 0px;
          }

          @media (max-width: 991px) {
            .nested-work-default-card-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .nested-work-default-card-blog-post-card {
              flex-direction: column;
            }
            .nested-work-default-card-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .nested-work-default-card-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

NestedWorkDefaultCard.defaultProps = {
  pROJECTNAME: 'Project Name',
  rootClassName: '',
  finalRevisionDate: 'Final Revision Date:',
  pROJECTDATE: 'Start Date:',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=500',
  imageAlt: 'image',
  pROJECTTYPE: 'Project Type',
  revisionsDate: 'Revisions:',
}

NestedWorkDefaultCard.propTypes = {
  pROJECTNAME: PropTypes.string,
  rootClassName: PropTypes.string,
  finalRevisionDate: PropTypes.string,
  pROJECTDATE: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  pROJECTTYPE: PropTypes.string,
  revisionsDate: PropTypes.string,
}

export default NestedWorkDefaultCard
