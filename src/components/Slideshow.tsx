import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { SlideshowProps } from './interfaces';

export const Slideshow = ({ duration, images, arrows }: SlideshowProps) => {
    return (
        <div className="slide-container">
            <Fade duration={duration} arrows={arrows}>
                {images.map((image: string) => (
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={image} alt={image} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};
