import React from 'react'

import PropTypes from 'prop-types'

const WorkDefaultCard = (props) => {
  return (
    <>
      <div
        className={`work-default-card-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="work-default-card-image"
        />
        <div className="work-default-card-container">
          <div className="work-default-card-container1">
            <span className="work-default-card-text">{props.pROJECTTYPE}</span>
            <span className="work-default-card-text01">{props.status}</span>
          </div>
          <h1 className="work-default-card-text02">{props.pROJECTNAME}</h1>
          <span className="work-default-card-text03">{props.description}</span>
          <div className="work-default-card-container2">
            <div className="work-default-card-profile">
              <span className="work-default-card-text04">Start Date:</span>
              <span className="work-default-card-text05">
                First Version Date:
              </span>
              <span className="work-default-card-text06">Revisions:</span>
              <span className="work-default-card-text07">
                Final Revision Date:
              </span>
            </div>
            <div className="work-default-card-profile1">
              <span className="work-default-card-text08">
                {props.pROJECTDATE}
              </span>
              <span className="work-default-card-text09">
                {props.fIRSTVERSIONDATE}
              </span>
              <span className="work-default-card-text10">
                {props.revisionsDate}
              </span>
              <span className="work-default-card-text11">
                {props.finalRevisionDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .work-default-card-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .work-default-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .work-default-card-image {
            width: auto;
            height: fit-content;
            max-width: 500px;
            min-width: 0px;
            align-self: center;
            max-height: 350px;
            min-height: 350px;
            object-fit: scale-down;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
          }
          .work-default-card-container {
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
          .work-default-card-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .work-default-card-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .work-default-card-text01 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .work-default-card-text02 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .work-default-card-text03 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .work-default-card-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .work-default-card-profile {
            display: flex;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .work-default-card-text04 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .work-default-card-text05 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .work-default-card-text06 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .work-default-card-text07 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .work-default-card-profile1 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .work-default-card-text08 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .work-default-card-text09 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .work-default-card-text10 {
            align-self: flex-start;
            font-style: normal;
            font-family: Inter;
            font-weight: 400;
            margin-left: 0px;
          }
          .work-default-card-text11 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }

          .work-default-card-root-class-name1 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .work-default-card-root-class-name2 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .work-default-card-root-class-name3 {
            flex: 0;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            background-color: #ffffff;
          }

          .work-default-card-root-class-name5 {
            flex: 0;
            margin-bottom: var(--dl-space-space-threeunits);
            background-color: #ffffff;
          }
          .work-default-card-root-class-name6 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .work-default-card-root-class-name7 {
            margin-bottom: var(--dl-space-space-threeunits);
          }

          .work-default-card-root-class-name9 {
            flex: 0;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            background-color: #ffffff;
          }
          .work-default-card-root-class-name10 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .work-default-card-root-class-name11 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          @media (max-width: 991px) {
            .work-default-card-blog-post-card {
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .work-default-card-blog-post-card {
              flex-direction: column;
            }
            .work-default-card-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .work-default-card-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

WorkDefaultCard.defaultProps = {
  pROJECTTYPE: 'Project Type',
  pROJECTDATE: 'Start Date:',
  pROJECTNAME: 'Project Name',
  fIRSTVERSIONDATE: 'First version Date',
  rootClassName: '',
  revisionsDate: 'Revisions:',
  finalRevisionDate: 'Final Revision Date:',
  status: 'UNPAID',
  imageAlt: 'image',
  description: 'project description',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=500',
}

WorkDefaultCard.propTypes = {
  pROJECTTYPE: PropTypes.string,
  pROJECTDATE: PropTypes.string,
  pROJECTNAME: PropTypes.string,
  fIRSTVERSIONDATE: PropTypes.string,
  rootClassName: PropTypes.string,
  revisionsDate: PropTypes.string,
  finalRevisionDate: PropTypes.string,
  status: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default WorkDefaultCard
