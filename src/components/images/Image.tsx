import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import defaultImg from '../../images/noImg.png';


const Image = ({
    src, alt, className, width, height, circle, ...attrs
} : {src: string, alt: string, className: string, width: number, height: number, circle: boolean}) => {

    if(!src) {
        src = defaultImg
    }

    const classes = classNames(
        className,
        {circle}
    );

    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
            {...attrs}
         />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool
};

Image.defaultProps = {
    src: '',
    alt: 'image name',
    className: '',
    width: 100,
    height: 100,
    circle: false
};

export default Image;
