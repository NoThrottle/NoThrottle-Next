import React from 'react'

import PropTypes from 'prop-types'

const NestedWorkHeader = (props) => {
  return (
    <>
      <div className={`nested-work-header-container ${props.rootClassName} `}>
        <div className="nested-work-header-container1">
          <span className="nested-work-header-text">{props.text11}</span>
          <span className="nested-work-header-text1">{props.text1}</span>
        </div>
        <h1 className="nested-work-header-text2">{props.heading}</h1>
        <span className="nested-work-header-text3">{props.text}</span>
      </div>
      <style jsx>
        {`
          .nested-work-header-container {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1106px;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .nested-work-header-container1 {
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xlarge);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .nested-work-header-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-right: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .nested-work-header-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nested-work-header-text2 {
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .nested-work-header-text3 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .nested-work-header-root-class-name {
            max-width: 900px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .nested-work-header-root-class-name1 {
            max-width: 900px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .nested-work-header-root-class-name2 {
            max-width: 900px;
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

NestedWorkHeader.defaultProps = {
  text: 'project description',
  text1: 'UNPAID',
  heading: 'Project Name',
  rootClassName: '',
  text11: 'Project Type',
}

NestedWorkHeader.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
}

export default NestedWorkHeader
