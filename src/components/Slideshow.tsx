import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Props } from './interfaces';

export const Slideshow = (props: Props) => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={props.images[0]} alt={props.images[0]} />
                    </div>
                    <h2>First Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={props.images[1]} alt={props.images[1]} />
                    </div>
                    <h2>Second Slide</h2>
                </div>
            </Fade>
        </div>
    );
};
