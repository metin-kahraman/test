import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

interface ImageSliderProps {
    imageUrls: string[];
}


const ImageSliderTest: React.FC<ImageSliderProps> = ({ imageUrls }) => {
    const [randomImageUrls, setRandomImageUrls] = useState<string[]>([]);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesToShow = isMobile ? 1 : imageUrls.length > 2 ? 2 : imageUrls.length;
    const slideWidth = isMobile ? '100%' : `calc(100% / ${slidesToShow})`;

    useEffect(() => {
        const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
        setRandomImageUrls(shuffled);
    }, [imageUrls]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (randomImageUrls.length > 1) {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % randomImageUrls.length);
            }, 3000);
        }

        return () => clearInterval(intervalId!);
    }, [randomImageUrls]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${currentIndex * parseInt(slideWidth, 10)}px)`;
        }
    }, [currentIndex, slideWidth]);

    const getDisplayedImages = (): string[] => {
        if (randomImageUrls.length <= slidesToShow) return randomImageUrls;

        let displayedImages = randomImageUrls.slice(currentIndex, currentIndex + slidesToShow);

        if (displayedImages.length < slidesToShow && randomImageUrls.length > 2) {
            const remaining = slidesToShow - displayedImages.length
            displayedImages = [...displayedImages, ...randomImageUrls.slice(0, remaining)]
        }
        return displayedImages
    }

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div
                ref={sliderRef}
                style={{
                    display: 'flex',
                    width: `${randomImageUrls.length * parseInt(slideWidth, 10)}px`,
                }}
            >
                {getDisplayedImages().map((imageUrl, index) => (
                    <div key={index} style={{ width: slideWidth, flexShrink: 0 }}>
                        <img src={imageUrl} alt={`Slide ${index + 1}`} style={{ width: '100%', display: 'block' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};



export default ImageSliderTest;