import React from 'react'

import PropTypes from 'prop-types'

const NumbersCard = (props) => {
  return (
    <>
      <div className="numbers-card-numbers-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="numbers-card-image"
        />
        <span className="numbers-card-number">{props.number}</span>
        <span className="numbers-card-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .numbers-card-numbers-card {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .numbers-card-image {
            width: 45px;
            height: 45px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .numbers-card-number {
            color: var(--dl-color-scheme-white);
            font-size: 48px;
            text-align: center;
            line-height: 1.1;
          }
          .numbers-card-text {
            color: rgba(255, 255, 255, 0.8);
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

NumbersCard.defaultProps = {
  image_src: '/playground_assets/message-200h.png',
  text: 'sessions',
  image_alt: 'image',
  number: '2,148',
}

NumbersCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  number: PropTypes.string,
}

export default NumbersCard
